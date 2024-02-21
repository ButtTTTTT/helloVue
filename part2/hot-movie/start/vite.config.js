import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    proxy: {
      "/movieOnInfoList": {
        target: "https://m.maoyan.com/ajax/movieOnInfoList",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/movieOnInfoList/, ""),
      },

      "/comingList": {
        target: "https://m.maoyan.com/ajax/comingList?ci=10&token=&limit=10",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/comingList/, ""),
      },
      "/detailmovie": {
        // fetch("/detailmovie?movieId=1203734")
        target: "https://m.maoyan.com/ajax/detailmovie",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/detailmovie/, ""),
      },
    },
  },
});
