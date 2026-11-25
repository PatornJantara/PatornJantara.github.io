
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: 'https://github.com/PatornJantara/PatornJantara.github.io', // Replace 'your-repo-name' with the actual name of your GitHub repository
})
