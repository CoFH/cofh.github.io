---
title: Sequential Fabricator
nav: thermal-expansion-5
image:
- alt: Sequential fabricator
  file: thermal-expansion-5/sequential-fabricator.png
redirect_from:
- /thermal-expansion/machines/cyclic-assembler/
- /docs/thermal-expansion/machines/cyclic-assembler/
- /docs/cyclic-assembler/
- /docs/sequential-fabricator/
- /docs/thermal-expansion/sequential-fabricator/
recipes:
  crafting:
  - te5-machine-crafter
augments:
- machine-power
- machine-crafter-input
- machine-crafter-tank
---

A **sequential fabricator** (also known as a **crafter**) is a
[machine](/docs/thermal-expansion-5/machines/) that
[crafts](https://minecraft.gamepedia.com/Crafting) items.


Obtaining
---------

A placed sequential fabricator can be instantly picked up by dismantling it with
a [wrench](/docs/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A sequential fabricator is initially at the lowest [tier](#tiers) (basic). It
can be upgraded to higher tiers using [upgrade kits](/docs/thermal-foundation-2/upgrade-kits/) and
[conversion kits](/docs/thermal-foundation-2/conversion-kits/).


Usage
-----

### Placement
When placed, a sequential fabricator faces the player. It can face any of the
four cardinal directions, and can be rotated using a [wrench](/docs/wrenches/).

### Processing
A sequential fabricator must be configured to perform a specific
[crafting](https://minecraft.gamepedia.com/Crafting) recipe in order to
function.

When the required items for the configured recipe are placed in a sequential
fabricator's input slots, the machine will start consuming [Redstone
Flux](/docs/redstone-flux/) to craft items. The machine requires 400 RF per
operation. When enough energy has been consumed for an operation, the input is
consumed and the output is placed in the output slot.

When installed, [fluidic fabrication](/docs/thermal-expansion-5/augment-fluidic-fabrication/) allows
a sequential fabricator to use fluids, which are stored in an added input tank.

The speed at which a sequential fabricator crafts items depends on how much
energy it can use per tick. This in turn depends on how much power is being
supplied, and on the machine's maximum power usage. A basic sequential
fabricator has a maximum power usage of 20 RF/t. This can be increased by
upgrading the machine to a higher [tier](#tiers), and by installing certain
[augments](#augmentation).

### Input and output
Items and fluids can enter and exit a sequential fabricator through its sides.
Every side of a sequential fabricator may correspond to its input slots (and
possibly its input tank), its output slots, or certain slots/tanks at the same
time.

A sequential fabricator can automatically transfer items out of any sides that
directly correspond to one of its output slots. This is called auto-output. If
[pattern validation](/docs/thermal-expansion-5/augment-pattern-validation/) is installed, it can
also transfer items from adjacent inventories into any sides that directly
correspond to its input slots. This is called auto-input. Auto-output and
auto-input occur whenever the machine finishes crafting an item, or every 32
ticks (1.6 seconds) if the machine is inactive.

A basic sequential fabricator can automatically transfer up to 16 items at a
time. This amount can be increased by upgrading the machine to a higher
[tier](#tiers).

Which sides correspond to which slots/tanks and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
machine's GUI.

### Redstone control
A sequential fabricator may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The sequential fabricator works whenever
possible. This is the default mode.

Low
: The sequential fabricator works when *not* powered. When powered, it stops
working.

High
: The sequential fabricator only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

### Security
A sequential fabricator can have a [signalum security
lock](/docs/thermal-foundation-2/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A sequential fabricator's configuration can be saved on a
[redprint](/docs/thermal-foundation-2/redprint/) to be copied to other sequential fabricators.

### Light source
When a sequential fabricator is active, it emits a light level of 7.


Tiers
-----

Sequential fabricators come in five [tiers](/docs/thermal-foundation-2/tiers/).

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

A sequential fabricator can have [augments](/docs/thermal-expansion-5/augments/) installed to
improve certain properties or to change how it works. The amount of augments
that can be installed depends on the machine's [tier](#tiers). A basic
sequential fabricator cannot be augmented.

Augments can be installed in the Augmentation tab in a sequential fabricator's
GUI.

{% include te5-augment-table.html augments=page.augments %}
