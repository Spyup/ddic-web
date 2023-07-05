import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {join} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    proxy: {
      '^/api': {
        target: 'http://shihyan.nmg.cs.thu.edu.tw:8001/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,'')
      }
    }
  },
  resolve: {
    alias: {
      '@': `${join(__dirname, 'src')}`
    }
  },
  plugins: [vue()],
})
