---
augments:
- te-1-12-augment-dynamo-power
- te-1-12-augment-dynamo-efficiency
- te-1-12-augment-dynamo-coil-duct
- te-1-12-augment-dynamo-throttle
- te-1-12-augment-dynamo-enervation-enchant
category: Dynamos
image:
- alt: Enervation dynamo
  file: thermal-expansion/dynamo-enervation-rf.png
recipes:
  crafting-shaped:
  - te-1-12-dynamo-enervation
subjects:
- te-1-12-dynamo-enervation
title: Enervation Dynamo
---

An **enervation dynamo** is a [dynamo](../dynamos/) that extracts [Redstone
Flux](/docs/redstone-flux/) from natural sources and from items that store it.


Obtaining
---------

A placed enervation dynamo can be instantly picked up by dismantling it with a
[wrench](../../wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}

### Upgrading
An enervation dynamo is initially at the lowest [tier](#tiers) (basic). It can
be upgraded to higher tiers using [upgrade kits](../../thermal-foundation/upgrade-kits/) and
[conversion kits](../../thermal-foundation/conversion-kits/).


Usage
-----

### Placement
When placed, an enervation dynamo faces up. When placed while sneaking, it faces
away from the player. An enervation dynamo can face any direction, and can be
rotated using a [wrench](../../wrenches/).

### Energy generation
When [fuel](/docs/redstone-flux/)
is placed in an enervation dynamo's fuel slot, the dynamo will start extracting
energy from it. Every unit of fuel yields a certain amount of energy when
consumed. Items that hold energy are not consumed, only drained.

The speed at which energy is extracted from items depends on how much power can
be emitted, and on the dynamo's maximum power output. A basic enervation dynamo
has a maximum power output of 40 RF/t. This can be increased by upgrading the
dynamo to a higher [tier](#tiers), and by installing certain
[augments](#augmentation).

When an active enervation dynamo cannot emit the energy it generates, it will
keep working at its minimum power output (a tenth of its maximum power output).
Any more energy that is extracted in this case is lost. This can be resolved by
installing an [excitation field
limiter](../augment-excitation-field-limiter/).

### Input and output
An enervation dynamo emits [Redstone Flux](/docs/redstone-flux/) from its coil,
which points in the direction the dynamo is facing. It only emits energy when it
is active. Items can enter an enervation dynamo through its sides. They cannot
enter it through the coil, unless [transmission coil
ducting](../augment-transmission-coil-ducting/) is installed.

### Redstone control
An enervation dynamo may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The dynamo works whenever possible. This is the
default mode.

Low
: The dynamo works when *not* powered. When powered, it stops working.

High
: The dynamo only works when powered.

The current mode can be set using the Redstone Control tab in the dynamo's GUI.

When an enervation dynamo is deactivated by a redstone signal and is still
generating energy from a consumed unit of fuel, it will finish generating energy
from that unit of fuel first.

### Security
An enervation dynamo can have a [signalum security
lock](../../thermal-foundation/signalum-security-lock/) installed to restrict who can access it.

### Redprints
An enervation dynamo's configuration can be saved on a
[redprint](../../thermal-foundation/redprint/) to be copied to other dynamos.

### Light source
When an enervation dynamo is active, it emits a light level of 7.


Tiers
-----

Enervation dynamos come in six [tiers](../../thermal-foundation/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. power output | Augment slots |
|---
| Basic | 40 RF/t | 0 |
| Hardened | 60 RF/t | 1 |
| Reinforced | 80 RF/t | 2 |
| Signalum | 100 RF/t | 3 |
| Resonant / Creative | 120 RF/t | 4 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}


Augmentation
------------

An enervation dynamo can have [augments](../augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the dynamo's [tier](#tiers). A basic enervation dynamo
cannot be augmented.

Augments can be installed in the Augmentation tab in an enervation dynamo's GUI.

{{<link_list ids_param="augments">}}


Fuels
-----

The following items can be consumed by an enervation dynamo to generate varying
amounts of energy.

| Fuel | Energy per unit |
|---
| [Redstone](https://minecraft.gamepedia.com/Redstone) | 64,000 RF |
| [Block of Redstone](https://minecraft.gamepedia.com/Block_of_Redstone) | 640,000 RF |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
