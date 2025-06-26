import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_full/',
  build: {
    outDir: 'docs',
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  define: {
    // Force include AI Scrapping content
    __AI_SCRAPPING_CONTENT__: JSON.stringify("AI Scrapping")
  }
})