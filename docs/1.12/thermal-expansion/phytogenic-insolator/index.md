---
title: Phytogenic Insolator
redirect_from:
- /docs/thermal-expansion/machines/phytogenic-insolator/
- /docs/augment-mycelium-substrate/
- /docs/augment-nether-substrate/
- /docs/augment-ender-substrate/
- /docs/phytogenic-insolator/
- /docs/thermal-expansion/phytogenic-insolator/
- /docs/thermal-expansion-5/phytogenic-insolator/
- /docs/1.12/thermal-expansion-5/phytogenic-insolator/
recipes:
  crafting:
  - te5-machine-insolator
augments:
- machine-power
- machine-secondary
- machine-secondary-null
- machine-insolator-fertilizer
- machine-insolator-tree
- machine-insolator-monoculture
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
  - tall-flower
  - lily-pad
  - vines
  - mushroom
  - nether-wart
  - chorus-fruit
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
  - tall-flower-rich
  - lily-pad-rich
  - vines-rich
  - mushroom-rich
  - nether-wart-rich
  - chorus-fruit-rich
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
  - tall-flower-fluxed
  - lily-pad-fluxed
  - vines-fluxed
  - mushroom-fluxed
  - nether-wart-fluxed
  - chorus-fruit-fluxed
---

![Phytogenic insolator](/assets/images/thermal-expansion-5/phytogenic-insolator.png){:style="height: 128px"}

> Definitely not organic.


A **phytogenic insolator**, or **insolator** for short, is a
[machine](/docs/1.12/thermal-expansion/machines/) that grows and multiplies plants using
[water](https://minecraft.gamepedia.com/Water), [fertilizer](/docs/1.12/thermal-foundation/phyto-gro/)
and simulated sunlight.


Obtaining
---------

A placed phytogenic insolator can be instantly picked up by dismantling it with
a [wrench](/docs/1.12/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A phytogenic insolator is initially at the lowest [tier](#tiers) (basic). It can
be upgraded to higher tiers using [upgrade kits](/docs/1.12/thermal-foundation/upgrade-kits/) and
[conversion kits](/docs/1.12/thermal-foundation/conversion-kits/).


Usage
-----

### Placement
When placed, a phytogenic insolator faces the player. It can face any of the
four cardinal directions, and can be rotated using a [wrench](/docs/1.12/wrenches/).

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
Every side of an insolator may correspond to one of its input slots, one of its
output slots, or certain slots at the same time. Fluids can enter an insolator
through any side.

A phytogenic insolator can automatically transfer items out of any sides that
directly correspond to one of its output slots. This is called auto-output. It
can also transfer items from adjacent inventories into any sides that directly
correspond to one of its input slots. This is called auto-input. Auto-output and
auto-input occur whenever the machine finishes processing an item, or every 32
ticks (1.6 seconds) if the machine is inactive.

A basic phytogenic insolator can automatically transfer up to 16 items at a
time. This amount can be increased by upgrading the machine to a higher
[tier](#tiers).

Which sides correspond to which slots/tanks and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
machine's GUI.

One of a phytogenic insolator's input slots can be locked to only accept
fertilizer items. It is locked by default.

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

### Security
A phytogenic insolator can have a [signalum security
lock](/docs/1.12/thermal-foundation/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A phytogenic insolator's configuration can be saved on a
[redprint](/docs/1.12/thermal-foundation/redprint/) to be copied to other insolators.

### Light source
When a phytogenic insolator is active, it emits a light level of 14.


Tiers
-----

Phytogenic insolators come in five [tiers](/docs/1.12/thermal-foundation/tiers/).

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

A phytogenic insolator can have [augments](/docs/1.12/thermal-expansion/augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the machine's [tier](#tiers). A basic insolator cannot be
augmented.

Augments can be installed in the Augmentation tab in an insolator's GUI.

{% include te5-augment-table.html augments=page.augments %}


Recipes
-------

In some of these recipes, the chance for a secondary product is higher than
100%. In this case, the secondary product is guaranteed to be produced at least
once. The remainder of the chance (e.g. 25% for a 125% chance) becomes the
chance of the secondary product being produced twice.

### Using Phyto-Gro
{% include recipe-table.html type='te5-insolator' recipes=page.recipe-list.phyto-gro %}

### Using rich Phyto-Gro
{% include recipe-table.html type='te5-insolator' recipes=page.recipe-list.phyto-gro-rich %}

### Using fluxed Phyto-Gro
{% include recipe-table.html type='te5-insolator' recipes=page.recipe-list.phyto-gro-fluxed %}
