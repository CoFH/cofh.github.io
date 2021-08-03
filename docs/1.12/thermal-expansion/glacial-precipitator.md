---
augments:
- te-1-12-augment-machine-power
category: Machines
recipe-list:
- snowball
- snow
- ice
- snow-layer
- packed-ice
recipes:
  crafting-shaped:
  - te-1-12-machine-precipitator
show-image: false
subjects:
- te-1-12-machine-precipitator
title: Glacial Precipitator
---

![Glacial precipitator](/assets/images/docs/1.12/thermal-expansion/glacial-precipitator.png){:style="height: 128px"}

> Have a snowball fight!


A **glacial precipitator**, or **precipitator** for short, is a
[machine](../machines/) that freezes fluids into items.


Obtaining
---------

A placed glacial precipitator can be instantly picked up by dismantling it with
a [wrench](../../wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped no-result=true %}

### Upgrading
A glacial precipitator is initially at the lowest [tier](#tiers) (basic). It can
be upgraded to higher tiers using [upgrade kits](../../thermal-foundation/upgrade-kits/) and
[conversion kits](../../thermal-foundation/conversion-kits/).


Usage
-----

### Placement
When placed, a glacial precipitator faces the player. It can face any of the
four cardinal directions, and can be rotated using a [wrench](../../wrenches/).

### Processing
A glacial precipitator can be configured to freeze a certain fluid into a
certain item following one of its available [recipes](#recipes).

When a glacial precipitator's input tank is filled with the fluid corresponding
to the configured recipe, the machine will start consuming [Redstone
Flux](/docs/redstone-flux/) to produce the recipe's output item. Every produced
item requires a certain amount of energy and fluid. When enough energy has been
consumed for an item, the input is consumed and the output is placed in the
output slot.

The speed at which a glacial precipitator produces items depends on how much
energy it can use per tick. This in turn depends on how much power is being
supplied, and on the machine's maximum power usage. A basic precipitator has a
maximum power usage of 20 RF/t. This can be increased by upgrading the machine
to a higher [tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit a glacial precipitator through its sides.
Every side of a precipitator may correspond to its input tank, its output slot,
or both at the same time.

A glacial precipitator can automatically transfer items out of any sides that
directly correspond to its output slot. This is called auto-output, and occurs
whenever the machine finishes processing an item, or every 32 ticks (1.6
seconds) if the machine is inactive.

A basic glacial precipitator can automatically output up to 16 items at a time.
This amount can be increased by upgrading the machine to a higher
[tier](#tiers).

Which sides correspond to which tanks/slots and whether auto-output is enabled
can be configured using the Configuration tab in the machine's GUI.

### Redstone control
A glacial precipitator may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The precipitator works whenever possible. This
is the default mode.

Low
: The precipitator works when *not* powered. When powered, it stops working.

High
: The precipitator only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

### Security
A glacial precipitator can have a [signalum security
lock](../../thermal-foundation/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A glacial precipitator's configuration can be saved on a
[redprint](../../thermal-foundation/redprint/) to be copied to other precipitators.


Tiers
-----

Glacial precipitators come in five [tiers](../../thermal-foundation/tiers/).

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

A glacial precipitator can have [augments](../augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the machine's [tier](#tiers). A basic precipitator cannot
be augmented.

Augments can be installed in the Augmentation tab in a precipitator's GUI.

{% include docs/id-link-list.html ids=page.augments %}


Recipes
-------

{% include docs/recipe/table/table.html recipe-type='precipitator' recipe-ids=page.recipe-list %}
