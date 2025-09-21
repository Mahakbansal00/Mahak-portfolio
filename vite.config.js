// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use base "/" for Vercel; GitHub Pages requires "/Mahak-portfolio/"
const isGitHubPages = process.env.VERCEL === undefined;

export default defineConfig(({ command }) => ({
  base: isGitHubPages && command === "build" ? "/Mahak-portfolio/" : "/",
  plugins: [react()]
}));
