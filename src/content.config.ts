import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

export const collections = {
  docs: defineCollection({
    loader: glob({
      pattern: '**/*.mdx',
      base: './src/content/docs',
      generateId: ({ entry }) => entry.replace(/(\/index)?\.mdx$/, ''),
    }),
    schema: z.strictObject({
      title: z.string(),
    }),
  }),

  posts: defineCollection({
    loader: glob({
      pattern: '*.md',
      base: './src/content/posts',
      generateId: ({ entry }) => entry.replace(/\.md$/, ''),
    }),
    schema: z.strictObject({
      title: z.string(),
      author: z.string(),
    }),
  }),
};
