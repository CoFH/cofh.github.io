import Charger from '../../../../components/docs/1.12/thermal-expansion/recipe/Charger.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import tf from '../../thermal-foundation/items.ts';

export const charger = defineRecipeType('1.12/thermal-expansion', {
  name: 'Energetic Infuser',
  url: 'energetic-infuser/',
  withEnergy: true,
  component: Charger,
});

export default defineRecipes(charger, {
  fluxedAquaChow: {
    inputs: [{ item: tf.richAquaChow }],
    outputs: [{ item: tf.fluxedAquaChow }],
    energy: 8_000,
  },
  fluxedPhytoGro: {
    inputs: [{ item: tf.richPhytoGro }],
    outputs: [{ item: tf.fluxedPhytoGro }],
    energy: 8_000,
  },
});
