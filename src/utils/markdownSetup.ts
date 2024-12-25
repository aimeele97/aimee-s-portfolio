import type { Options } from 'unplugin-vue-markdown/types'
import MarkdownItPrism from 'markdown-it-prism'
import MarkdownItLinkAttributes from 'markdown-it-link-attributes'
import MarkdownItAttrs from 'markdown-it-attrs'
import MarkdownItAnchor from 'markdown-it-anchor'

export const configMarkdown: Options['markdownItSetup'] = (md) => {
  md.use(MarkdownItPrism)
    .use(MarkdownItLinkAttributes, {
      matcher(href: string) {
        return /^https?:\/\//.test(href)
      },
      attrs: {
        target: '_blank',
        rel: 'noopener',
      },
    })
    .use(MarkdownItAttrs)
    .use(MarkdownItAnchor)
}
