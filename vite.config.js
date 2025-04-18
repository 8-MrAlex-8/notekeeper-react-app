import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // (1)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), //(2)
  ],
})

// [DOCUMENTATION]
// tailwind import via Vite:
// 1. npm install tailwindcss @tailwindcss/vite.
// 2. insert 'tailwindcss()' within plugins.
// 3. insert '@import "tailwindcss" to your CSS file/s that imports Tailwind CSS.