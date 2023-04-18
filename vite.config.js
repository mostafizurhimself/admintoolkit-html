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
  publicDir: 'public',
  optimizeDeps: {
    entries: Object.keys(entries),
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: entries,
      output: {
        assetFileNames: (chunkInfo) => {
          let outDir = 'assets';

          // Fonts
          if (/(ttf|woff|woff2|eot)$/.test(chunkInfo.name)) {
            outDir = 'assets/fonts';
          }

          // SVG
          if (/svg$/.test(chunkInfo.name)) {
            outDir = 'assets/svg';
          }

          // Images
          if (/(png|jpg|jpeg|gif|webp)$/.test(chunkInfo.name)) {
            outDir = 'assets/images';
          }

          // Media
          if (/(mp3|mp4|webm|ogg|wav|flac|aac)$/.test(chunkInfo.name)) {
            outDir = 'assets/media';
          }

          // JSON
          if (/json$/.test(chunkInfo.name)) {
            outDir = 'assets/json';
          }

          // JS
          if (/js$/.test(chunkInfo.name)) {
            outDir = 'assets/js';
          }

          // CSS
          if (/css$/.test(chunkInfo.name)) {
            outDir = 'assets/css';
          }

          return `${outDir}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
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
      },
    },
  },
});
