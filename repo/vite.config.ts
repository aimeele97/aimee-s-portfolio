import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify from 'vite-plugin-vuetify'
import Markdown from 'unplugin-vue-markdown/vite'
import VueRouter from 'unplugin-vue-router/vite'

// https://vite.dev/config/
export default defineConfig({
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
      /* options */
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
