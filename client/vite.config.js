import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   base: '/BONMAJ/client/',
  root:"./",
  plugins: [react()],
  build: {
    outDir: 'dist', // The output directory for the build
  },
})
