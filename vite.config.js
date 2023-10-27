import { defineConfig } from "vite";
import postcssWhen from "postcss-when";
import postcssDynamicValue from "postcss-dynamic-value";
import postcssFor from "postcss-for";
import postcssHasPseudo from "css-has-pseudo";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        toggle: "toggle/toggle.html",
        togglepolyfill: "toggle/toggle-polyfill.html",
        toggle_novariables: "toggle/toggle-novariables.html",
        tabs: "tabpanel/tabs.html",
        tabspolyfill: "tabpanel/tabs-polyfill.html",
        tabs2: "tabpanel/tabs2.html",
        tabsstylequeries: "tabpanel/tabs-stylequeries.html",
        toc: "toc/toc.html",
        colors: "colorchooser/colors.html",
        colorspolyfill: "colorchooser/colors-polyfill.html",
        tictactoe: "tictactoe/tictactoe.html",
      },
    },
  },
  plugins: [],
  css: {
    postcss: {
      plugins: [
        postcssWhen(),
        postcssHasPseudo(),
        postcssFor(),
        postcssDynamicValue(),
      ],
    },
  },
});
