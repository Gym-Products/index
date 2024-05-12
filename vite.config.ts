import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/index/",
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@components/Atoms': path.resolve(__dirname, 'src/components/Atoms'),
      '@components/Molecules': path.resolve(__dirname, 'src/components/Molecules'),
      '@components/Organisms': path.resolve(__dirname, 'src/components/Organisms'),
      '@templates': path.resolve(__dirname, 'src/templates'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
})
