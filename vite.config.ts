import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";

export default defineConfig({
  plugins: [
    devtools({
      injectSource: {
        enabled: true,
      },
    }),

    react(),
    tailwindcss()
  ],

  server: {
    proxy: {
      "/dk-api": {
        target: "https://api.digikala.com",
        changeOrigin: true,

        rewrite: (path) => {
          return path.replace(/^\/dk-api/, "");
        },
      },
    },
  },

});