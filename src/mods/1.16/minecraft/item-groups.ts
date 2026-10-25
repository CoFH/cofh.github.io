import { defineItemGroups } from '../../define.ts';
import mc from './items.ts';

export default defineItemGroups('1.16/minecraft', {
  flower: {
    name: 'Flower',
    prefix: 'any',
    items: [
      mc.dandelion,
      mc.poppy,
      mc.blueOrchid,
      mc.allium,
      mc.azureBluet,
      mc.redTulip,
      mc.orangeTulip,
      mc.whiteTulip,
      mc.pinkTulip,
      mc.oxeyeDaisy,
      mc.cornflower,
      mc.lilyOfTheValley,
      mc.witherRose,
    ],
  },
  mushroom: { name: 'Mushroom', prefix: 'any', items: [mc.brownMushroom, mc.redMushroom] },
});
