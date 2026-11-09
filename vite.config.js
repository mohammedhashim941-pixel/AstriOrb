import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { createHash } from "crypto"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PUBLIC_PRECACHE = [
  '/manifest.webmanifest',
  '/favicon.svg',
  '/favicon-32.png',
  '/apple-touch-icon.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-maskable-512.png',
  '/contact-photo.png',
]

/** Emits /sw.js with the hashed build output in its offline precache list. */
function serviceWorker() {
  return {
    name: 'card-service-worker',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      // Browsers that run this site use woff2, so the woff fallbacks stay out.
      const built = Object.keys(bundle)
        .filter((file) => file !== 'index.html' && !file.endsWith('.woff'))
        .map((file) => `/${file}`)
      const template = readFileSync(path.resolve(__dirname, 'src/pwa/sw.template.js'), 'utf8')
      const version = createHash('sha256').update(built.join() + template).digest('hex').slice(0, 12)
      const source = template
        .replace(/^\/\* global .*\r?\n/, '')
        .replace('__CACHE_VERSION__', version)
        .replace('__PRECACHE_URLS__', JSON.stringify(['/', ...PUBLIC_PRECACHE, ...built]))
      this.emitFile({ type: 'asset', fileName: 'sw.js', source })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), serviceWorker()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
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
          'vendor-three': ['three'],
          'vendor-react': ['react', 'react-dom'],
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
