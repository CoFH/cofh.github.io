import { crafting } from '../../../common-recipe-types.ts';
import { defineRecipes } from '../../../define.ts';
import mcItemGroups from '../../minecraft/item-groups.ts';
import mc from '../../minecraft/items.ts';
import vps from '../items.ts';

export default defineRecipes(crafting, {
  diamondSatchel: {
    inputs: [
      null,
      { item: mc.diamond },
      null,
      { item: mc.diamond },
      { item: vps.goldSatchel },
      { item: mc.diamond },
      null,
      { item: mc.diamond },
    ],
    outputs: [{ item: vps.diamondSatchel }],
  },
  emeraldSatchel: {
    inputs: [
      null,
      { item: mc.emerald },
      null,
      { item: mc.emerald },
      { item: vps.diamondSatchel },
      { item: mc.emerald },
      null,
      { item: mc.emerald },
    ],
    outputs: [{ item: vps.emeraldSatchel }],
  },
  goldSatchel: {
    inputs: [
      null,
      { item: mc.goldIngot },
      null,
      { item: mc.goldIngot },
      { item: vps.ironSatchel },
      { item: mc.goldIngot },
      null,
      { item: mc.goldIngot },
    ],
    outputs: [{ item: vps.goldSatchel }],
  },
  ironSatchel: {
    inputs: [
      null,
      { item: mc.ironIngot },
      null,
      { item: mc.ironIngot },
      { item: vps.satchel },
      { item: mc.ironIngot },
      null,
      { item: mc.ironIngot },
    ],
    outputs: [{ item: vps.ironSatchel }],
  },
  satchel: {
    inputs: [
      null,
      { item: mc.leather },
      null,
      { item: mc.leather },
      { itemGroup: mcItemGroups.wool, randomCycle: true },
      { item: mc.leather },
      null,
      { item: mc.leather },
    ],
    outputs: [{ item: vps.satchel }],
  },
  satchelVoid: {
    inputs: [
      null,
      { item: mc.leather },
      null,
      { item: mc.cobblestone },
      { item: mc.lavaBucket },
      { item: mc.cobblestone },
      { item: mc.leather },
      null,
      { item: mc.leather },
    ],
    outputs: [{ item: vps.satchelVoid }],
  },
});
