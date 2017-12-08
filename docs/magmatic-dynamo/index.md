---
title: Magmatic Dynamo
nav: thermal-expansion
image:
  - alt: Magmatic dynamo
    file: thermal-expansion/dynamo-magmatic-rf.png
  - alt: Magmatic dynamo with boiler conversion
    file: thermal-expansion/dynamo-magmatic-steam.png
redirect_from:
  - /docs/thermal-expansion/dynamos/magmatic-dynamo/
recipes:
  crafting:
    - dynamo-magmatic
augments:
  - dynamo-power
  - dynamo-efficiency
  - dynamo-coil-duct
  - dynamo-throttle
  - dynamo-boiler
  - dynamo-magmatic-coolant
---

A **magmatic dynamo** is a [dynamo](/docs/dynamos/) fueled by hot fluids like
[lava](https://minecraft.gamepedia.com/Lava).


Obtaining
---------

A placed magmatic dynamo can be instantly picked up by dismantling it with a
[crescent hammer](/docs/crescent-hammer/). Its configuration is preserved in the
item. It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe), though this can be much
slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A magmatic dynamo is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](/docs/upgrade-kits/) and
[conversion kits](/docs/conversion-kits/).


Usage
-----

### Placement
When placed, a magmatic dynamo faces up. It can face any direction, and can be
rotated using a [crescent hammer](/docs/crescent-hammer/) or similar.

### Energy generation
When a magmatic dynamo is filled with fluid [fuel](#fuels), it will start
consuming it to generate [Redstone Flux](/docs/redstone-flux/). Fuel is consumed
in batches of 100 mB. Every batch of fuel yields a certain amount of energy when
consumed.

The speed at which energy is generated and fuel is consumed depends on how much
power can be emitted, and on the dynamo's maximum power output. A basic magmatic
dynamo has a maximum power output of 40 RF/t. This can be increased by upgrading
the dynamo to a higher [tier](#tiers), and by installing certain
[augments](#augmentation).

When an active magmatic dynamo cannot emit the energy it generates, it will keep
working at its minimum power output (a tenth of its maximum power output). Any
more energy that is generated in this case is lost. This can be resolved by
installing an [excitation field
limiter](/docs/augment-excitation-field-limiter/).

### Input and output
A magmatic dynamo emits [Redstone Flux](/docs/redstone-flux/) from its coil,
which points in the direction the dynamo is facing. It only emits energy when it
is active. Fluids can enter a magmatic dynamo through its sides. They cannot
enter it through the coil, unless [transmission coil
ducting](/docs/augment-transmission-coil-ducting/) is installed.

### Redstone control
A magmatic dynamo may be configured to respond to
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

When a magmatic dynamo must stop working due to a redstone signal and is still
generating energy from a consumed batch of fuel, it will finish generating
energy from that batch before stopping.

### Security
A magmatic dynamo can have a [signalum security
lock](/docs/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A magmatic dynamo's configuration can be saved on a [redprint](/docs/redprint/)
to be copied to other dynamos.

### Light source
When a magmatic dynamo is active, it emits a light level of 14.


Tiers
-----

Magmatic dynamos come in six [tiers](/docs/tiers/).

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

A magmatic dynamo can have [augments](/docs/augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the dynamo's [tier](#tiers). A basic magmatic dynamo cannot
be augmented.

Augments can be installed in the Augmentation tab in a magmatic dynamo's GUI.

{% include augment-table.html augments=page.augments %}


Fuels
-----

The following fluids can be consumed by a magmatic dynamo to generate varying
amounts of energy.

| Fuel | Energy per 1000 mB |
|---
| [Lava](https://minecraft.gamepedia.com/Lava) | 120,000 RF |
| [Blazing Pyrotheum](/docs/blazing-pyrotheum/) | 2,000,000 RF |
| Pahoehoe Lava ([IndustrialCraft²](https://www.industrial-craft.net/)) | 80,000 RF |
| Hot Coolant ([IndustrialCraft²](https://www.industrial-craft.net/)) | 40,000 RF |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
