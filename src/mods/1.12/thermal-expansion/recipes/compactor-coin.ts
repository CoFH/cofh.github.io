import Compactor from '../components/recipe/Compactor.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mc from '../../minecraft/items.ts';
import tfItemGroups from '../../thermal-foundation/item-groups.ts';
import tf from '../../thermal-foundation/items.ts';

export const compactorCoin = defineRecipeType('1.12/thermal-expansion', {
  name: 'Numismatic Press',
  url: 'augment-numismatic-press/',
  withEnergy: true,
  component: Compactor,
});

export default defineRecipes(compactorCoin, {
  aluminumCoin: {
    inputs: [{ item: tf.aluminumIngot }],
    outputs: [{ item: tf.aluminumCoin, amount: 3 }],
    energy: 4_000,
  },
  bronzeCoin: {
    inputs: [{ item: tf.bronzeIngot }],
    outputs: [{ item: tf.bronzeCoin, amount: 3 }],
    energy: 4_000,
  },
  coin: {
    inputs: [{ itemGroup: tfItemGroups.metalIngot }],
    outputs: [{ itemGroup: tfItemGroups.metalCoin, amount: 3 }],
    energy: 4_000,
  },
  constantanCoin: {
    inputs: [{ item: tf.constantanIngot }],
    outputs: [{ item: tf.constantanCoin, amount: 3 }],
    energy: 4_000,
  },
  copperCoin: {
    inputs: [{ item: tf.copperIngot }],
    outputs: [{ item: tf.copperCoin, amount: 3 }],
    energy: 4_000,
  },
  electrumCoin: {
    inputs: [{ item: tf.electrumIngot }],
    outputs: [{ item: tf.electrumCoin, amount: 3 }],
    energy: 4_000,
  },
  enderiumCoin: {
    inputs: [{ item: tf.enderiumIngot }],
    outputs: [{ item: tf.enderiumCoin, amount: 3 }],
    energy: 4_000,
  },
  goldCoin: {
    inputs: [{ item: mc.goldIngot }],
    outputs: [{ item: tf.goldCoin, amount: 3 }],
    energy: 4_000,
  },
  invarCoin: {
    inputs: [{ item: tf.invarIngot }],
    outputs: [{ item: tf.invarCoin, amount: 3 }],
    energy: 4_000,
  },
  iridiumCoin: {
    inputs: [{ item: tf.iridiumIngot }],
    outputs: [{ item: tf.iridiumCoin, amount: 3 }],
    energy: 4_000,
  },
  ironCoin: {
    inputs: [{ item: mc.ironIngot }],
    outputs: [{ item: tf.ironCoin, amount: 3 }],
    energy: 4_000,
  },
  leadCoin: {
    inputs: [{ item: tf.leadIngot }],
    outputs: [{ item: tf.leadCoin, amount: 3 }],
    energy: 4_000,
  },
  lumiumCoin: {
    inputs: [{ item: tf.lumiumIngot }],
    outputs: [{ item: tf.lumiumCoin, amount: 3 }],
    energy: 4_000,
  },
  manaInfusedCoin: {
    inputs: [{ item: tf.manaInfusedIngot }],
    outputs: [{ item: tf.manaInfusedCoin, amount: 3 }],
    energy: 4_000,
  },
  nickelCoin: {
    inputs: [{ item: tf.nickelIngot }],
    outputs: [{ item: tf.nickelCoin, amount: 3 }],
    energy: 4_000,
  },
  platinumCoin: {
    inputs: [{ item: tf.platinumIngot }],
    outputs: [{ item: tf.platinumCoin, amount: 3 }],
    energy: 4_000,
  },
  signalumCoin: {
    inputs: [{ item: tf.signalumIngot }],
    outputs: [{ item: tf.signalumCoin, amount: 3 }],
    energy: 4_000,
  },
  silverCoin: {
    inputs: [{ item: tf.silverIngot }],
    outputs: [{ item: tf.silverCoin, amount: 3 }],
    energy: 4_000,
  },
  steelCoin: {
    inputs: [{ item: tf.steelIngot }],
    outputs: [{ item: tf.steelCoin, amount: 3 }],
    energy: 4_000,
  },
  tinCoin: {
    inputs: [{ item: tf.tinIngot }],
    outputs: [{ item: tf.tinCoin, amount: 3 }],
    energy: 4_000,
  },
});
