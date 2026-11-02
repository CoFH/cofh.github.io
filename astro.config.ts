import { satteri, satteriHeadingIdsPlugin } from '@astrojs/markdown-satteri';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, sharpImageService } from 'astro/config';
import pagefind from 'astro-pagefind';

import { headingAnchors } from './src/lib/heading-anchors.ts';

export default defineConfig({
  site: 'https://teamcofh.com',
  build: { format: 'directory' },
  prerenderConflictBehavior: 'error',
  redirects: {
    '/downloads': '/mods/',
    '/archive': '/blog/',
    '/posts/page-2': '/blog/',
    '/posts/page-3': '/blog/',
    '/docs/1.12': '/mods/1.12/',
    '/about': '/faq/#team-cofh',
  },
  image: {
    service: sharpImageService({ webp: { lossless: true } }),
  },
  markdown: {
    syntaxHighlight: false,
    processor: satteri({
      features: { definitionList: true },
      hastPlugins: [satteriHeadingIdsPlugin(), headingAnchors],
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
