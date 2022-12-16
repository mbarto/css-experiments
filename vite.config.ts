import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssWhen from "postcss-when"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        toggle: 'toggle.html',
        tabs: 'tabs.html',
        tabs2: 'tabs2.html',
      },
    },
  },
  plugins: [react()],
  css: {
    postcss: {
        plugins: [postcssWhen()],
    },
  },
})
