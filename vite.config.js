import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow access from any network interface
    port: 5173,      // Port number for the Vite development server
  },
  resolve: {
    mainFields: [],
  },
})

