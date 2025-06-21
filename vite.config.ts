import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_full/' // <--- ADD OR UPDATE THIS LINE
  // If you had a build.outDir here previously, it should remain.
  // e.g., build: { outDir: 'docs' }
})