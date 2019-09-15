---
title: Centrifugal Separator
nav: thermal-expansion-5
redirect_from:
- /docs/centrifugal-separator/
- /docs/thermal-expansion/centrifugal-separator/
recipes:
  crafting:
  - te5-machine-centrifuge
augments:
- machine-power
- machine-secondary
- machine-secondary-null
- machine-centrifuge-mobs
recipe-list:
- magma-cream
- sugar-canes
- concrete-powder
- dust-electrum
- dust-invar
- dust-bronze
- dust-constantan
- dust-signalum
- dust-lumium
- dust-enderium
- dust-pyrotheum
- dust-cryotheum
- dust-aerotheum
- dust-petrotheum
---

![Centrifugal separator](/assets/images/thermal-expansion/centrifugal-separator.png){:style="height: 128px"}

> Spin to win!


A **centrifugal separator**, or **centrifuge** for short, is a
[machine](/docs/thermal-expansion-5/machines/) that separates items into their components.


Obtaining
---------

A placed centrifugal separator can be instantly picked up by dismantling it with
a [wrench](/docs/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A centrifugal separator is initially at the lowest [tier](#tiers) (basic). It
can be upgraded to higher tiers using [upgrade kits](/docs/thermal-foundation-2/upgrade-kits/) and
[conversion kits](/docs/thermal-foundation-2/conversion-kits/).


Usage
-----

### Placement
When placed, a centrifugal separator faces the player. It can face any of the
four cardinal directions, and can be rotated using a [wrench](/docs/wrenches/).

### Processing
A centrifugal separator has an input slot, four output slots and an output tank.
When items are placed in the input slot, the machine will start consuming
[Redstone Flux](/docs/redstone-flux/) to process them. Every item requires a
certain amount of energy to process. When enough energy has been consumed for an
item, the input is consumed and the output is placed in the output slots. Some
items may have a fluid output as well, which is placed in the output tank.

The speed at which a centrifugal separator processes items depends on how much
energy it can use per tick. This in turn depends on how much power is being
supplied, and on the machine's maximum power usage. A basic centrifuge has a
maximum power usage of 20 RF/t. This can be increased by upgrading the machine
to a higher [tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Items and fluids can enter and exit a centrifugal separator through its sides.
Every side of a centrifuge may correspond to its input slot, its output slots,
its output tank, or certain slots/tanks at the same time.

A centrifugal separator can automatically transfer items or fluids out of any
sides that directly correspond to its output slot/tank. This is called
auto-output. It can also transfer items from adjacent inventories into any sides
that directly correspond to its input slot. This is called auto-input.
Auto-output and auto-input occur whenever the machine finishes processing an
item, or every 32 ticks (1.6 seconds) if the machine is inactive.

A basic centrifugal separator can automatically transfer up to 16 items and up
to 1,000 mB of fluid at a time. These amounts can be increased by upgrading the
machine to a higher [tier](#tiers).

Which sides correspond to which slots/tanks and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
machine's GUI.

### Redstone control
A centrifugal separator may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The centrifuge works whenever possible. This is
the default mode.

Low
: The centrifuge works when *not* powered. When powered, it stops working.

High
: The centrifuge only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

### Security
A centrifugal separator can have a [signalum security
lock](/docs/thermal-foundation-2/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A centrifugal separator's configuration can be saved on a
[redprint](/docs/thermal-foundation-2/redprint/) to be copied to other centrifuges.

### Light source
When a centrifugal separator is active, it emits a light level of 4.


Tiers
-----

Centrifugal separators come in five [tiers](/docs/thermal-foundation-2/tiers/).

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

A centrifugal separator can have [augments](/docs/thermal-expansion-5/augments/) installed to
improve certain properties or to change how it works. The amount of augments
that can be installed depends on the machine's [tier](#tiers). A basic
centrifuge cannot be augmented.

Augments can be installed in the Augmentation tab in a centrifuge's GUI.

{% include te5-augment-table.html augments=page.augments %}


Recipes
-------

{% include recipe-table.html type='centrifuge-te5' recipes=page.recipe-list %}
