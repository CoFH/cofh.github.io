---
title: Sawmill
nav: thermal-expansion
redirect_from:
  - /thermal-expansion/machines/sawmill/
  - /docs/thermal-expansion/machines/sawmill/
recipes:
  crafting:
    - machine-sawmill
augments:
  - machine-power
  - machine-secondary
  - machine-secondary-null
  - machine-sawmill-tapper
recipe-list:
  wood-processing:
    - wood-processing
  recycling:
    - recycling-wood-stairs
    - recycling-fence
    - recycling-fence-gate
    - recycling-boat
    - recycling-door
    - recycling-melon
    - recycling-helmet-leather
    - recycling-chestplate-leather
    - recycling-leggings-leather
    - recycling-boots-leather
---

![Sawmill](/assets/images/thermal-expansion/sawmill.png){:style="height: 128px"}

> Better watch your hands...


A **sawmill** is a [machine](/docs/machines/) that processes
[wood](https://minecraft.gamepedia.com/Wood) into [wood
planks](https://minecraft.gamepedia.com/Wood_Planks) more efficiently than by
hand. It can also be used to recycle various wooden things.


Obtaining
---------

A placed sawmill can be instantly picked up by dismantling it with a
[wrench](/docs/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A sawmill is initially at the lowest [tier](#tiers) (basic). It can be upgraded
to higher tiers using [upgrade kits](/docs/upgrade-kits/) and [conversion
kits](/docs/conversion-kits/).


Usage
-----

### Placement
When placed, a sawmill faces the player. It can face any of the four cardinal
directions, and can be rotated using a [wrench](/docs/wrenches/).

### Processing
When items are placed in a sawmill's input slot, the machine will start
consuming [Redstone Flux](/docs/redstone-flux/) to process them. Every item
requires a certain amount of energy to process. When enough energy has been
consumed for an item, the input is consumed and the output is placed in the
primary output slot. A secondary output may be produced when processing certain
items, which is placed in the secondary output slot.

When installed, a [resin funnel](/docs/augment-resin-funnel/) makes a sawmill
produce fluid byproducts, which are placed in an added output tank.

The speed at which a sawmill processes items depends on how much energy it can
use per tick. This in turn depends on how much power is being supplied, and on
the machine's maximum power usage. A basic sawmill has a maximum power usage of
20 RF/t. This can be increased by upgrading the machine to a higher
[tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Items and fluids can enter and exit a sawmill through its sides. Every side of a
sawmill may correspond to its input slot, one of its output slots (and possibly
its output tank), or certain slots/tanks at the same time.

A sawmill can automatically transfer items or fluids out of any sides that
directly correspond to its output slot/tank. This is called auto-output. It can
also transfer items from adjacent inventories into any sides that directly
correspond to its input slot. This is called auto-input. Auto-output and
auto-input occur whenever the machine finishes processing an item, or every 32
ticks (1.6 seconds) if the machine is inactive. For fluids, auto-output also
occurs every 4 ticks (0.2 seconds).

A basic sawmill can automatically transfer up to 16 items and up to 1,000 mB of
fluid at a time. These amounts can be increased by upgrading the machine to a
higher [tier](#tiers).

Which sides correspond to which slots/tanks and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
machine's GUI.

### Redstone control
A sawmill may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The sawmill works whenever possible. This is the
default mode.

Low
: The sawmill works when *not* powered. When powered, it stops working.

High
: The sawmill only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

When a sawmill must stop working due to a redstone signal and is still
processing an item, it will finish processing that item before stopping.

### Security
A sawmill can have a [signalum security lock](/docs/signalum-security-lock/)
installed to restrict who can access it.

### Redprints
A sawmill's configuration can be saved on a [redprint](/docs/redprint/) to be
copied to other sawmills.


Tiers
-----

Sawmills come in five [tiers](/docs/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. power usage | Augment slots | Max. items per auto-transfer | Max. fluid per auto-transfer |
|---
| Basic | 20 RF/t | 0 | 16 | 1,000 mB |
| Hardened | 30 RF/t | 1 | 16 | 1,000 mB |
| Reinforced | 40 RF/t | 2 | 28 | 3,000 mB |
| Signalum | 50 RF/t | 3 | 44 | 6,000 mB |
| Resonant | 60 RF/t | 4 | 64 | 10,000 mB |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}


Augmentation
------------

A sawmill can have [augments](/docs/augments/) installed to improve certain
properties or to change how it works. The amount of augments that can be
installed depends on the machine's [tier](#tiers). A basic sawmill cannot be
augmented.

Augments can be installed in the Augmentation tab in a sawmill's GUI.

{% include augment-table.html augments=page.augments %}


Recipes
-------

### Wood processing
{% include recipe-table.html type='sawmill' recipes=page.recipe-list.wood-processing %}

### Recycling
{% include recipe-table.html type='sawmill' recipes=page.recipe-list.recycling %}
