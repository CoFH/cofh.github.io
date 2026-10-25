import Sawmill from '../components/recipe/Sawmill.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mcItemGroups from '../../minecraft/item-groups.ts';
import mc from '../../minecraft/items.ts';
import tf from '../../thermal-foundation/items.ts';

export const sawmill = defineRecipeType('1.12/thermal-expansion', {
  name: 'Sawmill',
  url: 'sawmill/',
  withEnergy: true,
  component: Sawmill,
});

export default defineRecipes(sawmill, {
  pulpedBiomass: {
    beetroot: {
      inputs: [{ item: mc.beetroot, amount: 8 }],
      outputs: [{ item: tf.pulpedBiomass }, { item: mc.beetrootSeeds, chance: 50 }],
      energy: 2_000,
    },
    cactus: {
      inputs: [{ item: mc.cactus, amount: 4 }],
      outputs: [{ item: tf.pulpedBiomass }],
      energy: 2_000,
    },
    carrot: {
      inputs: [{ item: mc.carrot, amount: 8 }],
      outputs: [{ item: tf.pulpedBiomass }],
      energy: 2_000,
    },
    lilyPad: {
      inputs: [{ item: mc.lilyPad, amount: 8 }],
      outputs: [{ item: tf.pulpedBiomass }],
      energy: 2_000,
    },
    melon: {
      inputs: [{ item: mc.melon, amount: 4 }],
      outputs: [{ item: tf.pulpedBiomass }, { item: mc.melonSeeds, chance: 50 }],
      energy: 2_000,
    },
    potato: {
      inputs: [{ item: mc.potato, amount: 8 }],
      outputs: [{ item: tf.pulpedBiomass }],
      energy: 2_000,
    },
    pumpkin: {
      inputs: [{ item: mc.pumpkin, amount: 4 }],
      outputs: [{ item: tf.pulpedBiomass }, { item: mc.pumpkinSeeds, chance: 50 }],
      energy: 2_000,
    },
    sapling: {
      inputs: [{ itemGroup: mcItemGroups.sapling, amount: 4 }],
      outputs: [{ item: tf.pulpedBiomass }, { item: tf.sawdust, chance: 50 }],
      energy: 2_000,
    },
    sugarCanes: {
      inputs: [{ item: mc.sugarCanes, amount: 8 }],
      outputs: [{ item: tf.pulpedBiomass }, { item: mc.sugar, amount: 2, chance: 100 }],
      energy: 2_000,
    },
    vines: {
      inputs: [{ item: mc.vines, amount: 8 }],
      outputs: [{ item: tf.pulpedBiomass }],
      energy: 2_000,
    },
    wheat: {
      inputs: [{ item: mc.wheat, amount: 8 }],
      outputs: [{ item: tf.pulpedBiomass }, { item: mc.seeds, chance: 50 }],
      energy: 2_000,
    },
  },
  recycling: {
    boat: {
      inputs: [{ itemGroup: mcItemGroups.boat }],
      outputs: [
        { itemGroup: mcItemGroups.woodPlanks, amount: 4 },
        { item: tf.sawdust, chance: 125 },
      ],
      energy: 2_000,
    },
    door: {
      inputs: [{ itemGroup: mcItemGroups.woodenDoor }],
      outputs: [{ itemGroup: mcItemGroups.woodPlanks }, { item: tf.sawdust, chance: 50 }],
      energy: 2_000,
    },
    fence: {
      inputs: [{ itemGroup: mcItemGroups.fence, amount: 2 }],
      outputs: [{ itemGroup: mcItemGroups.woodPlanks }, { item: tf.sawdust, chance: 25 }],
      energy: 2_000,
    },
    fenceGate: {
      inputs: [{ itemGroup: mcItemGroups.fenceGate }],
      outputs: [{ itemGroup: mcItemGroups.woodPlanks }, { item: tf.sawdust, chance: 125 }],
      energy: 2_000,
    },
    leatherBoots: {
      inputs: [{ item: mc.leatherBoots }],
      outputs: [{ item: mc.leather, amount: 2 }],
      energy: 1_500,
    },
    leatherCap: {
      inputs: [{ item: mc.leatherCap }],
      outputs: [{ item: mc.leather, amount: 2 }],
      energy: 1_500,
    },
    leatherPants: {
      inputs: [{ item: mc.leatherPants }],
      outputs: [{ item: mc.leather, amount: 3 }],
      energy: 1_500,
    },
    leatherTunic: {
      inputs: [{ item: mc.leatherTunic }],
      outputs: [{ item: mc.leather, amount: 4 }],
      energy: 1_500,
    },
    saddle: {
      inputs: [{ item: mc.saddle }],
      outputs: [{ item: mc.leather, amount: 3 }],
      energy: 1_500,
    },
    woodStairs: {
      inputs: [{ itemGroup: mcItemGroups.woodStairs, amount: 2 }],
      outputs: [{ itemGroup: mcItemGroups.woodPlanks }, { item: tf.sawdust, chance: 25 }],
      energy: 2_000,
    },
  },
  woodProcessing: {
    inputs: [{ itemGroup: mcItemGroups.wood }],
    outputs: [
      { itemGroup: mcItemGroups.woodPlanks, amount: 6 },
      { item: tf.sawdust, chance: 100 },
    ],
    energy: 1_000,
  },
});
