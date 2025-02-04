import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@router': path.resolve(__dirname, './src/router'),
      '@styles': path.resolve(__dirname, './src/index.css'),
      '@component': path.resolve(__dirname, './src/components'),
      '@page': path.resolve(__dirname, './src/pages'),
    },
  },
})
