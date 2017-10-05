---
title: Magma Crucible
nav: thermal-expansion
redirect_from:
  - /thermal-expansion/machines/magma-crucible/
  - /docs/thermal-expansion/machines/magma-crucible/
recipes:
  crafting:
    - machine-crucible
augments:
  - machine-power
  - machine-crucible-lava
recipe-list:
  - lava-from-cobblestone
  - lava-from-stone
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
  - creosote-oil-from-tar
---

![Magma crucible](/assets/images/thermal-expansion/magma-crucible.png){:style="height: 128px"}

> Yes, it can make lava. You monster.


A **magma crucible**, or **crucible** for short, is a [machine](/docs/machines/)
that melts items into fluids.


Obtaining
---------

A placed magma crucible can be instantly picked up by dismantling it with a
[crescent hammer](/docs/crescent-hammer/). Its configuration is preserved in the
item. It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe), though this is quite slow.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A magma crucible is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](/docs/upgrade-kits/) and
[conversion kits](/docs/conversion-kits/).


Usage
-----

### Processing
When items are placed in a magma crucible's input slot, the machine will start
consuming [Redstone Flux](/docs/redstone-flux/) to process them. Every item
requires a certain amount of energy to process. When enough energy has been
consumed for an item, the input is consumed and the output is placed in the
output tank.

The speed at which a magma crucible processes items depends on how much energy
it can use per tick. This in turn depends on how much power is being supplied,
and on the machine's maximum power usage. A basic crucible has a maximum power
usage of 50 RF/t. This can be increased by upgrading the machine to a higher
[tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Items and fluids can enter and exit a magma crucible through its sides. Every
side of a crucible may correspond to its input slot, its output tank, or both at
the same time.

A magma crucible can automatically transfer fluids out of any sides that
directly correspond to its output tank. This is called auto-output, and occurs
whenever there is a fluid in the output tank. It can also transfer items from
adjacent inventories into any sides that directly correspond to its input slot.
This is called auto-input, and occurs whenever the machine finishes processing
an item, or every 32 ticks (1.6 seconds) if the machine is inactive.

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

When a magma crucible must stop working due to a redstone signal and is still
processing an item, it will finish processing that item before stopping.

### Security
A magma crucible can have a [signalum security
lock](/docs/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A magma crucible's configuration can be saved on a [redprint](/docs/redprint/)
to be copied to other crucibles.

### Light source
When a magma crucible is active, it emits a light level of 14.


Tiers
-----

Magma crucibles come in six [tiers](/docs/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. power usage | Augment slots | Max. items per auto-transfer | Max. fluid auto-output rate | Note |
|---
| Basic | 50 RF/t | 0 | 8 | 100 mB/t |
| Hardened | 75 RF/t | 1 | 16 | 300 mB/t |
| Reinforced | 100 RF/t | 2 | 28 | 600 mB/t |
| Signalum | 125 RF/t | 3 | 44 | 1000 mB/t |
| Resonant | 150 RF/t | 4 | 64 | 1500 mB/t |
| Creative | 150 RF/t | 4 | 64 | 1500 mB/t | Only obtainable in creative mode. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}


Augmentation
------------

A magma crucible can have [augments](/docs/augments/) installed to improve
certain properties or to change how it works. Augments can be installed in the
Augmentation tab in a crucible's GUI.

{% include augment-table.html augments=page.augments %}


Recipes
-------

{% include recipe-table.html type='crucible' recipes=page.recipe-list %}
