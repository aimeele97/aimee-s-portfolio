import { MarkdownItAsync } from 'markdown-it-async'

function addHeadingRules(md: MarkdownItAsync) {
  const headingComponentName = 'DocsHeading'
  md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    const level = tokens[idx].markup.length
    const next = tokens[idx + 1]
    const children = next ? next.children : []
    const [, href] = children?.[0].attrs?.[1] ?? []

    if (next?.children) {
      next.children = next.children.filter(
        (token) => !['link_open', 'link_close'].includes(token.type),
      )
    }

    tokens[idx].tag = headingComponentName
    tokens[idx].attrSet('href', href ?? '')
    tokens[idx].attrSet('level', level.toString())

    return self.renderToken(tokens, idx, options)
  }
  md.renderer.rules.heading_close = (tokens, idx, options, env, self) => {
    tokens[idx].tag = headingComponentName

    return self.renderToken(tokens, idx, options)
  }
}

export default [addHeadingRules]
