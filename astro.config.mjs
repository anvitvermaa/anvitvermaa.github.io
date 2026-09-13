// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to a GitHub *user* page (anvitvermaa.github.io) => served from root.
export default defineConfig({
  site: 'https://anvitvermaa.github.io',
  devToolbar: { enabled: false },
  build: {
    inlineStylesheets: 'auto',
  },
});
