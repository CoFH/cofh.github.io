import { defineRecipes } from '../../../define.ts';
import mc from '../../minecraft/items.ts';
import { smelter } from '../../thermal-expansion/recipes/smelter.ts';
import ra from '../items.ts';

export default defineRecipes(smelter, {
  dustSmeltingFluxedElectrum: {
    inputs: [{ item: ra.fluxedElectrumBlend }, { item: mc.sand }],
    outputs: [{ item: ra.fluxedElectrumIngot }],
    energy: 4_000,
  },
});
