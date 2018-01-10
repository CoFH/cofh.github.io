---
title: Redstone Furnace
nav: thermal-expansion
redirect_from:
  - /thermal-expansion/machines/redstone-furnace/
  - /docs/thermal-expansion/machines/redstone-furnace/
recipes:
  crafting:
    - machine-furnace
augments:
  - machine-power
  - machine-furnace-food
  - machine-furnace-ore
  - machine-furnace-pyrolysis
recipe-list:
  - ingot-from-dust
  - food
  - cactus-green
  - ore-processing-lapis-lazuli
  - ore-processing-redstone
  - leather
---

![Redstone furnace](/assets/images/thermal-expansion/redstone-furnace.png){:style="height: 128px"}

> Coal is for chumps!


A **redstone furnace** is a [machine](/docs/machines/) that
[smelts](https://minecraft.gamepedia.com/Smelting) items.


Obtaining
---------

A placed redstone furnace can be instantly picked up by dismantling it with a
[wrench](/docs/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A redstone furnace is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](/docs/upgrade-kits/) and
[conversion kits](/docs/conversion-kits/).


Usage
-----

### Placement
When placed, a redstone furnace faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](/docs/wrenches/).

### Processing
When items are placed in a redstone furnace's input slot, the machine will start
consuming [Redstone Flux](/docs/redstone-flux/) to process them. Every item
requires a certain amount of energy to process. When enough energy has been
consumed for an item, the input is consumed and the output is placed in the
output slot.

When installed, [pyrolytic conversion](/docs/augment-pyrolytic-conversion/)
makes a redstone furnace produce [creosote oil](/docs/creosote-oil/), which is
placed in an added output tank.

The speed at which a redstone furnace processes items depends on how much energy
it can use per tick. This in turn depends on how much power is being supplied,
and on the machine's maximum power usage. A basic redstone furnace has a maximum
power usage of 20 RF/t. This can be increased by upgrading the machine to a
higher [tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Items and fluids can enter and exit a redstone furnace through its sides. Every
side of a redstone furnace may correspond to its input slot, its output slot
(and possibly its output tank), or both at the same time.

A redstone furnace can automatically transfer items or fluids out of any sides
that directly correspond to its output slot/tank. This is called auto-output. It
can also transfer items from adjacent inventories into any sides that directly
correspond to its input slot. This is called auto-input. Auto-output and
auto-input occur whenever the machine finishes processing an item, or every 32
ticks (1.6 seconds) if the machine is inactive.

A basic redstone furnace can automatically transfer up to 16 items and up to
1,000 mB of fluid at a time. These amounts can be increased by upgrading the
machine to a higher [tier](#tiers).

Which sides correspond to which slots/tanks and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
machine's GUI.

### Redstone control
A redstone furnace may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The redstone furnace works whenever possible.
This is the default mode.

Low
: The redstone furnace works when *not* powered. When powered, it stops working.

High
: The redstone furnace only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

When a redstone furnace must stop working due to a redstone signal and is still
processing an item, it will finish processing that item before stopping.

### Security
A redstone furnace can have a [signalum security
lock](/docs/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A redstone furnace's configuration can be saved on a [redprint](/docs/redprint/)
to be copied to other redstone furnaces.

### Light source
When a redstone furnace is active, it emits a light level of 14.


Tiers
-----

Redstone furnaces come in five [tiers](/docs/tiers/).

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

A redstone furnace can have [augments](/docs/augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the machine's [tier](#tiers). A basic redstone furnace
cannot be augmented.

Augments can be installed in the Augmentation tab in a redstone furnace's GUI.

{% include augment-table.html augments=page.augments %}


Recipes
-------

Most [smelting](https://minecraft.gamepedia.com/Smelting) recipes can be
performed in a redstone furnace for 2,000 RF.

Redstone furnaces have some recipes of their own, some of which override regular
smelting recipes. The following table lists these recipes.

{% include recipe-table.html type='redstone-furnace' recipes=page.recipe-list %}
