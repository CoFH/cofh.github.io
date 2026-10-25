import mc from '../../../1.16/minecraft/items.ts';
import { crafting } from '../../../common-recipe-types.ts';
import { defineRecipes } from '../../../define.ts';
import core from '../items.ts';

export default defineRecipes(crafting, {
  ectoplasm: {
    inputs: [{ item: mc.ghastTear }, { item: mc.slimeball }],
    outputs: [{ item: core.ectoplasm }],
    shapeless: true,
  },
});
