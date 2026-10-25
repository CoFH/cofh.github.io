import { defineRecipes } from '../../../define.ts';
import mc from '../../minecraft/items.ts';
import { transposerFill } from '../../thermal-expansion/recipes/transposer-fill.ts';
import tfFluids from '../../thermal-foundation/fluids.ts';
import tf from '../../thermal-foundation/items.ts';
import ra from '../items.ts';

export default defineRecipes(transposerFill, {
  fluxCrystal: {
    inputs: [{ item: mc.diamond }, { fluid: tfFluids.destabilizedRedstone, amount: 500 }],
    outputs: [{ item: ra.fluxCrystal }],
    energy: 2_000,
  },
  fluxedElectrumBlend: {
    inputs: [{ item: tf.electrumBlend }, { fluid: tfFluids.destabilizedRedstone, amount: 500 }],
    outputs: [{ item: ra.fluxedElectrumBlend }],
    energy: 2_000,
  },
});
