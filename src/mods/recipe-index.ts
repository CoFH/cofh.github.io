import type { Recipe } from './types.ts';

type RecipeModule = Record<string, Recipe | Record<string, Recipe>>;

const modules = import.meta.glob<RecipeModule>('./*/*/recipes/*.ts', {
  eager: true,
  import: 'default',
});

/**
 * Every recipe defined in `src/mods/`. Used to determine whether the site correctly lists all
 * defined recipes on the relevant pages.
 *
 * See also `RecipeTable.astro` and `src/plugins/recipe-check/`.
 */
export const recipeIndex = new Map<
  Recipe,
  {
    sourceFile: string;
    key: string;
    id: string;
  }
>();

for (const [path, recipes] of Object.entries(modules)) {
  const sourceFile = `src/mods/${path.slice(2)}`;
  const idPrefix = path.slice(2, -3); // Drop leading ./ and trailing .ts

  for (const [key, value] of Object.entries(recipes)) {
    if ('inputs' in value) {
      recipeIndex.set(value as Recipe, {
        sourceFile,
        key,
        id: `${idPrefix}:${key}`,
      });
    } else {
      for (const [subkey, recipe] of Object.entries(value)) {
        const fullKey = `${key}.${subkey}`;

        recipeIndex.set(recipe, {
          sourceFile,
          key: fullKey,
          id: `${idPrefix}:${fullKey}`,
        });
      }
    }
  }
}
