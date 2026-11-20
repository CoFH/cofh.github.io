import { getCollection } from 'astro:content';

import { isTank } from '../../components/docs/recipe/narrow.ts';
import { recipeIndex } from '../../mods/recipe-index.ts';
import type {
  Fluid,
  FluidGroup,
  Item,
  ItemGroup,
  Recipe,
  RecipeSlotOrTank,
  RecipeType,
} from '../../mods/types.ts';

export interface RecipeCheckData {
  /**
   * The URL of every `/docs/` page, mapped to what the check needs to know about the page.
   */
  pages: Record<
    string,
    {
      sourceFile: string;
      hasSubject: boolean;
      skipRecipeCheck: boolean;
      subjectProblems: string[];
    }
  >;
  /**
   * Every recipe defined in `src/mods/`, along with the pages that must list it.
   */
  recipes: {
    id: string;
    sourceFile: string;
    key: string;
    pages: string[];
    /**
     * The recipe counts as listed on a page that lists any of these recipes (including the recipe
     * itself). Allows listing a single cycling recipe instead of many nearly identical recipes.
     */
    listedIfAnyOf: string[];
    /**
     * Only set for a cycling recipe; the recipe counts as listed on a page that lists all of these
     * recipes. Allows listing each part of the cycle as individual recipes.
     */
    listedIfAllOf?: string[];
    /**
     * Only set for a cycling recipe that lacks variants (separate recipes for each individual item
     * or fluid in the cycle). Names the items and/or fluids missing a variant.
     */
    missingVariants?: string[];
  }[];
}

const docsModules = import.meta.glob<{ subject?: unknown; skipRecipeCheck?: boolean }>(
  '/src/content/docs/**/*.mdx',
  { eager: true },
);

type Subject = Item | ItemGroup | Fluid | FluidGroup | RecipeType;

const pages: RecipeCheckData['pages'] = {};

const pageBySubject = new Map<Subject, string>();

for (const entry of await getCollection('docs')) {
  const page = `/docs/${entry.id}/`;
  const sourceFile = entry.filePath!;

  const { subject, skipRecipeCheck = false } = docsModules[`/${sourceFile}`];

  const subjectProblems: string[] = [];

  pages[page] = {
    sourceFile,
    hasSubject: subject !== undefined,
    skipRecipeCheck,
    subjectProblems,
  };

  if (subject === undefined) {
    continue;
  }

  if (skipRecipeCheck) {
    subjectProblems.push('exports both subject and skipRecipeCheck');
    continue;
  }

  // MDX isn't type-checked, so check the subject's shape manually
  if (!Array.isArray(subject)) {
    subjectProblems.push("subject isn't an array");
    continue;
  }

  for (const [index, item] of subject.entries()) {
    if (typeof item !== 'object' || item === null || !('name' in item) || !('href' in item)) {
      subjectProblems.push(`subject entry ${index + 1} isn't an item, fluid, group or recipe type`);
      continue;
    }

    const subjectItem = item as Subject;
    const href = subjectItem.href?.replace(/#.*/, '');

    if (href !== page) {
      subjectProblems.push(`${subjectItem.name} links to ${href ?? 'nowhere'}, not to this page`);
      continue;
    }

    pageBySubject.set(subjectItem, page);
  }
}

export function GET(): Response {
  const recipes = [...recipeIndex.entries()];

  return Response.json({
    pages,
    recipes: recipes.map(([recipe, { sourceFile, key, id }]) => {
      const parts = recipes.filter(
        ([other]) => other !== recipe && isPartOfCyclingRecipe(other, recipe),
      );

      const missingVariants = getMissingVariants(
        recipe,
        parts.map(([part]) => part),
      );

      return {
        id,
        sourceFile,
        key,
        pages: [...getPagesThatMustList(recipe)],
        listedIfAnyOf: recipes
          .filter(([other]) => isPartOfCyclingRecipe(recipe, other))
          .map(([, { id: otherId }]) => otherId),
        listedIfAllOf: parts.length > 0 ? parts.map(([, { id: partId }]) => partId) : undefined,
        missingVariants: missingVariants.length > 0 ? missingVariants : undefined,
      };
    }),
  } satisfies RecipeCheckData);
}

function getPagesThatMustList(recipe: Recipe): Set<string> {
  const pages = [
    pageBySubject.get(recipe.type),
    ...recipe.inputs.map(getPage),
    ...recipe.outputs.map(getPage),
  ];

  return new Set(pages.filter((page) => page !== undefined));
}

function getPage(slotOrTank: RecipeSlotOrTank): string | undefined {
  if (slotOrTank === null) {
    return undefined;
  }

  if (isTank(slotOrTank)) {
    return pageBySubject.get(slotOrTank.fluid ?? slotOrTank.fluidGroup);
  }

  if (slotOrTank.itemGroup !== undefined) {
    return pageBySubject.get(slotOrTank.itemGroup);
  }

  if (Array.isArray(slotOrTank.item)) {
    const distinctItemPages = new Set(slotOrTank.item.map((item) => pageBySubject.get(item)));

    return distinctItemPages.size === 1 ? [...distinctItemPages][0] : undefined;
  }

  return pageBySubject.get(slotOrTank.item);
}

function getMissingVariants(recipe: Recipe, variants: Recipe[]): string[] {
  const missing = [
    ...recipe.inputs.flatMap((input, index) =>
      getMissingVariantsAt(
        input,
        variants.map((variant) => variant.inputs[index]),
      ),
    ),
    ...recipe.outputs.flatMap((output, index) =>
      getMissingVariantsAt(
        output,
        variants.map((variant) => variant.outputs[index]),
      ),
    ),
  ];

  return [...new Set(missing)];
}

function getMissingVariantsAt(
  slotOrTank: RecipeSlotOrTank,
  variantSlotsOrTanks: RecipeSlotOrTank[],
): string[] {
  const page = getPage(slotOrTank);

  return getCycle(slotOrTank)
    .filter((member) => member !== null)
    .filter((member) => {
      const memberPage = pageBySubject.get(member);

      return memberPage !== undefined && memberPage !== page;
    })
    .filter((member) => !variantSlotsOrTanks.some((variant) => getCycle(variant).includes(member)))
    .map((member) => member.name);
}

function isPartOfCyclingRecipe(recipe: Recipe, cycling: Recipe): boolean {
  return (
    recipe.type === cycling.type &&
    recipe.inputs.length === cycling.inputs.length &&
    recipe.outputs.length === cycling.outputs.length &&
    recipe.inputs.every((input, index) => isPartOfCycle(input, cycling.inputs[index])) &&
    recipe.outputs.every((output, index) => isPartOfCycle(output, cycling.outputs[index]))
  );
}

function isPartOfCycle(slotOrTank: RecipeSlotOrTank, cycling: RecipeSlotOrTank): boolean {
  const cycle = getCycle(cycling);

  return getCycle(slotOrTank).every((member) => cycle.includes(member));
}

function getCycle(slotOrTank: RecipeSlotOrTank): (Item | Fluid | null)[] {
  if (slotOrTank === null) {
    return [null];
  }

  if (isTank(slotOrTank)) {
    if (slotOrTank.fluidGroup !== undefined) {
      return slotOrTank.fluidGroup.fluids;
    }

    return [slotOrTank.fluid];
  }

  if (slotOrTank.itemGroup !== undefined) {
    return slotOrTank.itemGroup.items;
  }

  return [slotOrTank.item].flat();
}
