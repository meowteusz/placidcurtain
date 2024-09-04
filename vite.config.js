import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
      "@comp": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@json": fileURLToPath(new URL("./src/assets/json", import.meta.url)),
      "@bs5": fileURLToPath(
        new URL("./node_modules/bootstrap", import.meta.url),
      ),
    },
  },
});
