import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

/**
 * @returns {import('vite').Plugin}
 */
const fullReloadAlways = () => ({
  name: 'vite-plugin-full-reload-always',
  handleHotUpdate({ server }) {
    server.ws.send({
      type: 'full-reload'
    });

    return [];
  },
});

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  server: {
    host: true,
    open: true
  },
  plugins: [
    fullReloadAlways(),
    solid()
  ],
});
