import type { Options } from 'unplugin-vue-markdown/types'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItPrism from 'markdown-it-prism'

export const configMarkdown: Options['markdownItSetup'] = (md) => {
  md.use(MarkdownItAnchor)
  md.use(MarkdownItPrism)
}
