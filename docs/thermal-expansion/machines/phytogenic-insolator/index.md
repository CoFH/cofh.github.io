---
title: Phytogenic Insolator
recipes:
  crafting:
    - machine-insolator
augments:
  - machine-power
  - machine-secondary
  - machine-secondary-null
  - machine-insolator-mycelium
  - machine-insolator-nether
  - machine-insolator-end
  - machine-insolator-tree
recipe-list:
  phyto-gro:
    - wheat
    - potato
    - carrot
    - beetroot
    - cactus
    - sugar-canes
    - pumpkin
    - melon
    - cocoa-beans
    - flower
    - lily-pad
    - vines
  phyto-gro-rich:
    - wheat-rich
    - potato-rich
    - carrot-rich
    - beetroot-rich
    - cactus-rich
    - sugar-canes-rich
    - pumpkin-rich
    - melon-rich
    - cocoa-beans-rich
    - flower-rich
    - lily-pad-rich
    - vines-rich
  phyto-gro-fluxed:
    - wheat-fluxed
    - potato-fluxed
    - carrot-fluxed
    - beetroot-fluxed
    - cactus-fluxed
    - sugar-canes-fluxed
    - pumpkin-fluxed
    - melon-fluxed
    - cocoa-beans-fluxed
    - flower-fluxed
    - lily-pad-fluxed
    - vines-fluxed
---

![Phytogenic insolator](/assets/images/thermal-expansion/phytogenic-insolator.png){:style="height: 128px"}

> Definitely not organic.


A **phytogenic insolator**, or **insolator** for short, is a
[machine](/docs/thermal-expansion/machines/) that grows and multiplies plants
using [water](https://minecraft.gamepedia.com/Water),
[fertilizer](/docs/thermal-foundation/items/materials/other/phyto-gro/) and
simulated sunlight.


Obtaining
---------

A placed phytogenic insolator can be instantly picked up by dismantling it with
a [crescent hammer](/docs/thermal-foundation/items/tools/crescent-hammer/). Its
configuration is preserved in the item. It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe), though this is quite slow.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A phytogenic insolator is initially at the lowest [tier](#tiers) (basic). It can
be upgraded to higher tiers using [upgrade
kits](/docs/thermal-expansion/tiers/upgrade-kits/) and [conversion
kits](/docs/thermal-expansion/tiers/conversion-kits/).


Usage
-----

### Processing
A phytogenic insolator has two input slots and an input tank. When combinations
of items are placed in these slots and the tank is filled with
[water](https://minecraft.gamepedia.com/Water), the machine will start consuming
[Redstone Flux](/docs/redstone-flux/) to process the items. Every item
combination requires a certain amount of energy to process. When enough energy
has been consumed for an item combination, the input is consumed and the output
is placed in the primary output slot. A secondary output may be produced when
processing certain items, which is placed in the secondary output slot.

The speed at which a phytogenic insolator processes items depends on how much
energy it can use per tick. This in turn depends on how much power is being
supplied, and on the machine's maximum power usage. A basic insolator has a
maximum power usage of 20 RF/t. This can be increased by upgrading the machine
to a higher [tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Items and fluids can enter and exit a phytogenic insolator through its sides.
Every side of an insolator may correspond to one of its input slots (and
possibly its input tank), one of its output slots, or certain slots/tanks at the
same time.

A phytogenic insolator can automatically transfer items out of any sides that
directly correspond to one of its output slots. This is called auto-output. It
can also transfer items from adjacent inventories into any sides that directly
correspond to one of its input slots. This is called auto-input. Auto-output and
auto-input occur whenever the machine finishes processing an item, or every 32
ticks (1.6 seconds) if the machine is inactive.

Which sides correspond to which slots/tanks and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
machine's GUI.

One of a phytogenic insolator's input slots can be locked to only accept
[phyto-gro](/docs/thermal-foundation/items/materials/other/phyto-gro/).

[Water](https://minecraft.gamepedia.com/Water) can enter a phytogenic insolator
through any side, regardless of configuration.

### Redstone control
A phytogenic insolator may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The insolator works whenever possible. This is
the default mode.

Low
: The insolator works when *not* powered. When powered, it stops working.

High
: The insolator only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

When a phytogenic insolator must stop working due to a redstone signal and is
still processing an item, it will finish processing that item before stopping.

### Security
A phytogenic insolator can have a [signalum security
lock](/docs/thermal-foundation/items/other/signalum-security-lock/) installed to
restrict who can access it.

### Redprints
A phytogenic insolator's configuration can be saved on a
[redprint](/docs/thermal-foundation/items/tools/redprint/) to be copied to other
insolators.

### Light source
When a phytogenic insolator is active, it emits a light level of 14.


Tiers
-----

Phytogenic insolators come in six [tiers](/docs/thermal-expansion/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. power usage | Augment slots | Max. items per auto-transfer | Note |
|---
| Basic | 20 RF/t | 0 | 8 |
| Hardened | 30 RF/t | 1 | 16 |
| Reinforced | 40 RF/t | 2 | 28 |
| Signalum | 50 RF/t | 3 | 44 |
| Resonant | 60 RF/t | 4 | 64 |
| Creative | 60 RF/t | 4 | 64 | Only obtainable in creative mode. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}


Augmentation
------------

A phytogenic insolator can have [augments](/docs/thermal-expansion/augments/)
installed to improve certain properties or to change how it works. Augments can
be installed in the Augmentation tab in an insolator's GUI.

{% include augment-table.html augments=page.augments %}


Recipes
-------

### Using Phyto-Gro
{% include recipe-table.html type='insolator' recipes=page.recipe-list.phyto-gro %}

### Using Rich Phyto-Gro
{% include recipe-table.html type='insolator' recipes=page.recipe-list.phyto-gro-rich %}

### Using Fluxed Phyto-Gro
{% include recipe-table.html type='insolator' recipes=page.recipe-list.phyto-gro-fluxed %}
