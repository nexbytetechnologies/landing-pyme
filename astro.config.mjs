// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nexbytetechnologies.github.io',
  base: '/landing-pyme',

  vite: {
    plugins: [tailwindcss()]
  }
});