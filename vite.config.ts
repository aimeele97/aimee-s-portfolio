import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify from 'vite-plugin-vuetify'
import VueRouter from 'unplugin-vue-router/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { configMarkdown } from './src/utils/markdownSetup'

// https://vite.dev/config/
export default defineConfig({
  base: '/aimee-s_portfolio/',
  plugins: [
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: ['./src/components/**', './src/composables/**', './src/stores/**', './src/utils/**'],
      imports: ['vue', 'vue-router', 'pinia'],
      vueTemplate: true,
    }),
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
      // A function providing the Markdown It instance gets the ability to apply custom settings/plugins
      markdownItSetup: configMarkdown,
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
