import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/AstriOrb/",
  server: {
    host: true
  },
  build: {
    // Enable minification with terser for better compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console.log in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
      mangle: true,
    },
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js and postprocessing into their own chunk
          'vendor-three': ['three', 'postprocessing'],
          // React and motion in their own chunk
          'vendor-react': ['react', 'react-dom', 'motion'],
        },
      },
    },
    // Warn if chunks are too large
    chunkSizeWarningLimit: 500,
    // Generate source maps for debugging
    sourcemap: false,
    // Target modern browsers for smaller bundle
    target: 'es2020',
  },
})
