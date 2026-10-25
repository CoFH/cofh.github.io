import type { ImageMetadata } from 'astro';

import type {
  Fluid,
  FluidDefinition,
  Item,
  ItemDefinition,
  ItemGroup,
  ItemGroupDefinition,
  Recipe,
  RecipeDefinition,
  RecipeType,
  RecipeTypeDefinition,
} from './types.ts';

function isAbsoluteUrl(url: string): boolean {
  return /^https?:\/\//.test(url);
}

function toKebabCase(key: string): string {
  return key.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
}

function toWikiPage(name: string): string {
  return encodeURIComponent(name.replaceAll(' ', '_')).replaceAll("'", '%27');
}

function getHref(
  path: string,
  key: string,
  name: string,
  url: string | null | undefined,
): string | undefined {
  if (url === null) {
    return undefined;
  }

  const wiki = path.endsWith('/minecraft');
  const page = url ?? (wiki ? toWikiPage(name) : `${toKebabCase(key)}/`);

  if (isAbsoluteUrl(page)) {
    return page;
  }

  return wiki ? `https://minecraft.wiki/w/${page}` : `/docs/${path}/${page}`;
}

const images = import.meta.glob<ImageMetadata>('./*/*/images/*.{png,webp}', {
  eager: true,
  import: 'default',
});

export function findImage(path: string, name: string): ImageMetadata;
export function findImage(
  path: string,
  name: string,
  variant: 'icon' | 'slot',
): ImageMetadata | undefined;
export function findImage(
  path: string,
  name: string,
  variant?: 'icon' | 'slot',
): ImageMetadata | undefined {
  let filename = toKebabCase(name);
  if (variant !== undefined) {
    filename += `.${variant}`;
  }

  const imagePath = `${path}/images/${filename}`;

  const image = images[`./${imagePath}.png`] ?? images[`./${imagePath}.webp`];

  if (image === undefined && variant === undefined) {
    throw new Error(`No image for ${name} in ${path}: expected src/mods/${imagePath}.png or .webp`);
  }

  return image;
}

export function defineItems<const T extends Record<string, ItemDefinition>>(
  path: string,
  definitions: T,
): Record<keyof T, Item> {
  const items: Record<string, Item> = {};

  for (const [key, definition] of Object.entries(definitions)) {
    items[key] = {
      name: definition.name,
      href: getHref(path, key, definition.name, definition.url),
      image: findImage(path, key),
      iconImage: findImage(path, key, 'icon'),
      slotImage: findImage(path, key, 'slot'),
    };
  }

  return items as Record<keyof T, Item>;
}

export function defineFluids<const T extends Record<string, FluidDefinition>>(
  path: string,
  definitions: T,
): Record<keyof T, Fluid> {
  const fluids: Record<string, Fluid> = {};

  for (const [key, definition] of Object.entries(definitions)) {
    fluids[key] = {
      name: definition.name,
      href: getHref(path, key, definition.name, definition.url),
      image: findImage(path, key),
      iconImage: findImage(path, key, 'icon'),
    };
  }

  return fluids as Record<keyof T, Fluid>;
}

export function defineItemGroups<const T extends Record<string, ItemGroupDefinition>>(
  path: string,
  definitions: T,
): Record<keyof T, ItemGroup> {
  const itemGroups: Record<string, ItemGroup> = {};

  for (const [key, definition] of Object.entries(definitions)) {
    itemGroups[key] = {
      name: definition.name,
      href: getHref(path, key, definition.name, definition.url),
      prefix: definition.prefix,
      items: definition.items,
    };
  }

  return itemGroups as Record<keyof T, ItemGroup>;
}

export function defineRecipeType(
  path: string | undefined,
  definition: RecipeTypeDefinition,
): RecipeType {
  let href = definition.url;

  if (!isAbsoluteUrl(href)) {
    if (path === undefined) {
      throw new Error(`Recipe type ${definition.name} has a relative URL but no path`);
    }

    href = `/docs/${path}/${href}`;
  }

  return {
    name: definition.name,
    href,
    withEnergy: definition.withEnergy ?? false,
    allResultsBold: definition.allResultsBold ?? false,
    component: definition.component,
  };
}

type RecipeDefinitions = Record<string, RecipeDefinition | Record<string, RecipeDefinition>>;

type Recipes<T extends RecipeDefinitions> = {
  [K in keyof T]: T[K] extends RecipeDefinition ? Recipe : Record<keyof T[K], Recipe>;
};

export function defineRecipes<const T extends RecipeDefinitions>(
  type: RecipeType,
  definitions: T,
): Recipes<T> {
  const recipes: Record<string, Recipe | Record<string, Recipe>> = {};

  for (const [key, definition] of Object.entries(definitions)) {
    if ('inputs' in definition && Array.isArray(definition.inputs)) {
      recipes[key] = { ...(definition as RecipeDefinition), type };
    } else {
      const group: Record<string, Recipe> = {};

      for (const [name, recipe] of Object.entries(definition as Record<string, RecipeDefinition>)) {
        group[name] = { ...recipe, type };
      }

      recipes[key] = group;
    }
  }

  return recipes as Recipes<T>;
}
