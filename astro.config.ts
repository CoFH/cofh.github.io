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
    '/docs': '/mods/',
    '/docs/terminology': '/faq/',
    '/docs/redstone-flux': '/faq/#what-is-redstone-flux-rf',
    '/docs/1.15/cofh-core': '/mods/1.15/#cofh-core',
    '/docs/1.15/cofh-core/commands': '/mods/1.15/#cofh-core',
    '/docs/1.15/cofh-core/ectoplasm': '/mods/1.15/#cofh-core',
    '/docs/1.15/cofh-core/status-effects': '/mods/1.15/#cofh-core',
    '/docs/1.15/cofh-core/tweaks': '/mods/1.15/#cofh-core',
    '/docs/1.16/archers-paradox': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/blaze-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/challenge-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/diamond-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/displacement-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/ender-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/explosive-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/frost-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/glowstone-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/lightning-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/phantasmal-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/prismarine-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/quartz-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/redstone-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/shulker-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/slime-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/spore-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/training-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/archers-paradox/verdant-arrow': '/mods/1.16/#archers-paradox',
    '/docs/1.16/ensorcellation': '/mods/1.16/#ensorcellation',
    '/docs/1.16/redstone-arsenal': '/mods/1.16/#redstone-arsenal',
    '/docs/1.16/thermal-series': '/mods/1.16/#thermal-foundation',
    '/docs/1.16/thermal-series/thermalpedia': '/mods/1.16/#thermal-foundation',
    '/docs/1.18/redstone-arsenal': '/mods/1.18/#redstone-arsenal',
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
