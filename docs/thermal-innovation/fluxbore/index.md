---
title: Fluxbore
nav: thermal-innovation
redirect_from:
  - /docs/fluxbore/
image:
  - alt: Fluxbore (Basic)
    file: thermal-innovation/fluxbore-basic.png
  - alt: Fluxbore (Hardened)
    file: thermal-innovation/fluxbore-hardened.png
  - alt: Fluxbore (Reinforced)
    file: thermal-innovation/fluxbore-reinforced.png
  - alt: Fluxbore (Signalum)
    file: thermal-innovation/fluxbore-signalum.png
  - alt: Fluxbore (Resonant)
    file: thermal-innovation/fluxbore-resonant.png
  - alt: Fluxbore (Creative)
    file: thermal-innovation/fluxbore-creative.png
recipes:
  crafting:
    - fluxbore-basic
    - fluxbore-hardened
    - fluxbore-reinforced
    - fluxbore-signalum
    - fluxbore-resonant
---

A **fluxbore** (also known as a **drill**) is a tool that mines blocks using
[Redstone Flux](/docs/redstone-flux/). It functions as both a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) and a
[shovel](https://minecraft.gamepedia.com/Shovel).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Charging
A fluxbore can be charged with [Redstone Flux](/docs/redstone-flux/) using an
[energetic infuser](/docs/energetic-infuser/), a [flux
capacitor](/docs/flux-capacitor/) or similar.

A basic fluxbore can hold up to 40,000 RF and can be charged at up to 1,000
RF/t. This can be increased by upgrading the fluxbore to a higher
[tier](#tiers).

An uncharged fluxbore is still usable and will not break when used, but it is
very weak.

### Mining
A fluxbore can be used as both a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) and a
[shovel](https://minecraft.gamepedia.com/Shovel). It consumes 200 RF for each
mined block.

A charged basic fluxbore is comparable to an [iron
pickaxe](https://minecraft.gamepedia.com/Iron_Pickaxe) or
[shovel](https://minecraft.gamepedia.com/Iron_Shovel). It becomes more powerful
when upgraded to a higher [tier](#tiers).

A charged fluxbore can be configured to mine multiple blocks at once in a
certain area. When mining multiple blocks, a fluxbore works slightly slower. The
current mining area of a fluxbore can be set by pressing "Cycle Item Mode" (V by
default) while holding it. The following modes are available for mining multiple
blocks, in order of how powerful they are:

* Tunnel: 1x2
* Area: 3x3
* Area: 3x3x3
* Area: 5x5

When sneaking, a fluxbore always breaks only one block at a time.

### Weapon
An uncharged fluxbore has an attack speed of 0.8, and deals 1 damage. A charged
fluxbore has an attack speed of 1.8. When charged, a basic fluxbore deals 4
damage. The damage when charged can be increased by upgrading the fluxbore to a
higher [tier](#tiers).

A charged fluxbore consumes 400 RF per hit.

### Dyeing
A fluxbore can be dyed by combining it with a
[dye](https://minecraft.gamepedia.com/Dye) in a crafting grid. The dye can be
removed by combining the fluxbore with a [water
bucket](https://minecraft.gamepedia.com/Water_Bucket) in a crafting grid (or any
item that holds at least a [bucket](https://minecraft.gamepedia.com/Bucket)
worth of [water](https://minecraft.gamepedia.com/Water)).

### Enchantments
A fluxbore can receive all the enchantments that
[pickaxes](https://minecraft.gamepedia.com/Pickaxe) and
[shovels](https://minecraft.gamepedia.com/Shovel) can receive.

A basic fluxbore has an
[enchantability](https://minecraft.gamepedia.com/Enchantability) of 10. This can
be increased by upgrading the fluxbore to a higher [tier](#tiers).

When enchanted with [Unbreaking](https://minecraft.gamepedia.com/Unbreaking), a
fluxbore has a chance to not consume [Redstone Flux](/docs/redstone-flux/) when
used.

| Unbreaking level | No energy use chance |
|---
| I | 33% |
| II | 50% |
| III | 60% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

A fluxbore can also be enchanted with [Holding](/docs/holding/) to increase its
energy capacity.

| Holding level | Capacity multiplier |
|---
| I | × 1.5 |
| II | × 2 |
| III | × 2.5 |
| IV | × 3 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}


Tiers
-----

Fluxbores come in six [tiers](/docs/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Capacity | Max. charge rate | Mining speed | Harvest level | Max. area mining mode | Attack damage | Enchantability | Note |
|---
| Basic | 40,000 RF | 1,000 RF/t | 6 | 2 | Tunnel: 1x2 | 4 | 10 | Comparable to iron tools. |
| Hardened | 120,000 RF | 4,000 RF/t | 7.5 | 2 | Area: 3x3 | 4.5 | 10 |
| Reinforced | 240,000 RF | 9,000 RF/t | 9 | 3 | Area: 3x3 | 5 | 15 | Comparable to diamond tools. |
| Signalum | 400,000 RF | 16,000 RF/t | 10.5 | 3 | Area: 3x3x3 | 5.5 | 15 |
| Resonant | 600,000 RF | 25,000 RF/t | 12 | 4 | Area: 5x5 | 6 | 20 |
| Creative | N/A | N/A | 12 | 4 | Area: 5x5 | 6 | 20 | Does not consume energy. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small}
</div>
{::options parse_block_html="false" /}
