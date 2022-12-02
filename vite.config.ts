import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssWhen from "postcss-when"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
        plugins: [postcssWhen()],
    },
  },
})
