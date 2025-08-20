import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr"; //Para colorear los svg

// https://vite.dev/config/
const isGithubPages = process.env.GITHUB_PAGES === 'true'
export default defineConfig({
  plugins: [
    tailwindcss(),
    svgr(),
    react()
  ],
  base: isGithubPages ? '/cabos/' : '/',
})
