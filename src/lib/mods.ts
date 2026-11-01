import type { ImageMetadata } from 'astro';
import { getCollection } from 'astro:content';

import modList from '../mods/mod-list.ts';
import type { ModListMod, ModListVersion } from '../mods/types.ts';

export const currentVersion: ModListVersion = modList[0];

export function getModListVersion(mc: string): ModListVersion {
  const version = modList.find((v) => v.mc === mc);

  if (version === undefined) {
    throw new Error(`Unknown Minecraft version ${mc}.`);
  }

  return version;
}

const logos = import.meta.glob<ImageMetadata>('../mods/*/*/images/logo.png', {
  eager: true,
  import: 'default',
});

export function getModLogo(mc: string, slug: string): ImageMetadata | undefined {
  return logos[`../mods/${mc}/${slug}/images/logo.png`];
}

export type ModDocs = { kind: 'link'; href: string } | { kind: 'wip' } | null;

export async function getModDocs(mc: string, mod: ModListMod): Promise<ModDocs> {
  if (mod.docs === 'wip') {
    return { kind: 'wip' };
  }

  if (mod.docs !== undefined) {
    return { kind: 'link', href: mod.docs };
  }

  const entries = await getCollection('docs');

  return entries.some((entry) => entry.id === `${mc}/${mod.slug}`)
    ? { kind: 'link', href: `/docs/${mc}/${mod.slug}/` }
    : null;
}
