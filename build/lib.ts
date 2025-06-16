import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, './../src/index.ts'),
      name: 'vue-number-flip',
      fileName: 'index',
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
