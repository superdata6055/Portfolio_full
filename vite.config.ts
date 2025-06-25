import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_full/',
  build: {
    minify: false // <--- This line is crucial
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})