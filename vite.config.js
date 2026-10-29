import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        fastway: fileURLToPath(new URL('./fastway.html', import.meta.url)),
        tli: fileURLToPath(new URL('./tli.html', import.meta.url)),
      },
    },
  },
})
