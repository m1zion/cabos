import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr"; //Para colorear los svg

// https://vite.dev/config/
export default defineConfig({
  base: 'https://m1zion.github.io/cabos/',
  plugins: [
    tailwindcss(),
    svgr(),
    react()
  ],
})
