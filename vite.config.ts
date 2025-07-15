import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', // ✅ Leading and trailing slashes are correct
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
