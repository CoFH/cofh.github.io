---
title: Pulverizer
redirect_from:
- /thermal-expansion/machines/pulverizer/
- /docs/thermal-expansion/machines/pulverizer/
- /docs/pulverizer/
- /docs/thermal-expansion/pulverizer/
- /docs/thermal-expansion-5/pulverizer/
- /docs/1.12/thermal-expansion-5/pulverizer/
recipes:
  crafting:
  - te-1-12-machine-pulverizer
augments:
- machine-power
- machine-secondary
- machine-secondary-null
- machine-pulverizer-petrotheum
recipe-list:
  blocks:
  - cobblestone-from-stone
  - gravel-from-cobblestone
  - gravel-from-netherrack
  - sand-from-gravel
  - recycling-sandstone
  - recycling-sandstone-red
  items:
  - dust-metal-from-ingot
  - dust-fluxed-electrum
  - dust-coal
  - dust-charcoal
  - dust-obsidian
  - bone-meal
  - glowstone-dust-from-glowstone
  - magma-cream-from-block
  - prismarine-crystals-from-shard
  - blaze-powder
  - blizz-powder
  - blitz-powder
  - basalz-powder
  - sawdust-from-wood-log
  - sawdust-from-wood-planks
  ore-processing:
  - ore-processing-iron
  - ore-processing-gold
  - ore-processing-copper
  - ore-processing-tin
  - ore-processing-silver
  - ore-processing-lead
  - ore-processing-aluminum
  - ore-processing-nickel
  - ore-processing-platinum
  - ore-processing-mithril
  - ore-processing-iridium
  - ore-processing-coal
  - ore-processing-lapis-lazuli
  - ore-processing-redstone
  - ore-processing-diamond
  - ore-processing-emerald
  - ore-processing-nether-quartz
  - fluid-ore-processing-oil-sand
  - fluid-ore-processing-oil-shale
  - fluid-ore-processing-redstone
  - fluid-ore-processing-glowstone
  - fluid-ore-processing-ender
  flower-processing:
  - flower-processing-yellow-dandelion
  - flower-processing-red-poppy
  - flower-processing-light-blue-orchid
  - flower-processing-magenta-allium
  - flower-processing-light-gray-azure-bluet
  - flower-processing-red-tulip
  - flower-processing-orange-tulip
  - flower-processing-light-gray-tulip
  - flower-processing-pink-tulip
  - flower-processing-light-gray-oxeye-daisy
  - flower-processing-yellow-sunflower
  - flower-processing-magenta-lilac
  - flower-processing-red-rose-bush
  - flower-processing-pink-peony
  recycling:
  - recycling-wool
  - recycling-concrete
  - recycling-clay-block
  - recycling-terracotta
  - recycling-bricks
  - recycling-bricks-slab
  - recycling-brick-stairs
  - recycling-flower-pot
  - recycling-glass
  - recycling-glass-stained
  - recycling-glass-bottle
  - recycling-nether-brick
  - recycling-nether-brick-slab
  - recycling-nether-brick-stairs
  - recycling-nether-quartz-block
  - recycling-nether-quartz-slab
  - recycling-nether-quartz-stairs
  - recycling-note-block
  - recycling-jukebox
  - recycling-sandstone-slab
  - recycling-sandstone-stairs
  - recycling-sandstone-red-slab
  - recycling-sandstone-red-stairs
  - recycling-tool-pickaxe-wood
  - recycling-tool-shovel-wood
  - recycling-tool-axe-wood
  - recycling-tool-hoe-wood
  - recycling-tool-fishing-rod
  - recycling-tool-shears-wood
  - recycling-tool-hammer-wood
  - recycling-tool-sickle-wood
  - recycling-weapon-sword-wood
  - recycling-weapon-bow
  - recycling-weapon-shield
  - recycling-tool-pickaxe-diamond
  - recycling-tool-shovel-diamond
  - recycling-tool-axe-diamond
  - recycling-tool-hoe-diamond
  - recycling-tool-fishing-rod-diamond
  - recycling-tool-shears-diamond
  - recycling-tool-hammer-diamond
  - recycling-tool-sickle-diamond
  - recycling-weapon-sword-diamond
  - recycling-weapon-bow-diamond
  - recycling-weapon-shield-diamond
  - recycling-armor-helmet-diamond
  - recycling-armor-chestplate-diamond
  - recycling-armor-leggings-diamond
  - recycling-armor-boots-diamond
  - recycling-horse-armor-diamond
