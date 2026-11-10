import type { ImageMetadata } from 'astro';
import { getCollection } from 'astro:content';

import modList from '../mods/mod-list.ts';
import type { ModListMod, ModListSection, ModListVersion } from '../mods/types.ts';

export const currentVersion: ModListVersion = modList[0];

export function getModsHref(version: ModListVersion): string {
  return version === currentVersion ? '/mods/' : `/mods/${version.mc}/`;
}

export function getDocsHref(version: ModListVersion, mod: ModListMod): string {
  return `/docs/${version.mc}/${mod.slug}/`;
}

const logos = import.meta.glob<ImageMetadata>('../mods/*/*/images/logo.png', {
  eager: true,
  import: 'default',
});

export function getModLogo(version: ModListVersion, slug: string): ImageMetadata | undefined {
  return logos[`../mods/${version.mc}/${slug}/images/logo.png`];
}

export type ModDocs = { kind: 'link'; href: string } | { kind: 'wip' } | null;

export async function getModDocs(version: ModListVersion, mod: ModListMod): Promise<ModDocs> {
  if (mod.docs === 'wip') {
    return { kind: 'wip' };
  }

  if (mod.docs !== undefined) {
    return { kind: 'link', href: mod.docs };
  }

  const entries = await getCollection('docs');

  return entries.some((entry) => entry.id === `${version.mc}/${mod.slug}`)
    ? { kind: 'link', href: getDocsHref(version, mod) }
    : null;
}

export async function getDocsSections(version: ModListVersion): Promise<ModListSection[]> {
  const entries = await getCollection('docs');
  const ids = new Set(entries.map((entry) => entry.id));

  return version.sections
    .map((section) => ({
      ...section,
      mods: section.mods.filter((mod) => ids.has(`${version.mc}/${mod.slug}`)),
    }))
    .filter((section) => section.mods.length > 0);
}
