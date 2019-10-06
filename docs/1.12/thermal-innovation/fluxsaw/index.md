---
title: Fluxsaw
redirect_from:
- /docs/fluxsaw/
- /docs/thermal-innovation/fluxsaw/
image:
- alt: Fluxsaw (Basic)
  file: thermal-innovation/fluxsaw-basic.png
- alt: Fluxsaw (Hardened)
  file: thermal-innovation/fluxsaw-hardened.png
- alt: Fluxsaw (Reinforced)
  file: thermal-innovation/fluxsaw-reinforced.png
- alt: Fluxsaw (Signalum)
  file: thermal-innovation/fluxsaw-signalum.png
- alt: Fluxsaw (Resonant)
  file: thermal-innovation/fluxsaw-resonant.png
- alt: Fluxsaw (Creative)
  file: thermal-innovation/fluxsaw-creative.png
recipes:
  crafting:
  - ti-fluxsaw-basic
  - ti-fluxsaw-hardened
  - ti-fluxsaw-reinforced
  - ti-fluxsaw-signalum
  - ti-fluxsaw-resonant
---

A **fluxsaw**, or **saw** for short, is a tool that cuts blocks using [Redstone
Flux](/docs/redstone-flux/). It functions as an
[axe](https://minecraft.gamepedia.com/Axe) and
[shears](https://minecraft.gamepedia.com/Shears).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Charging
A fluxsaw can be charged with [Redstone Flux](/docs/redstone-flux/) using an
[energetic infuser](/docs/1.12/thermal-expansion/energetic-infuser/), a [flux
capacitor](/docs/1.12/thermal-expansion/flux-capacitor/) or similar.

A basic fluxsaw can hold up to 40,000 RF and can be charged at up to 1,000 RF/t.
This can be increased by upgrading the fluxsaw to a higher [tier](#tiers).

An uncharged fluxsaw is still usable and will not break when used, but it is
very weak.

### Chopping wood
A fluxsaw can be used as an [axe](https://minecraft.gamepedia.com/Axe) to break
wooden blocks quickly. It consumes 200 RF for each broken block.

A charged basic fluxsaw is comparable to an [iron
axe](https://minecraft.gamepedia.com/Iron_Axe). It becomes more powerful when
upgraded to a higher [tier](#tiers).

A charged fluxsaw can be configured to break multiple blocks at once in a
certain area. When breaking multiple blocks, a fluxsaw works slightly slower.
The current breaking area of a fluxsaw can be set by pressing "Cycle Item Mode"
(V by default) while holding it. The following modes are available for breaking
multiple blocks, in order of how powerful they are:

* Tunnel: 1x3
* Area: 3x3
* Area: 3x3x3
* Area: 5x5

When sneaking, a fluxsaw always breaks only one block at a time.

### Shearing
A charged fluxsaw can be used as
[shears](https://minecraft.gamepedia.com/Shears). When shearing, it consumes 200
RF per use. However, it also deals 1 damage per use.

### Weapon
An uncharged fluxsaw has an attack speed of 0.8, and deals 1 damage. A charged
fluxsaw has an attack speed of 2. When charged, a basic fluxsaw deals 5 damage.
The damage when charged can be increased by upgrading the fluxsaw to a higher
[tier](#tiers).

A charged fluxsaw consumes 400 RF per hit.

### Dyeing
A fluxsaw can be dyed by combining it with a
[dye](https://minecraft.gamepedia.com/Dye) in a crafting grid. The dye can be
removed by placing the fluxsaw in a crafting grid.

### Enchantments
A fluxsaw can receive all the enchantments that
[axes](https://minecraft.gamepedia.com/Axe) can receive.

A basic fluxsaw has an
[enchantability](https://minecraft.gamepedia.com/Enchantability) of 10. This can
be increased by upgrading the fluxsaw to a higher [tier](#tiers).

When enchanted with [Unbreaking](https://minecraft.gamepedia.com/Unbreaking), a
fluxsaw has a chance to not consume [Redstone Flux](/docs/redstone-flux/) when
used.

| Unbreaking level | No energy use chance |
|---
| I | 33% |
| II | 50% |
| III | 60% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

A fluxsaw can also be enchanted with [Holding](/docs/1.12/cofh-core/holding/) to increase its
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

Fluxsaws come in six [tiers](/docs/1.12/thermal-foundation/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Capacity | Max. charge rate | Breaking speed | Max. area breaking mode | Attack damage | Enchantability | Note |
|---
| Basic | 40,000 RF | 1,000 RF/t | 6| Tunnel: 1x3 | 5 | 10 | Comparable to an iron axe. |
| Hardened | 120,000 RF | 4,000 RF/t | 7.5| Area: 3x3 | 5.5 | 10 |
| Reinforced | 240,000 RF | 9,000 RF/t | 9 | Area: 3x3 | 6 | 15 | Comparable to a diamond axe. |
| Signalum | 400,000 RF | 16,000 RF/t | 10.5 | Area: 3x3x3 | 6.5 | 15 |
| Resonant | 600,000 RF | 25,000 RF/t | 12 | Area: 5x5 | 7 | 20 |
| Creative | N/A | N/A | 12 | Area: 5x5 | 7 | 20 | Does not consume energy. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small}
</div>
{::options parse_block_html="false" /}
