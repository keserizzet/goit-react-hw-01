import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/goit-react-hw-01/" // 📌 GitHub Pages için düzeltildi
});
