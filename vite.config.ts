import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // ✅ Ensures assets and routing work on GitHub Pages
  base: '/quantum-fortuna-predictive-ai/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // cleaner imports like @/components
    },
  },

  optimizeDeps: {
    exclude: ['lucide-react'], // avoid pre-bundling errors
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      // ✅ Explicit entry point to avoid "missing index" issues
      input: path.resolve(__dirname, 'index.html'),
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
