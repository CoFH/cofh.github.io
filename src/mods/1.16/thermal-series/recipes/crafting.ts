import { crafting } from '../../../common-recipe-types.ts';
import { defineRecipes } from '../../../define.ts';
import mc from '../../minecraft/items.ts';
import ts from '../items.ts';

export default defineRecipes(crafting, {
  thermalpedia: {
    inputs: [{ item: ts.crescentHammer }, { item: mc.book }],
    outputs: [{ item: ts.thermalpedia }],
    shapeless: true,
  },
});
