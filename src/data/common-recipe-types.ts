import Crafting from '../components/docs/recipe/Crafting.astro';
import Smelting from '../components/docs/recipe/Smelting.astro';
import { defineRecipeType } from './define.ts';

export const crafting = defineRecipeType(undefined, {
  name: 'Crafting',
  url: 'https://minecraft.wiki/w/Crafting',
  component: Crafting,
});

export const smelting = defineRecipeType(undefined, {
  name: 'Smelting',
  url: 'https://minecraft.wiki/w/Smelting',
  component: Smelting,
});
