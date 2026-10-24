import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const root = process.cwd();

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        altimetrix: resolve(root, "projects/altimetrix.html"),
        hmiInfotainment: resolve(root, "projects/hmi-infotainment.html"),
        ysClub: resolve(root, "projects/ys-club.html"),
        arivaxDashboard: resolve(root, "projects/arivax-dashboard.html"),
      },
    },
  },
});