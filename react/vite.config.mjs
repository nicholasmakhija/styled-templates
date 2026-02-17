import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * @returns {import('vite').Plugin}
 */
const computedStyleReload = () => ({
  name: 'vite-plugin-computed-style-reload',
  handleHotUpdate({ read, server }) {
    /** @type {Promise<string>} */(read()).then((content) => {
      const computedStyles = content.match(/style.prop[^$]+?]: ?\(/g) || [];

      if (computedStyles.length) {
        server.ws.send({
          type: 'full-reload'
        });
      }
    });
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
    computedStyleReload(),
    react()
  ],
});
