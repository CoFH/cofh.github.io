---
augments:
- te-1-12-augment-machine-power
- te-1-12-augment-machine-crucible-lava
category: Machines
recipe-list:
- lava-from-cobblestone
- lava-from-stone
- lava-from-granite
- lava-from-granite-polished
- lava-from-diorite
- lava-from-diorite-polished
- lava-from-andesite
- lava-from-andesite-polished
- lava-from-obsidian
- lava-from-netherrack
- lava-from-magma-block
- water-from-snowball
- water-from-snow
- water-from-ice
- redstone
- redstone-from-block
- redstone-from-clathrate
- fluid-ore-processing-redstone
- glowstone
- glowstone-from-block
- glowstone-from-clathrate
- fluid-ore-processing-glowstone
- ender
- ender-from-clathrate
- fluid-ore-processing-ender
- pyrotheum
- cryotheum
- aerotheum
- petrotheum
- coal
- crude-oil-from-bitumen
- fluid-ore-processing-oil-sand
- fluid-ore-processing-oil-shale
- biocrude-from-biomass
- biocrude-from-biomass-rich
- biocrude-from-bioblend
- biocrude-from-bioblend-rich
recipes:
  crafting-shaped:
  - te-1-12-machine-crucible
show_image: false
subjects:
- te-1-12-machine-crucible
title: Magma Crucible
---

![Magma crucible](/assets/images/docs/1.12/thermal-expansion/magma-crucible.png){:style="height: 128px"}

> Yes, it can make lava. You monster.


A **magma crucible**, or **crucible** for short, is a [machine](../machines/)
that melts items into fluids.


Obtaining
---------

A placed magma crucible can be instantly picked up by dismantling it with a
[wrench](../../wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}

### Upgrading
A magma crucible is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](../../thermal-foundation/upgrade-kits/) and
[conversion kits](../../thermal-foundation/conversion-kits/).


Usage
-----

### Placement
When placed, a magma crucible faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](../../wrenches/).

### Processing
When items are placed in a magma crucible's input slot, the machine will start
consuming [Redstone Flux](/docs/redstone-flux/) to process them. Every item
requires a certain amount of energy to process. When enough energy has been
consumed for an item, the input is consumed and the output is placed in the
output tank.

The speed at which a magma crucible processes items depends on how much energy
it can use per tick. This in turn depends on how much power is being supplied,
and on the machine's maximum power usage. A basic crucible has a maximum power
usage of 40 RF/t. This can be increased by upgrading the machine to a higher
[tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Items and fluids can enter and exit a magma crucible through its sides. Every
side of a crucible may correspond to its input slot, its output tank, or both at
the same time.

A magma crucible can automatically transfer fluids out of any sides that
directly correspond to its output tank. This is called auto-output. It can also
transfer items from adjacent inventories into any sides that directly correspond
to its input slot. This is called auto-input. Auto-output and auto-input occur
whenever the machine finishes processing an item. Auto-output also occurs every
4 ticks (0.2 seconds). Auto-input also occurs every 32 ticks (1.6 seconds) if
the machine is inactive.

A basic magma crucible can automatically transfer up to 16 items and up to 1,000
mB of fluid at a time. These amounts can be increased by upgrading the machine
to a higher [tier](#tiers).

Which sides correspond to which slots/tanks and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
machine's GUI.

### Redstone control
A magma crucible may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The crucible works whenever possible. This is
the default mode.

Low
: The crucible works when *not* powered. When powered, it stops working.

High
: The crucible only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

### Security
A magma crucible can have a [signalum security
lock](../../thermal-foundation/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A magma crucible's configuration can be saved on a [redprint](../../thermal-foundation/redprint/)
to be copied to other crucibles.

### Light source
When a magma crucible is active, it emits a light level of 14.


Tiers
-----

Magma crucibles come in five [tiers](../../thermal-foundation/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. power usage | Augment slots | Max. items per auto-transfer | Max. fluid per auto-transfer |
|---
| Basic | 40 RF/t | 0 | 16 | 1,000 mB |
| Hardened | 60 RF/t | 1 | 16 | 1,000 mB |
| Reinforced | 80 RF/t | 2 | 28 | 3,000 mB |
| Signalum | 100 RF/t | 3 | 44 | 6,000 mB |
| Resonant | 120 RF/t | 4 | 64 | 10,000 mB |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}


Augmentation
------------

A magma crucible can have [augments](../augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the machine's [tier](#tiers). A basic crucible cannot be
augmented.

Augments can be installed in the Augmentation tab in a crucible's GUI.

{{<link_list ids_param="augments">}}


Recipes
-------

{{<recipe_table type="crucible' recipe-ids=page.recipe-list">}}
