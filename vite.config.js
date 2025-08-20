import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr"; //Para colorear los svg

// https://vite.dev/config/
//Para hacer el build en github pages corremos este comando, de esta manera pondra la base necesaria
//GITHUB_PAGES=true npm run build

const isGithubPages = process.env.GITHUB_PAGES === 'true'
export default defineConfig({
  plugins: [
    tailwindcss(),
    svgr(),
    react()
  ],
  base: isGithubPages ? '/cabos/' : '/',
})
