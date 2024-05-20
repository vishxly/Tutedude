import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
      pages: "/src/pages",
    },
  },
  plugins: [react()],
});
