---
title: Reactant Dynamo
nav: thermal-expansion
image:
  - alt: Reactant dynamo
    file: thermal-expansion/dynamo-reactant-rf.png
redirect_from:
  - /docs/thermal-expansion/dynamos/reactant-dynamo/
recipes:
  crafting:
    - dynamo-reactant
augments:
  - dynamo-power
  - dynamo-efficiency
  - dynamo-coil-duct
  - dynamo-throttle
  - dynamo-reactant-elemental
---

A **reactant dynamo** is a [dynamo](/docs/dynamos/) fueled by fluid fuel and
solid reactant.


Obtaining
---------

A placed reactant dynamo can be instantly picked up by dismantling it with a
[crescent hammer](/docs/crescent-hammer/). Its configuration is preserved in the
item. It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe), though this can be much
slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A reactant dynamo is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](/docs/upgrade-kits/) and
[conversion kits](/docs/conversion-kits/).


Usage
-----

### Placement
When placed, a reactant dynamo faces up. It can face any direction, and can be
rotated using a [crescent hammer](/docs/crescent-hammer/) or similar.

### Energy generation
When a reactant dynamo is supplied a fluid fuel and a reactant item that can
[react](#reactions) with one another, the dynamo will start consuming both to
generate [Redstone Flux](/docs/redstone-flux/). 100 mB of fluid fuel and one
unit of reactant are consumed together at a time. Every reaction yields a
certain amount of energy.

The speed at which energy is generated and fuel and reactants are consumed
depends on how much power can be emitted, and on the dynamo's maximum power
output. A basic reactant dynamo has a maximum power output of 40 RF/t. This can
be increased by upgrading the dynamo to a higher [tier](#tiers), and by
installing certain [augments](#augmentation).

When an active reactant dynamo cannot emit the energy it generates, it will keep
working at its minimum power output (a tenth of its maximum power output). Any
more energy that is generated in this case is lost. This can be resolved by
installing an [excitation field
limiter](/docs/augment-excitation-field-limiter/).

### Input and output
A reactant dynamo emits [Redstone Flux](/docs/redstone-flux/) from its coil,
which points in the direction the dynamo is facing. It only emits energy when it
is active. Fluids and items can enter a reactant dynamo through its sides. They
cannot enter it through the coil, unless [transmission coil
ducting](/docs/augment-transmission-coil-ducting/) is installed.

### Redstone control
A reactant dynamo may be configured to respond to
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

When a reactant dynamo must stop working due to a redstone signal and is still
generating energy from a reaction, it will finish generating energy from that
reaction before stopping.

### Security
A reactant dynamo can have a [signalum security
lock](/docs/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A reactant dynamo's configuration can be saved on a [redprint](/docs/redprint/)
to be copied to other dynamos.

### Light source
When a reactant dynamo is active, it emits a light level of 7.


Tiers
-----

Reactant dynamos come in six [tiers](/docs/tiers/).

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

A reactant dynamo can have [augments](/docs/augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the dynamo's [tier](#tiers). A basic reactant dynamo cannot
be augmented.

Augments can be installed in the Augmentation tab in a reactant dynamo's GUI.

{% include augment-table.html augments=page.augments %}


Reactions
---------

The following fluids and items can react with one another in a reactant dynamo
to generate varying amounts of energy.

| Fuel (100 mB) | Reactant | Energy |
|---
| [Destabilized Redstone](/docs/destabilized-redstone/) | [Sugar](https://minecraft.gamepedia.com/Sugar) | 80,000 RF |
| [Destabilized Redstone](/docs/destabilized-redstone/) | [Nether Wart](https://minecraft.gamepedia.com/Nether_Wart) | 100,000 RF |
| [Destabilized Redstone](/docs/destabilized-redstone/) | [Gunpowder](https://minecraft.gamepedia.com/Gunpowder) | 100,000 RF |
| [Destabilized Redstone](/docs/destabilized-redstone/) | [Blaze Powder](https://minecraft.gamepedia.com/Blaze_Powder) | 150,000 RF |
| [Destabilized Redstone](/docs/destabilized-redstone/) | [Ghast Tear](https://minecraft.gamepedia.com/Ghast_Tear) | 150,000 RF |
| [Energized Glowstone](/docs/energized-glowstone/) | [Sugar](https://minecraft.gamepedia.com/Sugar) | 100,000 RF |
| [Energized Glowstone](/docs/energized-glowstone/) | [Nether Wart](https://minecraft.gamepedia.com/Nether_Wart) | 125,000 RF |
| [Energized Glowstone](/docs/energized-glowstone/) | [Gunpowder](https://minecraft.gamepedia.com/Gunpowder) | 125,000 RF |
| [Energized Glowstone](/docs/energized-glowstone/) | [Blaze Powder](https://minecraft.gamepedia.com/Blaze_Powder) | 200,000 RF |
| [Energized Glowstone](/docs/energized-glowstone/) | [Ghast Tear](https://minecraft.gamepedia.com/Ghast_Tear) | 200,000 RF |
| [Blazing Pyrotheum](/docs/blazing-pyrotheum/) | [Cryotheum Dust](/docs/cryotheum-dust/) | 400,000 RF |
| [Gelid Cryotheum](/docs/gelid-cryotheum/) | [Pyrotheum Dust](/docs/pyrotheum-dust/) | 400,000 RF |
| [Zephyrean Aerotheum](/docs/zephyrean-aerotheum/) | [Petrotheum Dust](/docs/petrotheum-dust/) | 400,000 RF |
| [Tectonic Petrotheum](/docs/tectonic-petrotheum/) | [Aerotheum Dust](/docs/aerotheum-dust/) | 400,000 RF |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
