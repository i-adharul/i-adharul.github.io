import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// User site: served from the domain root, so no `base`.
export default defineConfig({
  site: 'https://i-adharul.github.io',
  output: 'static',
  // Keeps legacy URLs: src/pages/foo.astro -> /foo.html
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
