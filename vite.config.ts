import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_full/',
  build: { // <--- ADD THIS 'build' OBJECT
    minify: false // <--- ADD THIS LINE INSIDE THE 'build' OBJECT
  }
})