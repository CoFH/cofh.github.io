import { defineFluidGroups } from '../../define.ts';
import mcFluids from '../minecraft/fluids.ts';
import tfFluids from './fluids.ts';

export default defineFluidGroups('1.12/thermal-foundation', {
  bucketableFluid: {
    name: 'Fluid',
    url: null,
    fluids: [
      mcFluids.water,
      mcFluids.lava,
      tfFluids.destabilizedRedstone,
      tfFluids.energizedGlowstone,
      tfFluids.resonantEnder,
      tfFluids.blazingPyrotheum,
      tfFluids.gelidCryotheum,
      tfFluids.zephyreanAerotheum,
      tfFluids.tectonicPetrotheum,
      tfFluids.liquifactedCoal,
      tfFluids.crudeOil,
      tfFluids.naphtha,
      tfFluids.refinedFuel,
      tfFluids.seedOil,
      tfFluids.biocrude,
      tfFluids.grassoline,
      tfFluids.resin,
      tfFluids.sap,
      tfFluids.treeOil,
      tfFluids.steam,
      tfFluids.creosoteOil,
      tfFluids.mushroomStew,
      tfFluids.essenceOfKnowledge,
      tfFluids.syrup,
      tfFluids.primalMana,
    ],
  },
});
