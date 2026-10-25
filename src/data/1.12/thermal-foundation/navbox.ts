import type { DocNav } from '../../types.ts';
import tfFluids from './fluids.ts';
import tf from './items.ts';

export default {
  title: 'Thermal Foundation (Minecraft 1.12)',
  sections: [
    {
      title: 'World',
      groups: [
        {
          title: 'Ores',
          items: [
            { title: 'Copper', item: tf.copperOre },
            { title: 'Tin', item: tf.tinOre },
            { title: 'Silver', item: tf.silverOre },
            { title: 'Lead', item: tf.leadOre },
            { title: 'Aluminum', item: tf.aluminumOre },
            { title: 'Nickel', item: tf.nickelOre },
            { title: 'Platinum', item: tf.platinumOre },
            { title: 'Iridium', item: tf.iridiumOre },
            { title: 'Mana Infused', item: tf.manaInfusedOre },
          ],
        },
        {
          title: 'Fluid Ores',
          items: [
            { item: tf.oilSand },
            { item: tf.oilShale },
            { item: tf.destabilizedRedstoneOre },
            { item: tf.energizedNetherrack },
            { item: tf.resonantEndStone },
          ],
        },
        {
          title: 'Mobs',
          items: [
            { title: 'Blizz', url: 'blizz/' },
            { title: 'Blitz', url: 'blitz/' },
            { title: 'Basalz', url: 'basalz/' },
          ],
        },
      ],
    },
    {
      title: 'Items',
      groups: [
        {
          title: 'Materials',
          groups: [
            {
              title: 'Ingots',
              items: [
                { title: 'Copper', item: tf.copperIngot },
                { title: 'Tin', item: tf.tinIngot },
                { title: 'Silver', item: tf.silverIngot },
                { title: 'Lead', item: tf.leadIngot },
                { title: 'Aluminum', item: tf.aluminumIngot },
                { title: 'Nickel', item: tf.nickelIngot },
                { title: 'Platinum', item: tf.platinumIngot },
                { title: 'Iridium', item: tf.iridiumIngot },
                { title: 'Mana Infused', item: tf.manaInfusedIngot },
                { title: 'Steel', item: tf.steelIngot },
                { title: 'Electrum', item: tf.electrumIngot },
                { title: 'Invar', item: tf.invarIngot },
                { title: 'Bronze', item: tf.bronzeIngot },
                { title: 'Constantan', item: tf.constantanIngot },
                { title: 'Signalum', item: tf.signalumIngot },
                { title: 'Lumium', item: tf.lumiumIngot },
                { title: 'Enderium', item: tf.enderiumIngot },
              ],
            },
            {
              title: 'Dusts',
              items: [
                { title: 'Iron', item: tf.pulverizedIron },
                { title: 'Gold', item: tf.pulverizedGold },
                { title: 'Copper', item: tf.pulverizedCopper },
                { title: 'Tin', item: tf.pulverizedTin },
                { title: 'Silver', item: tf.pulverizedSilver },
                { title: 'Lead', item: tf.pulverizedLead },
                { title: 'Aluminum', item: tf.pulverizedAluminum },
                { title: 'Nickel', item: tf.pulverizedNickel },
                { title: 'Platinum', item: tf.pulverizedPlatinum },
                { title: 'Iridium', item: tf.pulverizedIridium },
                { title: 'Mana Infused Metal', item: tf.pulverizedManaInfusedMetal },
                { title: 'Steel', item: tf.steelBlend },
                { title: 'Electrum', item: tf.electrumBlend },
                { title: 'Invar', item: tf.invarBlend },
                { title: 'Bronze', item: tf.bronzeBlend },
                { title: 'Constantan', item: tf.constantanBlend },
                { title: 'Signalum', item: tf.signalumBlend },
                { title: 'Lumium', item: tf.lumiumBlend },
                { title: 'Enderium', item: tf.enderiumBlend },
                { title: 'Coal', item: tf.pulverizedCoal },
                { title: 'Charcoal', item: tf.pulverizedCharcoal },
                { title: 'Obsidian', item: tf.pulverizedObsidian },
              ],
            },
            {
              title: 'Nuggets',
              items: [
                { title: 'Copper', item: tf.copperNugget },
                { title: 'Tin', item: tf.tinNugget },
                { title: 'Silver', item: tf.silverNugget },
                { title: 'Lead', item: tf.leadNugget },
                { title: 'Aluminum', item: tf.aluminumNugget },
                { title: 'Nickel', item: tf.nickelNugget },
                { title: 'Platinum', item: tf.platinumNugget },
                { title: 'Iridium', item: tf.iridiumNugget },
                { title: 'Mana Infused', item: tf.manaInfusedNugget },
                { title: 'Steel', item: tf.steelNugget },
                { title: 'Electrum', item: tf.electrumNugget },
                { title: 'Invar', item: tf.invarNugget },
                { title: 'Bronze', item: tf.bronzeNugget },
                { title: 'Constantan', item: tf.constantanNugget },
                { title: 'Signalum', item: tf.signalumNugget },
                { title: 'Lumium', item: tf.lumiumNugget },
                { title: 'Enderium', item: tf.enderiumNugget },
                { title: 'Diamond', item: tf.diamondNugget },
                { title: 'Emerald', item: tf.emeraldNugget },
              ],
            },
            {
              title: 'Gears',
              items: [
                { title: 'Iron', item: tf.ironGear },
                { title: 'Gold', item: tf.goldGear },
                { title: 'Copper', item: tf.copperGear },
                { title: 'Tin', item: tf.tinGear },
                { title: 'Silver', item: tf.silverGear },
                { title: 'Lead', item: tf.leadGear },
                { title: 'Aluminum', item: tf.aluminumGear },
                { title: 'Nickel', item: tf.nickelGear },
                { title: 'Platinum', item: tf.platinumGear },
                { title: 'Iridium', item: tf.iridiumGear },
                { title: 'Mana Infused', item: tf.manaInfusedGear },
                { title: 'Steel', item: tf.steelGear },
                { title: 'Electrum', item: tf.electrumGear },
                { title: 'Invar', item: tf.invarGear },
                { title: 'Bronze', item: tf.bronzeGear },
                { title: 'Constantan', item: tf.constantanGear },
                { title: 'Signalum', item: tf.signalumGear },
                { title: 'Lumium', item: tf.lumiumGear },
                { title: 'Enderium', item: tf.enderiumGear },
                { title: 'Wood', item: tf.woodenGear },
                { title: 'Stone', item: tf.stoneGear },
                { title: 'Diamond', item: tf.diamondGear },
                { title: 'Emerald', item: tf.emeraldGear },
              ],
            },
            {
              title: 'Plates',
              items: [
                { title: 'Iron', item: tf.ironPlate },
                { title: 'Gold', item: tf.goldPlate },
                { title: 'Copper', item: tf.copperPlate },
                { title: 'Tin', item: tf.tinPlate },
                { title: 'Silver', item: tf.silverPlate },
                { title: 'Lead', item: tf.leadPlate },
                { title: 'Aluminum', item: tf.aluminumPlate },
                { title: 'Nickel', item: tf.nickelPlate },
                { title: 'Platinum', item: tf.platinumPlate },
                { title: 'Iridium', item: tf.iridiumPlate },
                { title: 'Mana Infused', item: tf.manaInfusedPlate },
                { title: 'Steel', item: tf.steelPlate },
                { title: 'Electrum', item: tf.electrumPlate },
                { title: 'Invar', item: tf.invarPlate },
                { title: 'Bronze', item: tf.bronzePlate },
                { title: 'Constantan', item: tf.constantanPlate },
                { title: 'Signalum', item: tf.signalumPlate },
                { title: 'Lumium', item: tf.lumiumPlate },
                { title: 'Enderium', item: tf.enderiumPlate },
              ],
            },
            {
              title: 'Coins',
              items: [
                { title: 'Iron', item: tf.ironCoin },
                { title: 'Gold', item: tf.goldCoin },
                { title: 'Copper', item: tf.copperCoin },
                { title: 'Tin', item: tf.tinCoin },
                { title: 'Silver', item: tf.silverCoin },
                { title: 'Lead', item: tf.leadCoin },
                { title: 'Aluminum', item: tf.aluminumCoin },
                { title: 'Nickel', item: tf.nickelCoin },
                { title: 'Platinum', item: tf.platinumCoin },
                { title: 'Iridium', item: tf.iridiumCoin },
                { title: 'Mana Infused', item: tf.manaInfusedCoin },
                { title: 'Steel', item: tf.steelCoin },
                { title: 'Electrum', item: tf.electrumCoin },
                { title: 'Invar', item: tf.invarCoin },
                { title: 'Bronze', item: tf.bronzeCoin },
                { title: 'Constantan', item: tf.constantanCoin },
                { title: 'Signalum', item: tf.signalumCoin },
                { title: 'Lumium', item: tf.lumiumCoin },
                { title: 'Enderium', item: tf.enderiumCoin },
              ],
            },
            {
              title: 'Elemental',
              items: [
                { item: tf.blizzRod },
                { item: tf.blizzPowder },
                { item: tf.blitzRod },
                { item: tf.blitzPowder },
                { item: tf.basalzRod },
                { item: tf.basalzPowder },
                { item: tf.pyrotheumDust },
                { item: tf.cryotheumDust },
                { item: tf.aerotheumDust },
                { item: tf.petrotheumDust },
              ],
            },
            {
              title: 'Parts',
              items: [
                { item: tf.redstoneServo },
                { item: tf.redstoneReceptionCoil },
                { item: tf.redstoneTransmissionCoil },
                { item: tf.redstoneConductanceCoil },
                { item: tf.toolCasing },
                { item: tf.drillHead },
                { item: tf.sawBlade },
              ],
            },
            {
              title: 'Other',
              items: [
                {
                  item: tf.sulfur,
                },
                {
                  item: tf.niter,
                },
                {
                  item: tf.sawdust,
                  subitems: [{ title: 'Compressed', item: tf.compressedSawdust }],
                },
                {
                  item: tf.coalCoke,
                },
                {
                  item: tf.pulpedBiomass,
                  subitems: [{ title: 'Rich', item: tf.richBiomass }],
                },
                {
                  item: tf.pulpedBioblend,
                  subitems: [{ title: 'Rich', item: tf.richBioblend }],
                },
                {
                  item: tf.rosin,
                },
                {
                  item: tf.tar,
                },
                {
                  item: tf.slag,
                  subitems: [{ title: 'Rich', item: tf.richSlag }],
                },
                {
                  item: tf.cinnabar,
                },
                {
                  item: tf.bitumen,
                },
                {
                  title: 'Clathrate',
                  subitems: [
                    { title: 'Destabilized', item: tf.destabilizedClathrate },
                    { title: 'Energized', item: tf.energizedClathrate },
                    { title: 'Resonant', item: tf.resonantClathrate },
                  ],
                },
                {
                  title: 'Pigments',
                  item: tf.bluePigment,
                },
                {
                  item: tf.manaDust,
                },
                {
                  item: tf.geode,
                },
              ],
            },
          ],
        },
        {
          title: 'Utilities',
          items: [
            {
              item: tf.crescentHammer,
            },
            {
              item: tf.multimeter,
            },
            {
              title: 'Upgrade Kits',
              item: tf.upgradeKit1,
            },
            {
              title: 'Conversion Kits',
              item: tf.conversionKit2,
            },
            {
              item: tf.signalumSecurityLock,
            },
            {
              item: tf.redprint,
            },
            {
              item: tf.forgeLexicon,
            },
            {
              item: tf.tomeOfKnowledge,
            },
            {
              item: tf.phytoGro,
              subitems: [
                { title: 'Rich', item: tf.richPhytoGro },
                { title: 'Fluxed', item: tf.fluxedPhytoGro },
              ],
            },
            {
              item: tf.aquaChow,
              subitems: [
                { title: 'Rich', item: tf.richAquaChow },
                { title: 'Fluxed', item: tf.fluxedAquaChow },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Blocks',
      groups: [
        {
          title: 'Storage',
          items: [
            { title: 'Copper', item: tf.blockOfCopper },
            { title: 'Tin', item: tf.blockOfTin },
            { title: 'Silver', item: tf.blockOfSilver },
            { title: 'Lead', item: tf.blockOfLead },
            { title: 'Aluminum', item: tf.blockOfAluminum },
            { title: 'Nickel', item: tf.blockOfNickel },
            { title: 'Platinum', item: tf.blockOfPlatinum },
            { title: 'Iridium', item: tf.blockOfIridium },
            { title: 'Mana Infused Metal', item: tf.blockOfManaInfusedMetal },
            { title: 'Steel', item: tf.blockOfSteel },
            { title: 'Electrum', item: tf.blockOfElectrum },
            { title: 'Invar', item: tf.blockOfInvar },
            { title: 'Bronze', item: tf.blockOfBronze },
            { title: 'Constantan', item: tf.blockOfConstantan },
            { title: 'Signalum', item: tf.blockOfSignalum },
            { title: 'Lumium', item: tf.blockOfLumium },
            { title: 'Enderium', item: tf.blockOfEnderium },
            { title: 'Charcoal', item: tf.blockOfCharcoal },
            { title: 'Coal Coke', item: tf.blockOfCoalCoke },
          ],
        },
        {
          title: 'Other',
          items: [{ item: tf.hardenedGlass }, { title: 'Rockwool', item: tf.lightGrayRockwool }],
        },
      ],
    },
    {
      title: 'Fluids',
      groups: [
        {
          title: 'Molten',
          items: [
            { item: tfFluids.destabilizedRedstone },
            { item: tfFluids.energizedGlowstone },
            { item: tfFluids.resonantEnder },
          ],
        },
        {
          title: 'Elemental',
          items: [
            { item: tfFluids.blazingPyrotheum },
            { item: tfFluids.gelidCryotheum },
            { item: tfFluids.zephyreanAerotheum },
            { item: tfFluids.tectonicPetrotheum },
          ],
        },
        {
          title: 'Fossil',
          items: [
            { item: tfFluids.liquifactedCoal },
            { item: tfFluids.crudeOil },
            { item: tfFluids.naphtha },
            { item: tfFluids.refinedFuel },
          ],
        },
        {
          title: 'Bio',
          items: [
            { item: tfFluids.seedOil },
            { item: tfFluids.biocrude },
            { item: tfFluids.grassoline },
          ],
        },
        {
          title: 'Tree',
          items: [{ item: tfFluids.resin }, { item: tfFluids.sap }, { item: tfFluids.treeOil }],
        },
        {
          title: 'Other',
          items: [
            { item: tfFluids.steam },
            { item: tfFluids.creosoteOil },
            { item: tfFluids.mushroomStew },
            { item: tfFluids.essenceOfKnowledge },
            { item: tfFluids.potion },
            { item: tfFluids.syrup },
            { item: tfFluids.primalMana },
          ],
        },
      ],
    },
    {
      title: 'Equipment',
      groups: [
        {
          title: 'Tools',
          items: [
            { title: 'Pickaxes', item: tf.copperPickaxe },
            { title: 'Shovels', item: tf.copperShovel },
            { title: 'Axes', item: tf.copperAxe },
            { title: 'Hoes', item: tf.copperHoe },
            { title: 'Fishing Rods', item: tf.copperFishingRod },
            { title: 'Shears', item: tf.copperShears },
            { title: 'Hammers', item: tf.copperHammer },
            { title: 'Excavators', item: tf.copperExcavator },
            { title: 'Sickles', item: tf.copperSickle },
          ],
        },
        {
          title: 'Weapons',
          items: [
            { title: 'Swords', item: tf.copperSword },
            { title: 'Reinforced Bows', item: tf.copperReinforcedBow },
            { title: 'Shields', item: tf.copperShield },
          ],
        },
        {
          title: 'Armor',
          items: [
            { title: 'Helmets', item: tf.copperHelmet },
            { title: 'Chestplates', item: tf.copperChestplate },
            { title: 'Leggings', item: tf.copperLeggings },
            { title: 'Boots', item: tf.copperBoots },
            { title: 'Horse Armor', item: tf.copperHorseArmor },
          ],
        },
      ],
    },
    {
      title: 'Other',
      groups: [
        {
          items: [
            { title: 'Tiers', url: 'tiers/' },
            { title: 'Potion recipes', url: 'potion-recipes/' },
            { title: 'Vanilla recipes', url: 'vanilla-recipes/' },
          ],
        },
      ],
    },
  ],
} satisfies DocNav;
