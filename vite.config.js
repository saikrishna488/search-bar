import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "search-bar",
  plugins: [react()],
  server: {
    host: true
  }
})
