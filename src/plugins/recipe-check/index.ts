import type { AstroIntegration } from 'astro';
import { readFile, rm } from 'node:fs/promises';

import type { RecipeCheckData } from './data.ts';

const DATA_ROUTE = '/recipe-check-data.json';

/**
 * A build-time check that ensures recipes defined in `src/mods/` are listed correctly across the
 * docs pages.
 *
 * To make this check possible, docs pages that list recipes must export a `subject` (an array of
 * item (group), fluid (group) or recipe type definitions). If a page needs to opt out, it can
 * export `skipRecipeCheck = true` instead.
 *
 * Any of the following will cause the build to fail:
 * - a page does not list a recipe that involves its subject;
 * - a page lists a recipe that does not involve its subject;
 * - a page lists recipes without specifying a subject;
 * - a cycling recipe lacks a separate recipe for each item or fluid it cycles through.
 *
 * Also warns for recipes that are defined but are not listed on any page yet.
 *
 * The data required for these checks is collected by the route in `data.ts`, during the main build,
 * when recipe data can be imported. The route's output is deleted from the final result.
 */
export function recipeCheck(): AstroIntegration {
  return {
    name: 'recipe-check',
    hooks: {
      'astro:config:setup': ({ command, injectRoute }) => {
        if (command === 'build') {
          injectRoute({ pattern: DATA_ROUTE, entrypoint: new URL('./data.ts', import.meta.url) });
        }
      },
      'astro:build:done': async ({ dir, assets, logger }) => {
        const dataUrl = assets.get(DATA_ROUTE)![0];

        const { pages, recipes } = JSON.parse(await readFile(dataUrl, 'utf8')) as RecipeCheckData;

        await rm(dataUrl);

        const problems: { file: string; heading: string; text: string }[] = [];

        const listedRecipeIdsByPage = new Map<string, Set<string>>();
        const requiredRecipeIdsByPage = new Map<string, Set<string>>();

        for (const [page, { sourceFile, subjectProblems }] of Object.entries(pages)) {
          const html = await readFile(new URL(`.${page}index.html`, dir), 'utf8');
          const ids = html.matchAll(/data-recipe-id="([^"]+)"/g).map((match) => match[1]);

          listedRecipeIdsByPage.set(page, new Set(ids));
          requiredRecipeIdsByPage.set(page, new Set());

          for (const text of subjectProblems) {
            problems.push({ file: sourceFile, heading: 'Invalid subject', text });
          }
        }

        for (const recipe of recipes) {
          for (const page of recipe.pages) {
            for (const id of recipe.listedIfAnyOf) {
              requiredRecipeIdsByPage.get(page)!.add(id);
            }

            for (const id of recipe.listedIfAllOf ?? []) {
              requiredRecipeIdsByPage.get(page)!.add(id);
            }

            if (!isRecipeListedOnPage(recipe, listedRecipeIdsByPage.get(page)!)) {
              problems.push({
                file: pages[page].sourceFile,
                heading: 'Recipes missing',
                text: recipe.id,
              });
            }
          }

          if (recipe.missingVariants !== undefined) {
            problems.push({
              file: recipe.sourceFile,
              heading: 'Cycling recipes without variants',
              text: `${recipe.key}: ${recipe.missingVariants.join(', ')}`,
            });
          }
        }

        const unlistedRecipeIds = recipes
          .filter((recipe) =>
            listedRecipeIdsByPage.values().every((ids) => !isRecipeListedOnPage(recipe, ids)),
          )
          .map((recipe) => recipe.id);

        if (unlistedRecipeIds.length > 0) {
          const lines = unlistedRecipeIds.map((id) => `  ${id}`);
          logger.warn(`Recipes not listed on any page:\n${lines.join('\n')}\n`);
        }

        for (const [page, { sourceFile, hasSubject, skipRecipeCheck }] of Object.entries(pages)) {
          if (skipRecipeCheck) {
            continue;
          }

          const required = requiredRecipeIdsByPage.get(page)!;
          const unexpected = [...listedRecipeIdsByPage.get(page)!].filter(
            (id) => !required.has(id),
          );

          if (unexpected.length === 0) {
            continue;
          }

          const heading = hasSubject
            ? "Recipes outside the page's subject"
            : 'Lists recipes but exports no subject';

          for (const text of unexpected) {
            problems.push({ file: sourceFile, heading, text });
          }
        }

        if (problems.length > 0) {
          problems.sort((a, b) => a.file.localeCompare(b.file));

          const lines = ['Recipe check problems:'];

          for (const [index, { file, heading, text }] of problems.entries()) {
            const previous = problems[index - 1];

            if (file !== previous?.file) {
              lines.push('', file);
            }

            if (file !== previous?.file || heading !== previous.heading) {
              lines.push(`  ${heading}:`);
            }

            lines.push(`    ${text}`);
          }

          logger.error(`\n${lines.join('\n')}\n`);

          throw new Error('Recipe check failed (see above)');
        }
      },
    },
  };
}

function isRecipeListedOnPage(
  recipe: RecipeCheckData['recipes'][number],
  pageRecipeIds: Set<string>,
): boolean {
  return (
    recipe.listedIfAnyOf.some((id) => pageRecipeIds.has(id)) ||
    (recipe.listedIfAllOf?.every((id) => pageRecipeIds.has(id)) ?? false)
  );
}
