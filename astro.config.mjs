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
  integrations: [
    mdx(),
    sitemap({
      // build.format:'file' emits /foo.html; make the sitemap match each page's canonical URL.
      serialize(item) {
        const u = new URL(item.url);
        if (u.pathname !== '/' && !u.pathname.endsWith('.html')) u.pathname += '.html';
        item.url = u.href;
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
