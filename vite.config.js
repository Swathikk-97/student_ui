import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Bind to 0.0.0.0 for network access
    port: 5173, // You can specify a fixed port if needed
  },
});
