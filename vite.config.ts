import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/quantum-fortuna-predictive-ai/', // ✅ Required for GitHub Pages subpath
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Optional: cleaner imports like @/components
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // ✅ Explicit entry point
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          charts: ['chart.js', 'react-chartjs-2'],
          icons: ['lucide-react'],
        },
      },
    },
  },
});
