// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // تحسين bundle splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['react-icons']
        }
      }
    },
    // تحسين الضغط
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // تحسين dev server
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  // تحسين الأداء
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-icons']
  }
})