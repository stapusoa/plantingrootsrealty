import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { defineConfig } from "vite";

export default defineConfig({
  // DO NOT set root unless you know why — let it use default
  base: '/',
  root: '.', // default is fine
  plugins: [react(), tailwindcss(), nodePolyfills()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/lib": path.resolve(__dirname, "src/lib"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      buffer: "buffer",
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  define: {
    global: {},
  },
  assetsInclude: ["**/*.md"],
});