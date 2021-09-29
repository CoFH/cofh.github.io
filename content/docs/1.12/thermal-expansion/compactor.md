---
augments:
- te-1-12-augment-machine-power
- te-1-12-augment-machine-compactor-coin
- te-1-12-augment-machine-compactor-gear
category: Machines
recipe-list:
- plate
- plate-fluxed-electrum
- blaze-rod-from-powder
- blizz-rod-from-powder
- blitz-rod-from-powder
- basalz-rod-from-powder
recipes:
  crafting-shaped:
  - te-1-12-machine-compactor
show_image: false
subjects:
- te-1-12-machine-compactor
title: Compactor
---

![Compactor](/images/docs/1.12/thermal-expansion/compactor.png)

> More gentle than a pulverizer.


A **compactor** is a [machine](../machines/) that applies pressure to items
to change their form.


Obtaining
---------

A placed compactor can be instantly picked up by dismantling it with a
[wrench](../../wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}

### Upgrading
A compactor is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](../../thermal-foundation/upgrade-kits/) and
[conversion kits](../../thermal-foundation/conversion-kits/).


Usage
-----

### Placement
When placed, a compactor faces the player. It can face any of the four cardinal
directions, and can be rotated using a [wrench](../../wrenches/).

### Processing
When items are placed in a compactor's input slot, the machine will start
consuming [Redstone Flux](/docs/redstone-flux/) to process them. Every item
requires a certain amount of energy to process. When enough energy has been
consumed for an item, the input is consumed and the output is placed in the
output slot.

The speed at which a compactor processes items depends on how much energy it can
use per tick. This in turn depends on how much power is being supplied, and on
the machine's maximum power usage. A basic compactor has a maximum power usage
of 20 RF/t. This can be increased by upgrading the machine to a higher
[tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Items can enter and exit a compactor through its sides. Every side of a
compactor may correspond to its input slot, its output slot, or both at the same
time.

A compactor can automatically transfer items out of any sides that directly
correspond to its output slot. This is called auto-output. It can also transfer
items from adjacent inventories into any sides that directly correspond to its
input slot. This is called auto-input. Auto-output and auto-input occur whenever
the machine finishes processing an item, or every 32 ticks (1.6 seconds) if the
machine is inactive.

A basic compactor can automatically transfer up to 16 items at a time. This
amount can be increased by upgrading the machine to a higher [tier](#tiers).

Which sides correspond to which slots and whether auto-output and auto-input are
enabled can be configured using the Configuration tab in the machine's GUI.

### Redstone control
A compactor may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The compactor works whenever possible. This is
the default mode.

Low
: The compactor works when *not* powered. When powered, it stops working.

High
: The compactor only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

### Security
A compactor can have a [signalum security lock](../../thermal-foundation/signalum-security-lock/)
installed to restrict who can access it.

### Redprints
A compactor's configuration can be saved on a [redprint](../../thermal-foundation/redprint/) to be
copied to other compactors.


Tiers
-----

Compactors come in five [tiers](../../thermal-foundation/tiers/).



| Tier | Max. power usage | Augment slots | Max. items per auto-transfer |
|---|---|---|---|
| Basic | 20 RF/t | 0 | 16 |
| Hardened | 30 RF/t | 1 | 16 |
| Reinforced | 40 RF/t | 2 | 28 |
| Signalum | 50 RF/t | 3 | 44 |
| Resonant | 60 RF/t | 4 | 64 |





Augmentation
------------

A compactor can have [augments](../augments/) installed to improve certain
properties or to change how it works. The amount of augments that can be
installed depends on the machine's [tier](#tiers). A basic compactor cannot be
augmented.

Augments can be installed in the Augmentation tab in a compactor's GUI.

{{<link_list ids_param="augments">}}


Recipes
-------

{{<recipe_table type="compactor" ids_param="recipe-list">}}
