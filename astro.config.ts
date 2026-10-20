import { satteri } from '@astrojs/markdown-satteri';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, sharpImageService } from 'astro/config';
import pagefind from 'astro-pagefind';

export default defineConfig({
  site: 'https://teamcofh.com',
  build: { format: 'directory' },
  image: {
    service: sharpImageService({ webp: { lossless: true } }),
  },
  markdown: {
    syntaxHighlight: false,
    processor: satteri({
      features: { definitionList: true },
    }),
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
    }),
    pagefind(),
  ],
  experimental: {
    parallelPrerender: true,
  },
  vite: {
    // Keep small scripts and stylesheets as separate (cacheable) assets,
    // instead of inlining them into every page
    build: { assetsInlineLimit: 0 },
  },
});
