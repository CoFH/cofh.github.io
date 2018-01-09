---
title: Compression Dynamo
nav: thermal-expansion
image:
  - alt: Compression dynamo
    file: thermal-expansion/dynamo-compression-rf.png
  - alt: Compression dynamo with boiler conversion
    file: thermal-expansion/dynamo-compression-steam.png
redirect_from:
  - /docs/thermal-expansion/dynamos/compression-dynamo/
recipes:
  crafting:
    - dynamo-compression
augments:
  - dynamo-power
  - dynamo-efficiency
  - dynamo-coil-duct
  - dynamo-throttle
  - dynamo-boiler
  - dynamo-compression-coolant
  - dynamo-compression-fuel
---

A **compression dynamo** is a [dynamo](/docs/dynamos/) fueled by fluid fuel and
[coolant](/docs/coolants/).


Obtaining
---------

A placed compression dynamo can be instantly picked up by dismantling it with a
[wrench](/docs/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
A compression dynamo is initially at the lowest [tier](#tiers) (basic). It can
be upgraded to higher tiers using [upgrade kits](/docs/upgrade-kits/) and
[conversion kits](/docs/conversion-kits/).


Usage
-----

### Placement
When placed, a compression dynamo faces up. It can face any direction, and can
be rotated using a [wrench](/docs/wrenches/).

### Energy generation
When a compression dynamo is filled with fluid [fuel](#fuels) and
[coolant](/docs/coolants/), it will start consuming both to generate [Redstone
Flux](/docs/redstone-flux/). Fuel and coolant are consumed in batches of 100 mB.
Every batch of fuel yields a certain amount of energy when consumed. Every batch
of coolant can be used to generate a certain amount of energy; this amount is
equal to the [thermal capacity](/docs/coolants/#usage) of the used coolant.

The speed at which energy is generated and fuel and coolant are consumed depends
on how much power can be emitted, and on the dynamo's maximum power output. A
basic compression dynamo has a maximum power output of 40 RF/t. This can be
increased by upgrading the dynamo to a higher [tier](#tiers), and by installing
certain [augments](#augmentation).

When an active compression dynamo cannot emit the energy it generates, it will
keep working at its minimum power output (a tenth of its maximum power output).
Any more energy that is generated in this case is lost. This can be resolved by
installing an [excitation field
limiter](/docs/augment-excitation-field-limiter/).

### Input and output
A compression dynamo emits [Redstone Flux](/docs/redstone-flux/) from its coil,
which points in the direction the dynamo is facing. It only emits energy when it
is active. Fluids can enter a compression dynamo through its sides. They cannot
enter it through the coil, unless [transmission coil
ducting](/docs/augment-transmission-coil-ducting/) is installed.

### Redstone control
A compression dynamo may be configured to respond to
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

When a compression dynamo must stop working due to a redstone signal and is
still generating energy from a consumed batch of fuel, it will finish generating
energy from that batch before stopping.

### Security
A compression dynamo can have a [signalum security
lock](/docs/signalum-security-lock/) installed to restrict who can access it.

### Redprints
A compression dynamo's configuration can be saved on a
[redprint](/docs/redprint/) to be copied to other dynamos.

### Light source
When a compression dynamo that produces [Redstone Flux](/docs/redstone-flux/) is
active, it emits a light level of 7.


Tiers
-----

Compression dynamos come in six [tiers](/docs/tiers/).

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

A compression dynamo can have [augments](/docs/augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the dynamo's [tier](#tiers). A basic compression dynamo
cannot be augmented.

Augments can be installed in the Augmentation tab in a compression dynamo's GUI.

{% include augment-table.html augments=page.augments %}


Fuels
-----

The following fluids can be consumed by a compression dynamo to generate varying
amounts of energy.

| Fuel | Energy per 1,000 mB |
|---
| [Creosote Oil](/docs/creosote-oil/) | 20,000 RF |
| [Liquifacted Coal](/docs/liquifacted-coal/) | 400,000 RF |
| [Crude Oil](/docs/crude-oil/) | 400,000 RF |
| [Tree Oil](/docs/tree-oil/) | 1,000,000 RF |
| [Naphtha](/docs/naphtha/) | 1,250,000 RF |
| [Refined Fuel](/docs/refined-fuel/) | 2,000,000 RF |
| Canola Oil ([Actually Additions](https://minecraft.curseforge.com/projects/actually-additions)) | 80,000 RF |
| Oil ([Actually Additions](https://minecraft.curseforge.com/projects/actually-additions)) | 200,000 RF |
| Crystallized Oil ([Actually Additions](https://minecraft.curseforge.com/projects/actually-additions)) | 400,000 RF |
| Empowered Oil ([Actually Additions](https://minecraft.curseforge.com/projects/actually-additions)) | 700,000 RF |
| Ethanol ([Forestry](https://forestryforminecraft.info/)) | 500,000 RF |
| Biodiesel ([Immersive Engineering](https://mods.curse.com/mc-mods/minecraft/231951-immersive-engineering)) | 500,000 RF |
| Crude Oil ([Immersive Petroleum](https://minecraft.curseforge.com/projects/immersive-petroleum)) | 400,000 RF |
| Diesel ([Immersive Petroleum](https://minecraft.curseforge.com/projects/immersive-petroleum)) | 800,000 RF |
| Gasoline ([Immersive Petroleum](https://minecraft.curseforge.com/projects/immersive-petroleum)) | 1,200,000 RF |
| Biogas ([IndustrialCraft²](https://www.industrial-craft.net/)) | 50,000 RF |
| BioFuel ([MineFactory Reloaded](https://minecraft.curseforge.com/projects/minefactory-reloaded)) | 500,000 RF |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
