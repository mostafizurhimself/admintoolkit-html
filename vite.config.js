import { defineConfig } from 'vite';
import { resolve } from 'path';
import glob from 'glob';

const entries = glob.sync('./src/**/*.html').reduce((acc, path) => {
  const name = path.split('/').pop().split('.').shift();
  acc[name] = path;
  return acc;
}, {});

export default defineConfig({
  root: 'src',
  resolve: {
    alias: {
      '@tailwind.config': resolve(__dirname, './tailwind.config.js'),
      '@': resolve(__dirname, './src'),
    }
  },
  optimizeDeps: {
    entries: Object.keys(entries),
  },
  build: {
    target: 'esnext',
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: entries,
      output: {
        assetFileNames: (chunkInfo) => {
          let outDir = '';

          // Fonts
          if (/(ttf|woff|woff2|eot)$/.test(chunkInfo.name)) {
            outDir = 'fonts';
          }

          // SVG
          if (/svg$/.test(chunkInfo.name)) {
            outDir = 'svg';
          }

          // Images
          if (/(png|jpg|jpeg|gif|webp)$/.test(chunkInfo.name)) {
            outDir = 'images';
          }

          // Media
          if (/(mp3|mp4|webm|ogg|wav|flac|aac)$/.test(chunkInfo.name)) {
            outDir += 'media';
          }

          // JSON
          if (/json$/.test(chunkInfo.name)) {
            outDir = 'json';
          }

          // JS
          if (/js$/.test(chunkInfo.name)) {
            outDir = 'js';
          }

          // CSS
          if (/css$/.test(chunkInfo.name)) {
            outDir = 'css';
          }

          return `${outDir}/[name][extname]`;
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        // manualChunks: (id) => {
        //   const fileName = id.split("/").pop();

        //   // if (id.includes("node_modules/")) {
        //   //   return "plugins";
        //   // }

        //   // if (id.includes("components/")) {
        //   //   return "components/" + fileName;
        //   // }

        //   // if (id.includes("custom/")) {
        //   //   return "custom/" + fileName;
        //   // }
        // },
      }
    },
  },
});
