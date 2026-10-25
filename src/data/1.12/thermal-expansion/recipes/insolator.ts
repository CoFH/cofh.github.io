import Insolator from '../../../../components/docs/1.12/thermal-expansion/recipe/Insolator.astro';
import { defineRecipeType, defineRecipes } from '../../../define.ts';
import mcFluids from '../../minecraft/fluids.ts';
import mcItemGroups from '../../minecraft/item-groups.ts';
import mc from '../../minecraft/items.ts';
import tf from '../../thermal-foundation/items.ts';

export const insolator = defineRecipeType('1.12/thermal-expansion', {
  name: 'Phytogenic Insolator',
  url: 'phytogenic-insolator/',
  withEnergy: true,
  component: Insolator,
});

export default defineRecipes(insolator, {
  beetroot: {
    inputs: [
      { item: mc.beetrootSeeds },
      { item: tf.phytoGro },
      { fluid: mcFluids.water, amount: 1_200 },
    ],
    outputs: [
      { item: mc.beetroot, amount: 2 },
      { item: mc.beetrootSeeds, chance: 110 },
    ],
    amountSuffix: true,
    energy: 4_800,
  },
  beetrootFluxed: {
    inputs: [
      { item: mc.beetrootSeeds },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [
      { item: mc.beetroot, amount: 6 },
      { item: mc.beetrootSeeds, chance: 150 },
    ],
    amountSuffix: true,
    energy: 9_600,
  },
  beetrootRich: {
    inputs: [
      { item: mc.beetrootSeeds },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [
      { item: mc.beetroot, amount: 4 },
      { item: mc.beetrootSeeds, chance: 125 },
    ],
    amountSuffix: true,
    energy: 7_200,
  },
  cactus: {
    inputs: [{ item: mc.cactus }, { item: tf.phytoGro }, { fluid: mcFluids.water, amount: 1_200 }],
    outputs: [{ item: mc.cactus, amount: 2 }],
    amountSuffix: true,
    energy: 4_800,
  },
  cactusFluxed: {
    inputs: [
      { item: mc.cactus },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [{ item: mc.cactus, amount: 6 }],
    amountSuffix: true,
    energy: 9_600,
  },
  cactusRich: {
    inputs: [
      { item: mc.cactus },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [{ item: mc.cactus, amount: 4 }],
    amountSuffix: true,
    energy: 7_200,
  },
  carrot: {
    inputs: [{ item: mc.carrot }, { item: tf.phytoGro }, { fluid: mcFluids.water, amount: 1_200 }],
    outputs: [{ item: mc.carrot, amount: 3 }],
    amountSuffix: true,
    energy: 4_800,
  },
  carrotFluxed: {
    inputs: [
      { item: mc.carrot },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [{ item: mc.carrot, amount: 9 }],
    amountSuffix: true,
    energy: 9_600,
  },
  carrotRich: {
    inputs: [
      { item: mc.carrot },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [{ item: mc.carrot, amount: 6 }],
    amountSuffix: true,
    energy: 7_200,
  },
  chorusFruit: {
    inputs: [
      { item: mc.chorusFlower },
      { item: tf.phytoGro },
      { fluid: mcFluids.water, amount: 1_200 },
    ],
    outputs: [
      { item: mc.chorusFruit, amount: 2 },
      { item: mc.chorusFlower, chance: 100 },
    ],
    amountSuffix: true,
    energy: 4_800,
  },
  chorusFruitFluxed: {
    inputs: [
      { item: mc.chorusFlower },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [
      { item: mc.chorusFruit, amount: 6 },
      { item: mc.chorusFlower, chance: 150 },
    ],
    amountSuffix: true,
    energy: 9_600,
  },
  chorusFruitRich: {
    inputs: [
      { item: mc.chorusFlower },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [
      { item: mc.chorusFruit, amount: 4 },
      { item: mc.chorusFlower, chance: 125 },
    ],
    amountSuffix: true,
    energy: 7_200,
  },
  cocoaBeans: {
    inputs: [
      { item: mc.cocoaBeans },
      { item: tf.phytoGro },
      { fluid: mcFluids.water, amount: 1_200 },
    ],
    outputs: [{ item: mc.cocoaBeans, amount: 3 }],
    amountSuffix: true,
    energy: 4_800,
  },
  cocoaBeansFluxed: {
    inputs: [
      { item: mc.cocoaBeans },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [{ item: mc.cocoaBeans, amount: 9 }],
    amountSuffix: true,
    energy: 9_600,
  },
  cocoaBeansRich: {
    inputs: [
      { item: mc.cocoaBeans },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [{ item: mc.cocoaBeans, amount: 6 }],
    amountSuffix: true,
    energy: 7_200,
  },
  flower: {
    inputs: [
      { itemGroup: mcItemGroups.flower },
      { item: tf.phytoGro },
      { fluid: mcFluids.water, amount: 1_200 },
    ],
    outputs: [{ itemGroup: mcItemGroups.flower, amount: 3 }],
    amountSuffix: true,
    energy: 4_800,
  },
  flowerFluxed: {
    inputs: [
      { itemGroup: mcItemGroups.flower },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [{ itemGroup: mcItemGroups.flower, amount: 9 }],
    amountSuffix: true,
    energy: 9_600,
  },
  flowerRich: {
    inputs: [
      { itemGroup: mcItemGroups.flower },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [{ itemGroup: mcItemGroups.flower, amount: 6 }],
    amountSuffix: true,
    energy: 7_200,
  },
  lilyPad: {
    inputs: [{ item: mc.lilyPad }, { item: tf.phytoGro }, { fluid: mcFluids.water, amount: 1_200 }],
    outputs: [{ item: mc.lilyPad, amount: 2 }],
    amountSuffix: true,
    energy: 4_800,
  },
  lilyPadFluxed: {
    inputs: [
      { item: mc.lilyPad },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [{ item: mc.lilyPad, amount: 6 }],
    amountSuffix: true,
    energy: 9_600,
  },
  lilyPadRich: {
    inputs: [
      { item: mc.lilyPad },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [{ item: mc.lilyPad, amount: 4 }],
    amountSuffix: true,
    energy: 7_200,
  },
  melon: {
    inputs: [
      { item: mc.melonSeeds },
      { item: tf.phytoGro },
      { fluid: mcFluids.water, amount: 1_200 },
    ],
    outputs: [{ item: mc.melon }, { item: mc.melonSeeds, chance: 100 }],
    amountSuffix: true,
    energy: 4_800,
  },
  melonFluxed: {
    inputs: [
      { item: mc.melonSeeds },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [
      { item: mc.melon, amount: 3 },
      { item: mc.melonSeeds, chance: 150 },
    ],
    amountSuffix: true,
    energy: 9_600,
  },
  melonRich: {
    inputs: [
      { item: mc.melonSeeds },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [
      { item: mc.melon, amount: 2 },
      { item: mc.melonSeeds, chance: 125 },
    ],
    amountSuffix: true,
    energy: 7_200,
  },
  mushroom: {
    inputs: [
      { itemGroup: mcItemGroups.mushroom },
      { item: tf.phytoGro },
      { fluid: mcFluids.water, amount: 1_200 },
    ],
    outputs: [{ itemGroup: mcItemGroups.mushroom, amount: 2 }],
    amountSuffix: true,
    energy: 4_800,
  },
  mushroomFluxed: {
    inputs: [
      { itemGroup: mcItemGroups.mushroom },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [{ itemGroup: mcItemGroups.mushroom, amount: 6 }],
    amountSuffix: true,
    energy: 9_600,
  },
  mushroomRich: {
    inputs: [
      { itemGroup: mcItemGroups.mushroom },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [{ itemGroup: mcItemGroups.mushroom, amount: 4 }],
    amountSuffix: true,
    energy: 7_200,
  },
  netherWart: {
    inputs: [
      { item: mc.netherWart },
      { item: tf.phytoGro },
      { fluid: mcFluids.water, amount: 1_200 },
    ],
    outputs: [{ item: mc.netherWart, amount: 2 }],
    amountSuffix: true,
    energy: 4_800,
  },
  netherWartFluxed: {
    inputs: [
      { item: mc.netherWart },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [{ item: mc.netherWart, amount: 6 }],
    amountSuffix: true,
    energy: 9_600,
  },
  netherWartRich: {
    inputs: [
      { item: mc.netherWart },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [{ item: mc.netherWart, amount: 4 }],
    amountSuffix: true,
    energy: 7_200,
  },
  potato: {
    inputs: [{ item: mc.potato }, { item: tf.phytoGro }, { fluid: mcFluids.water, amount: 1_200 }],
    outputs: [
      { item: mc.potato, amount: 3 },
      { item: mc.poisonousPotato, chance: 5 },
    ],
    amountSuffix: true,
    energy: 4_800,
  },
  potatoFluxed: {
    inputs: [
      { item: mc.potato },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [
      { item: mc.potato, amount: 9 },
      { item: mc.poisonousPotato, chance: 15 },
    ],
    amountSuffix: true,
    energy: 9_600,
  },
  potatoRich: {
    inputs: [
      { item: mc.potato },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [
      { item: mc.potato, amount: 6 },
      { item: mc.poisonousPotato, chance: 10 },
    ],
    amountSuffix: true,
    energy: 7_200,
  },
  pumpkin: {
    inputs: [
      { item: mc.pumpkinSeeds },
      { item: tf.phytoGro },
      { fluid: mcFluids.water, amount: 1_200 },
    ],
    outputs: [{ item: mc.pumpkin }, { item: mc.pumpkinSeeds, chance: 100 }],
    amountSuffix: true,
    energy: 4_800,
  },
  pumpkinFluxed: {
    inputs: [
      { item: mc.pumpkinSeeds },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [
      { item: mc.pumpkin, amount: 3 },
      { item: mc.pumpkinSeeds, chance: 150 },
    ],
    amountSuffix: true,
    energy: 9_600,
  },
  pumpkinRich: {
    inputs: [
      { item: mc.pumpkinSeeds },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [
      { item: mc.pumpkin, amount: 2 },
      { item: mc.pumpkinSeeds, chance: 125 },
    ],
    amountSuffix: true,
    energy: 7_200,
  },
  sugarCanes: {
    inputs: [
      { item: mc.sugarCanes },
      { item: tf.phytoGro },
      { fluid: mcFluids.water, amount: 1_200 },
    ],
    outputs: [{ item: mc.sugarCanes, amount: 2 }],
    amountSuffix: true,
    energy: 4_800,
  },
  sugarCanesFluxed: {
    inputs: [
      { item: mc.sugarCanes },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [{ item: mc.sugarCanes, amount: 6 }],
    amountSuffix: true,
    energy: 9_600,
  },
  sugarCanesRich: {
    inputs: [
      { item: mc.sugarCanes },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [{ item: mc.sugarCanes, amount: 4 }],
    amountSuffix: true,
    energy: 7_200,
  },
  tallFlower: {
    inputs: [
      { itemGroup: mcItemGroups.tallFlower },
      { item: tf.phytoGro },
      { fluid: mcFluids.water, amount: 1_200 },
    ],
    outputs: [{ itemGroup: mcItemGroups.tallFlower, amount: 2 }],
    amountSuffix: true,
    energy: 4_800,
  },
  tallFlowerFluxed: {
    inputs: [
      { itemGroup: mcItemGroups.tallFlower },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [{ itemGroup: mcItemGroups.tallFlower, amount: 6 }],
    amountSuffix: true,
    energy: 9_600,
  },
  tallFlowerRich: {
    inputs: [
      { itemGroup: mcItemGroups.tallFlower },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [{ itemGroup: mcItemGroups.tallFlower, amount: 4 }],
    amountSuffix: true,
    energy: 7_200,
  },
  vines: {
    inputs: [{ item: mc.vines }, { item: tf.phytoGro }, { fluid: mcFluids.water, amount: 1_200 }],
    outputs: [{ item: mc.vines, amount: 2 }],
    amountSuffix: true,
    energy: 4_800,
  },
  vinesFluxed: {
    inputs: [
      { item: mc.vines },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [{ item: mc.vines, amount: 6 }],
    amountSuffix: true,
    energy: 9_600,
  },
  vinesRich: {
    inputs: [
      { item: mc.vines },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [{ item: mc.vines, amount: 4 }],
    amountSuffix: true,
    energy: 7_200,
  },
  wheat: {
    inputs: [{ item: mc.seeds }, { item: tf.phytoGro }, { fluid: mcFluids.water, amount: 1_200 }],
    outputs: [
      { item: mc.wheat, amount: 2 },
      { item: mc.seeds, chance: 110 },
    ],
    amountSuffix: true,
    energy: 4_800,
  },
  wheatFluxed: {
    inputs: [
      { item: mc.seeds },
      { item: tf.fluxedPhytoGro },
      { fluid: mcFluids.water, amount: 2_400 },
    ],
    outputs: [
      { item: mc.wheat, amount: 6 },
      { item: mc.seeds, chance: 150 },
    ],
    amountSuffix: true,
    energy: 9_600,
  },
  wheatRich: {
    inputs: [
      { item: mc.seeds },
      { item: tf.richPhytoGro },
      { fluid: mcFluids.water, amount: 1_800 },
    ],
    outputs: [
      { item: mc.wheat, amount: 4 },
      { item: mc.seeds, chance: 125 },
    ],
    amountSuffix: true,
    energy: 7_200,
  },
});
