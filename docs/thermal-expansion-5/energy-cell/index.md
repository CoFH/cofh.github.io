---
title: Energy Cell
nav: thermal-expansion-5
image:
- alt: Energy cell (Basic)
  file: thermal-expansion/energy-cell-basic.png
- alt: Energy cell (Hardened)
  file: thermal-expansion/energy-cell-hardened.png
- alt: Energy cell (Reinforced)
  file: thermal-expansion/energy-cell-reinforced.png
- alt: Energy cell (Signalum)
  file: thermal-expansion/energy-cell-signalum.png
- alt: Energy cell (Resonant)
  file: thermal-expansion/energy-cell-resonant.png
- alt: Energy cell (Creative)
  file: thermal-expansion/energy-cell-creative.png
redirect_from:
- /docs/thermal-expansion/storage/energy-cells/
- /docs/thermal-expansion/storage/energy-cell/
- /docs/thermal-expansion/materials/energy-cell-frames/
- /docs/energy-cell/
- /docs/thermal-expansion/energy-cell/
recipes:
  crafting:
  - te5-frame-energy-cell
  - te5-energy-cell-basic
---

An **energy cell** is a block that stores a large amount of [Redstone
Flux](/docs/redstone-flux/).


Obtaining
---------

A placed energy cell can be instantly picked up by dismantling it with a
[wrench](/docs/wrenches/). Its stored energy and configuration are preserved in
the item. It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe), though this can be much
slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}

### Upgrading
An energy cell is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](/docs/thermal-foundation-2/upgrade-kits/) and
[conversion kits](/docs/thermal-foundation-2/conversion-kits/).


Usage
-----

### Placement
When placed, an energy cell faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](/docs/wrenches/).

The front of an energy cell displays roughly how full it is.

### Input and output
A placed energy cell can receive and emit [Redstone Flux](/docs/redstone-flux/)
through its sides. Which sides can receive or emit energy (or do neither) can be
configured using the Configuration tab in the energy cell's GUI.

The amount of energy that an energy cell can receive and emit per tick can be
configured in its GUI. A basic energy cell has a maximum transfer rate of 1,000
RF/t. This can be increased by upgrading the energy cell to a higher
[tier](#tiers).

When an energy cell is upgraded, or a [redprint](/docs/thermal-foundation-2/redprint/)'s contents are
copied onto it, the configured transmission rates scale with its tier.

### Item form
An energy cell in item form can be charged with [Redstone
Flux](/docs/redstone-flux/) using an [energetic
infuser](/docs/thermal-expansion-5/energetic-infuser/), a [flux capacitor](/docs/thermal-expansion-5/flux-capacitor/) or
similar. It can be placed in
[machines](/docs/thermal-expansion-5/machines/) or [enervation dynamos](/docs/thermal-expansion-5/enervation-dynamo/) to
provide them with energy.

An energy cell item can be charged and discharged at the same rates it can
receive and emit energy when placed.

An energy cell item can store more energy than a [flux
capacitor](/docs/thermal-expansion-5/flux-capacitor/), but cannot charge items in a player's
inventory.

### Redstone control
A placed energy cell may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The energy cell emits energy whenever possible.
This is the default mode.

Low
: The energy cell emits energy when *not* powered. When powered, it stops
emitting energy.

High
: The energy cell only emits energy when powered.

The current mode can be set using the Redstone Control tab in the energy cell's
GUI.

### Security
A placed energy cell can have a [signalum security
lock](/docs/thermal-foundation-2/signalum-security-lock/) installed to restrict who can access it.

### Enchantments
An energy cell can be enchanted with [Holding](/docs/cofh-core-4/holding/) to increase its
capacity.

| Holding level | Capacity multiplier |
|---
| I | × 1.5 |
| II | × 2 |
| III | × 2.5 |
| IV | × 3 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

### Redprints
An energy cell's configuration can be saved on a [redprint](/docs/thermal-foundation-2/redprint/) to
be copied to other energy cells.

### Light source
A placed energy cell that is holding [Redstone Flux](/docs/redstone-flux/) emits
a light level of between 1 and 8, depending on how full it is.

### Redstone comparators
When placed next to an energy cell, a [redstone
comparator](https://minecraft.gamepedia.com/Redstone_Comparator) emits a signal
strength of between 0 and 15, depending on how full the energy cell is.


Tiers
-----

Energy cells come in six [tiers](/docs/thermal-foundation-2/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Capacity | Max. transfer rate | Note |
|---
| Basic | 2,000,000 RF | 1,000 RF/t |
| Hardened | 8,000,000 RF | 4,000 RF/t |
| Reinforced | 18,000,000 RF | 9,000 RF/t |
| Signalum | 32,000,000 RF | 16,000 RF/t |
| Resonant | 50,000,000 RF | 25,000 RF/t |
| Creative | N/A | 25,000 RF/t | Provides an unlimited amount of energy. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}
