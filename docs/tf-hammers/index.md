---
title: Hammers (Thermal Foundation)
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/equipment/tools/hammers/
  - /docs/hammers/
recipes:
  crafting:
    - hammer-wood
    - hammer-stone
    - hammer-iron
    - hammer-gold
    - hammer-diamond
    - hammer-copper
    - hammer-tin
    - hammer-silver
    - hammer-lead
    - hammer-aluminum
    - hammer-nickel
    - hammer-platinum
    - hammer-steel
    - hammer-electrum
    - hammer-invar
    - hammer-bronze
    - hammer-constantan
usage-recipes:
  smelter:
    - recycling-hammer-iron
    - recycling-hammer-gold
    - recycling-hammer-copper
    - recycling-hammer-tin
    - recycling-hammer-silver
    - recycling-hammer-lead
    - recycling-hammer-aluminum
    - recycling-hammer-nickel
    - recycling-hammer-platinum
    - recycling-hammer-steel
    - recycling-hammer-electrum
    - recycling-hammer-invar
    - recycling-hammer-bronze
    - recycling-hammer-constantan
  pulverizer:
    - recycling-hammer-diamond
---

![Hammers](/assets/images/thermal-foundation/hammers.gif){:style="height: 128px"}


**Hammers** are [pickaxe](https://minecraft.gamepedia.com/Pickaxe)-like tools
that can mine 9 blocks at once.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting with-note=true %}


Usage
-----

Hammers can be used to mine the same blocks
[pickaxes](https://minecraft.gamepedia.com/Pickaxe) can mine. When a block is
mined using a hammer, any blocks surrounding it in a 3x3 area will be mined as
well if possible. Hammers use 1 durability for every individual block mined.

### Comparison
{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Uses | Mining speed | Harvest level | Attack speed | Attack damage | Enchantability |
|---
| Wood | 118 | 2 | 0 | 0.6 | 8 | 15 |
| Stone | 262 | 4 | 1 | 0.6 | 11 | 5 |
| Iron | 500 | 6 | 2 | 0.7 | 11 | 14 |
| Gold | 64 | 12 | 0 | 0.8 | 8 | 22 |
| Diamond | 3,122 | 8 | 3 | 0.8 | 11 | 10 |
|
| Copper | 350 | 4 | 1 | 0.6 | 11 | 6 |
| Tin | 400 | 4.5 | 1 | 0.6 | 11 | 7 |
| Silver | 400 | 6 | 2 | 0.7 | 11 | 20 |
| Lead | 300 | 5 | 1 | 0.6 | 11 | 9 |
| Aluminum | 550 | 10 | 1 | 0.6 | 11 | 14 |
| Nickel | 600 | 6.5 | 2 | 0.7 | 11 | 18 |
| Platinum | 3,400 | 9 | 4 | 0.9 | 11 | 9 |
| Steel | 1,000 | 6.5 | 2 | 0.7 | 11 | 10 |
| Electrum | 200 | 14 | 0 | 0.8 | 8 | 30 |
| Invar | 900 | 7 | 2 | 0.7 | 11 | 16 |
| Bronze | 1,000 | 6 | 2 | 0.7 | 11 | 15 |
| Constantan | 550 | 6 | 2 | 0.7 | 11 | 20 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}

### Enchantments
Hammers can receive the same enchantments that
[pickaxes](https://minecraft.gamepedia.com/Pickaxe) can, including [Silk
Touch](https://minecraft.gamepedia.com/Silk_Touch) and
[Fortune](https://minecraft.gamepedia.com/Fortune).

### Induction Smelter ingredient
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer' recipes=page.usage-recipes.pulverizer %}
