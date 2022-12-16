import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssWhen from "postcss-when"
import postcssHasPseudo from "css-has-pseudo"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        toggle: 'toggle.html',
        togglepolyfill: 'toggle-polyfill.html',
        tabs: 'tabs.html',
        tabspolyfill: 'tabs-polyfill.html',
        tabs2: 'tabs2.html',
      },
    },
  },
  plugins: [react()],
  css: {
    postcss: {
        plugins: [postcssWhen(), postcssHasPseudo()],
    },
  },
})
