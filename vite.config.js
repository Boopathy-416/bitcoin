import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/register': {
        target: 'http://ec2-54-84-228-107.compute-1.amazonaws.com:8080',
        changeOrigin: true,
        secure: false, // Set to false if your backend does not use HTTPS
      },
    },
  },
});
