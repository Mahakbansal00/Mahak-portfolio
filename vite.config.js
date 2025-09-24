// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGitHubPages = process.env.DEPLOY_TARGET === "gh-pages";
const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  base:  "/Mahak-portfolio/",
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       // Ensure consistent asset naming and paths
  //       assetFileNames: (assetInfo) => {
  //         const info = assetInfo.name.split('.');
  //         const extType = info[info.length - 1];
  //         if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
  //           return `assets/images/[name]-[hash][extname]`;
  //         }
  //         return `assets/[name]-[hash][extname]`;
  //       },
  //       chunkFileNames: 'assets/[name]-[hash].js',
  //       entryFileNames: 'assets/[name]-[hash].js',
  //     },
  //   },
  // },
});
