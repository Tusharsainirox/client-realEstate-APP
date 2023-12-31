import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://realestate-backend-w23i.onrender.com',
        secure: false,
      },
    },
  },

  plugins: [react()],
});
