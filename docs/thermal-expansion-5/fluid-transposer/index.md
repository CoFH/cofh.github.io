---
title: Fluid Transposer
nav: thermal-expansion-5
redirect_from:
- /thermal-expansion/machines/fluid-transposer/
- /docs/thermal-expansion/machines/fluid-transposer/
- /docs/fluid-transposer/
- /docs/thermal-expansion/fluid-transposer/
recipes:
  crafting:
  - te5-machine-transposer
augments:
- machine-power
- machine-secondary
recipe-list:
  fill:
  - moss-stone
  - stone-bricks-mossy
  - concrete
  - sponge-wet
  - ice
  - packed-ice
  - mushroom-stew
  - blaze-powder
  - blizz-powder
  - blitz-powder
  - basalz-powder
  - phyto-gro-rich
  - biomass-rich
  - bioblend-rich
  - redstone-from-fluid
  - glowstone-dust-from-fluid
  - ender-pearl-from-fluid
  - redstone-from-clathrate
  - glowstone-dust-from-clathrate
  - ender-pearl-from-clathrate
  - bottle-o-enchanting
  - td2-fluxduct-reinforced
  - td2-fluxduct-signalum
  - td2-fluxduct-resonant
  - td2-fluxduct-super
  - td2-itemduct-fast
  - td2-itemduct-energy-fast
  - td2-viaduct
  - td2-viaduct-long-range-linking
  - ra2-dust-fluxed-electrum
  - ra2-flux-crystal
  empty:
  - water-from-cactus
  - water-from-sponge
  - seed-oil-from-seeds
  - seed-oil-from-beetroot-seeds
  - seed-oil-from-pumpkin-seeds
  - seed-oil-from-melon-seeds
  - mushroom-stew
---

![Fluid transposer](/assets/images/thermal-expansion-5/fluid-transposer.png){:style="height: 128px"}

> Filling buckets by hand is hard work.


A **fluid transposer**, or **transposer** for short, is a
[machine](/docs/thermal-expansion-5/machines/) that fills and empties items that hold fluids, like
[buckets](https://minecraft.gamepedia.com/Bucket).


Obtaining
---------

A placed fluid transposer can be instantly picked up by dismantling it with a
[wrench](/docs/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A fluid transposer is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](/docs/thermal-foundation-2/upgrade-kits/) and
[conversion kits](/docs/thermal-foundation-2/conversion-kits/).


Usage
-----

### Placement
When placed, a fluid transposer faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](/docs/wrenches/).

### Processing
A fluid transposer can be in two modes: Fill and Empty.

In Fill mode, a fluid transposer fills or infuses items with fluids. When items
are placed in a transposer's input slot in this mode and the input tank is
filled with a fluid, the machine will start consuming [Redstone
Flux](/docs/redstone-flux/) to fill the items with fixed amounts of fluid. Every
item requires a certain amount of energy to fill with a certain amount of fluid.
When enough energy has been consumed for an item, the input fluid is consumed. A
fluid transposer will keep processing the same item until the item is full or
the fluid runs out. Otherwise, the output is placed in the output slot.

In Empty mode, a fluid transposer works similarly, except fluids are extracted
from items and the tank is an output tank.

The speed at which a fluid transposer processes items depends on how much energy
it can use per tick. This in turn depends on how much power is being supplied,
and on the machine's maximum power usage. A basic transposer has a maximum power
usage of 20 RF/t. This can be increased by upgrading the machine to a higher
[tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Items and fluids can enter and exit a fluid transposer through its sides. Every
side of a transposer may correspond to its input slot, its output slot, its
input/output tank, or certain tanks/slots at the same time.

A fluid transposer can automatically transfer items and fluids out of any sides
that directly correspond to its output slot/tank. This is called auto-output. It
can also transfer items from adjacent inventories into any sides that directly
correspond to its input slot. This is called auto-input. Auto-output and
auto-input occur whenever the machine finishes processing an item, or every 32
ticks (1.6 seconds) if the machine is inactive.

A basic fluid transposer can automatically transfer up to 16 items and up to
1,000 mB of fluid at a time. These amounts can be increased by upgrading the
machine to a higher [tier](#tiers).

Which sides correspond to which slots/tanks and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
machine's GUI.

### Redstone control
A fluid transposer may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The transposer works whenever possible. This is
the default mode.

Low
: The transposer works when *not* powered. When powered, it stops working.

High
: The transposer only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

### Security
A fluid transposer can have a [signalum security
lock](/docs/thermal-foundation-2/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A fluid transposer's configuration can be saved on a [redprint](/docs/thermal-foundation-2/redprint/)
to be copied to other transposers.


Tiers
-----

Fluid transposers come in five [tiers](/docs/thermal-foundation-2/tiers/).

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

A fluid transposer can have [augments](/docs/thermal-expansion-5/augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the machine's [tier](#tiers). A basic transposer cannot be
augmented.

Augments can be installed in the Augmentation tab in a transposer's GUI.

{% include te5-augment-table.html augments=page.augments %}


Recipes
-------

### Filling
* Items that can hold fluids such as
  [buckets](https://minecraft.gamepedia.com/Bucket) can be filled with 1,000 mB
  of fluid for 400 RF.
* [Glass bottles](https://minecraft.gamepedia.com/Glass_Bottle) can be filled
  with [fluid potions](/docs/thermal-foundation-2/potion-fluid/) (250 mB each) for 800 RF.
* [Tipped arrows](https://minecraft.gamepedia.com/Tipped_arrows) can be made by
  infusing [arrows](https://minecraft.gamepedia.com/Arrow) with 25 mB of a fluid
  [lingering potion](https://minecraft.gamepedia.com/Lingering_Potion) for 400
  RF.

{% include recipe-table.html type='transposer-te5-fill' recipes=page.recipe-list.fill %}

### Emptying
* 1,000 mB of fluid can be drained from items that hold fluids such as filled
  [buckets](https://minecraft.gamepedia.com/Bucket) for 400 RF.
* 250 mB of a [fluid potion](/docs/thermal-foundation-2/potion-fluid/) can be drained from a
  [potion](https://minecraft.gamepedia.com/Potion) for 800 RF.

{% include recipe-table.html type='transposer-te5-empty' recipes=page.recipe-list.empty %}
