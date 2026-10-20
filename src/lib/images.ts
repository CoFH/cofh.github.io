import type { ImageMetadata } from 'astro';

const images = import.meta.glob<ImageMetadata>('../images/**/*.{gif,jpg,png}', {
  eager: true,
  import: 'default',
});

/**
 * Returns the image at `path` under src/images/.
 */
export function image(path: string): ImageMetadata {
  const found = images[`../images/${path}`];

  if (found === undefined) {
    throw new Error(`No image at src/images/${path}`);
  }

  return found;
}
