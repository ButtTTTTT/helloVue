import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  
  server: {
    proxy: {
      "/hot-news": {
        target: "http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hot-news/, ""),
      },
      "/entertainment-news": {
        target: "http://c.3g.163.com/nc/article/list/T1348648517839/0-20.html",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/entertainment-news/, ""),
      },
      "/sport-news": {
        target: "http://c.3g.163.com/nc/article/list/T1348649079062/0-20.html",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sport-news/, ""),
      },
      "/car-news": {
        target: "http://c.3g.163.com/nc/auto/list/5bmz6aG25bGx/0-20.html",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/car-news/, ""),
      },
    },
  },
});
