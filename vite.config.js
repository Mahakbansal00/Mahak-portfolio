// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGitHubPages = process.env.DEPLOY_TARGET === "gh-pages";
const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  base:  "/Mahak-portfolio/",
  plugins: [react()],
 
});
