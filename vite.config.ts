import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify from 'vite-plugin-vuetify'
import VueRouter from 'unplugin-vue-router/vite'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItPrism from 'markdown-it-prism'
import Markdown from 'unplugin-vue-markdown/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/aimee-s_portfolio/',
  plugins: [
    VueRouter({
      extensions: ['.vue', '.md'],
      routesFolder: [
        {
          src: 'src/docs',
          // override the global extensions to **only** accept markdown files
          extensions: ['.md'],
        },
      ],
    }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueDevTools(),
    vuetify({ autoImport: true }),
    Markdown({
      /// default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      // A function providing the Markdown It instance gets the ability to apply custom settings/plugins
      markdownItSetup(md) {
        // for example
        md.use(MarkdownItAnchor)
        md.use(MarkdownItPrism)
      },
      // Class names for the wrapper div
      wrapperClasses: '',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
