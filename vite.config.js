import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://keniiis.github.io/app-rick-and-morty',
  plugins: [react()]
})
