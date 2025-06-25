import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_full/',
  build: { // <--- ENSURE THIS 'build' OBJECT IS HERE
    minify: false // <--- AND THIS LINE IS INSIDE IT
  },
  // Keep optimizeDeps if you need it, but the 'build' section is key
  // optimizeDeps: {
  //   exclude: ['lucide-react'],
  // },
})