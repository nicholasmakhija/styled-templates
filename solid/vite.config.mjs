import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  server: {
    host: true,
    open: true
  },
  plugins: [solid()],
});
