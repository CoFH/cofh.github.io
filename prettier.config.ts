import type { Config } from 'prettier';

export default {
  plugins: ['prettier-plugin-astro'],
  printWidth: 100,
  proseWrap: 'always',
  singleQuote: true,
  overrides: [
    { files: '*.astro', options: { parser: 'astro' } },
    { files: '*.md', options: { printWidth: 80 } },
  ],
} satisfies Config;
