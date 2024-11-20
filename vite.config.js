import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // plugins: [react()],
  server: {
    host: true, // Allows binding to 0.0.0.0
  },
})

// vite.config.js
