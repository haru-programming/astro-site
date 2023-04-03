import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: { 
        output: {
          //dist後のFile名を最適化
          assetFileNames: "[ext]/[name][extname]",
        },
      },
    },
  },
});
