import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages base path - update if your repo name is different
// For GitHub Pages: use '/your-repo-name/'
// For custom domain: use '/'
const base = process.env.GITHUB_PAGES ? '/morning_whisper_support/' : '/'

export default defineConfig({
  plugins: [react()],
  base: base,
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})

