---
title: Energy Cell
nav: thermal-expansion
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
recipes:
  crafting:
    - frame-energy-cell
    - energy-cell-basic
---

An **energy cell** is a block that stores a large amount of [Redstone
Flux](/docs/redstone-flux/).


Obtaining
---------

A placed energy cell can be instantly picked up by dismantling it with a
[crescent hammer](/docs/crescent-hammer/). Its stored energy and configuration
are preserved in the item. It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe), though this can be much
slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}

### Upgrading
An energy cell is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](/docs/upgrade-kits/) and
[conversion kits](/docs/conversion-kits/).


Usage
-----

### Placement
When placed, an energy cell faces the player. It can face any of the four
cardinal directions, and can be rotated using a [crescent
hammer](/docs/crescent-hammer/) or similar.

The front of an energy cell displays roughly how full it is.

### Input and output
An energy cell can receive and emit [Redstone Flux](/docs/redstone-flux/)
through its sides. Which sides can receive or emit energy (or do neither) can be
configured using the Configuration tab in the energy cell's GUI.

The amount of energy that an energy cell can receive and emit per tick can be
configured in its GUI. A basic energy cell has a maximum transfer rate of 1,000
RF/t. This can be increased by upgrading the energy cell to a higher
[tier](#tiers).

When an energy cell is upgraded, or a [redprint](/docs/redprint/)'s contents are
copied onto it, the configured transmission rates scale with its tier.

### Redstone control
An energy cell may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The energy cell accepts energy, and emits it
whenever possible. This is the default mode.

Low
: The energy cell accepts and emits energy when *not* powered. When powered, it
stops accepting and emitting energy.

High
: The energy cell only accepts and emits energy when powered.

The current mode can be set using the Redstone Control tab in the energy cell's
GUI.

### Security
An energy cell can have a [signalum security
lock](/docs/signalum-security-lock/) installed to restrict who can access it.

### Enchantments
An energy cell can be enchanted with [Holding](/docs/holding/) to increase its
capacity.

| Holding level | Capacity multiplier |
|---
| I | 1.5x |
| II | 2x |
| III | 2.5x |
| IV | 3x |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

### Redprints
An energy cell's configuration can be saved on a [redprint](/docs/redprint/) to
be copied to other energy cells.

### Light source
An energy cell that is holding [Redstone Flux](/docs/redstone-flux/) emits a
light level of between 1 and 8, depending on how full it is.


Tiers
-----

Energy cells come in six [tiers](/docs/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Capacity | Max. transfer rate | Note |
|---
| Basic | 2,000,000 RF | 1,000 RF/t |
| Hardened | 8,000,000 RF | 4,000 RF/t |
| Reinforced | 18,000,000 RF | 9,000 RF/t |
| Signalum | 32,000,000 RF | 16,000 RF/t |
| Resonant | 50,000,000 RF | 25,000 RF/t |
| Creative | N/A | 25,000 RF/t | Emits an unlimited amount of energy. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}


Trivia
------

* An energy cell in item form is essentially a large handheld [Redstone
  Flux](/docs/redstone-flux/) battery. It can store more energy than a [flux
  capacitor](/docs/flux-capacitor/), but cannot charge items in a player's
  inventory.