---

![Pulverizer](/assets/images/thermal-expansion-5/pulverizer.png){:style="height: 128px"}

> MACHINE SMASH! Puny ore.


A **pulverizer** is a [machine](../machines/) that crushes items. It is
commonly used to process ores and other items more efficiently, and to recycle
certain items.


Obtaining
---------

A placed pulverizer can be instantly picked up by dismantling it with a
[wrench](../../wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A pulverizer is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](../../thermal-foundation/upgrade-kits/) and
[conversion kits](../../thermal-foundation/conversion-kits/).


Usage
-----

### Placement
When placed, a pulverizer faces the player. It can face any of the four cardinal
directions, and can be rotated using a [wrench](../../wrenches/).

### Processing
When items are placed in a pulverizer's input slot, the machine will start
consuming [Redstone Flux](/docs/redstone-flux/) to process them. Every item
requires a certain amount of energy to process. When enough energy has been
consumed for an item, the input is consumed and the output is placed in the
primary output slot. A secondary output may be produced when processing certain
items, which is placed in the secondary output slot.

When installed, a [tectonic initiator](../augment-tectonic-initiator/) allows
a pulverizer to consume [tectonic petrotheum](../../thermal-foundation/tectonic-petrotheum/), which
is stored in an added input tank.

The speed at which a pulverizer processes items depends on how much energy it
can use per tick. This in turn depends on how much power is being supplied, and
on the machine's maximum power usage. A basic pulverizer has a maximum power
usage of 20 RF/t. This can be increased by upgrading the machine to a higher
[tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Items and fluids can enter and exit a pulverizer through its sides. Every side
of a pulverizer may correspond to its input slot, one of its output slots, or
certain slots at the same time. Fluids can enter a pulverizer through any side.

A pulverizer can automatically transfer items out of any sides that directly
correspond to one of its output slots. This is called auto-output. It can also
transfer items from adjacent inventories into any sides that directly correspond
to its input slot. This is called auto-input. Auto-output and auto-input occur
whenever the machine finishes processing an item, or every 32 ticks (1.6
seconds) if the machine is inactive.

A basic pulverizer can automatically transfer up to 16 items at a time. This
amount can be increased by upgrading the machine to a higher [tier](#tiers).

Which sides correspond to which slots/tanks and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
machine's GUI.

### Redstone control
A pulverizer may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The pulverizer works whenever possible. This is
the default mode.

Low
: The pulverizer works when *not* powered. When powered, it stops working.

High
: The pulverizer only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

### Security
A pulverizer can have a [signalum security lock](../../thermal-foundation/signalum-security-lock/)
installed to restrict who can access it.

### Redprints
A pulverizer's configuration can be saved on a [redprint](../../thermal-foundation/redprint/) to be
copied to other pulverizers.

### Light source
When a pulverizer is active, it emits a light level of 4.


Tiers
-----

Pulverizers come in five [tiers](../../thermal-foundation/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. power usage | Augment slots | Max. items per auto-transfer |
|---
| Basic | 20 RF/t | 0 | 16 |
| Hardened | 30 RF/t | 1 | 16 |
| Reinforced | 40 RF/t | 2 | 28 |
| Signalum | 50 RF/t | 3 | 44 |
| Resonant | 60 RF/t | 4 | 64 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}


Augmentation
------------

A pulverizer can have [augments](../augments/) installed to improve certain
properties or to change how it works. The amount of augments that can be
installed depends on the machine's [tier](#tiers). A basic pulverizer cannot be
augmented.

Augments can be installed in the Augmentation tab in a pulverizer's GUI.

{% include te-1-12-augment-table.html augments=page.augments %}


Recipes
-------

### Blocks
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.recipe-list.blocks %}

### Items
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.recipe-list.items %}

### Ore processing
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.recipe-list.ore-processing %}

### Flower processing
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.recipe-list.flower-processing %}

### Recycling
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.recipe-list.recycling %}
