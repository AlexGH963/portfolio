import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config — zero extra setup needed for Vercel (it auto-detects the Vite preset).
export default defineConfig({
  plugins: [react()],
})
