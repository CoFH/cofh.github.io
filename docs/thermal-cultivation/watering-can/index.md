---
title: Watering Can
nav: thermal-cultivation
image:
  - alt: Watering can (Basic)
    file: thermal-cultivation/watering-can-basic.png
  - alt: Watering can (Hardened)
    file: thermal-cultivation/watering-can-hardened.png
  - alt: Watering can (Reinforced)
    file: thermal-cultivation/watering-can-reinforced.png
  - alt: Watering can (Signalum)
    file: thermal-cultivation/watering-can-signalum.png
  - alt: Watering can (Resonant)
    file: thermal-cultivation/watering-can-resonant.png
  - alt: Watering can (Creative)
    file: thermal-cultivation/watering-can-creative.png
redirect_from:
  - /docs/thermal-cultivation/items/watering-can/
  - /docs/watering-can/
recipes:
  crafting:
    - tc-watering-can-basic
    - tc-watering-can-hardened
    - tc-watering-can-reinforced
    - tc-watering-can-signalum
    - tc-watering-can-resonant
---

A **watering can** is a tool that uses
[water](https://minecraft.gamepedia.com/Water) to irrigate
[farmland](https://minecraft.gamepedia.com/Farmland) and speed up plant growth.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Watering
A watering can can be filled with [water](https://minecraft.gamepedia.com/Water)
by using it on blocks of water while sneaking. This removes the blocks and adds
1,000 mB of water per block to the watering can.

When used, a filled watering can irrigates
[farmland](https://minecraft.gamepedia.com/Farmland) and speeds up plant growth
in an area, in cycles of 4 ticks (5 times per second). Every cycle, each
plant-like block in the area has a chance to be forced to update, which may
cause it to grow. This chance increases with the watering can's [tier](#tiers).

A basic watering works in an area of 3x3 blocks when used. This can be increased
by upgrading it to a higher tier. When using a watering can of a higher tier,
the area can be adjusted by pressing "Cycle Item Mode" (V by default) while
holding it.

When using a watering can, a certain amount of water is consumed every cycle.
This amount depends on the size of the watering area.

| Area | Water per cycle |
|---
| 3x3 | 50 mB |
| 5x5 | 150 mB |
| 7x7 | 300 mB |
| 9x9 | 500 mB |
| 11x11 | 750 mB |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

### Dyeing
A watering can can be dyed by combining it with a
[dye](https://minecraft.gamepedia.com/Dye) in a crafting grid. The dye can be
removed by placing the watering can in a crafting grid.

### Enchantments
A watering can can be enchanted with [Holding](/docs/cofh-core-4/holding/) to increase its
capacity.

| Holding level | Capacity multiplier |
|---
| I | × 1.5 |
| II | × 2 |
| III | × 2.5 |
| IV | × 3 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}


Tiers
-----

Watering cans come in six [tiers](/docs/thermal-foundation/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Capacity | Plant growth chance | Max. watering area | Note |
|---
| Basic | 4,000 mB | 40% | 3x3 |
| Hardened | 12,000 mB | 50% | 5x5 |
| Reinforced | 24,000 mB | 60% | 7x7 |
| Signalum | 40,000 mB | 70% | 9x9 |
| Resonant | 60,000 mB | 80% | 11x11 |
| Creative | N/A | 100% | 11x11 | Holds an unlimited amount of [water](https://minecraft.gamepedia.com/Water). |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}
