import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow access from any network interface
    port: 5173,      // Port number for the Vite development serverp
  },
  resolve: {
    alias: {
      util: 'util/', // Alias for Node's util module
      stream: 'stream-browserify', // Alias for Node's stream module
    },
    // Optional: Specify entry points for Vite to resolve to (modify as needed)
    mainFields: ['browser', 'module', 'main'], // Adjust main fields for better compatibility
  },
  optimizeDeps: {
    include: ['axios'], // Ensure axios is included in dependency optimization
  },
});
