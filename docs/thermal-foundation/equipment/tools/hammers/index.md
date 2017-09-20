---
title: Hammers
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


**Hammers** are [pickaxe](https://minecraft.gamepedia.com/Pickaxes)-like tools
that can mine 9 blocks at once.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting with-note=true %}


Usage
-----

### Mining
Hammers can be used to mine the same blocks
[pickaxes](https://minecraft.gamepedia.com/Pickaxes) can mine. When a block is
mined using a hammer, any blocks surrounding it in a 3x3x1 area will be mined as
well if possible. Hammers use 1 durability for every individual block mined.

### Comparison
{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Uses | Mining speed | Harvest level | Attack speed | Attack damage | Enchantability |
|---
| Wood | 118 | 2 | 0 | 0.4 | 7 | 15 |
| Stone | 262 | 4 | 1 | 0.4 | 8 | 5 |
| Iron | 500 | 6 | 2 | 0.4 | 9 | 14 |
| Gold | 64 | 12 | 0 | 0.4 | 7 | 22 |
| Diamond | 3122 | 8 | 3 | 0.4 | 10 | 10 |
|
| Copper | 350 | 4 | 1 | 0.4 | 7.75 | 6 |
| Tin | 400 | 4.5 | 1 | 0.4 | 8 | 7 |
| Silver | 400 | 6 | 2 | 0.4 | 8.5 | 20 |
| Lead | 300 | 5 | 1 | 0.4 | 8 | 9 |
| Aluminum | 550 | 10 | 1 | 0.4 | 8 | 14 |
| Nickel | 600 | 6.5 | 2 | 0.4 | 9.5 | 18 |
| Platinum | 3400 | 9 | 4 | 0.4 | 11 | 9 |
| Steel | 1000 | 6.5 | 2 | 0.4 | 9.5 | 10 |
| Electrum | 200 | 14 | 0 | 0.4 | 7.5 | 30 |
| Invar | 900 | 7 | 2 | 0.4 | 10 | 16 |
| Bronze | 1000 | 6 | 2 | 0.4 | 9 | 15 |
| Constantan | 550 | 6 | 2 | 0.4 | 8.5 | 20 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer' recipes=page.usage-recipes.pulverizer %}
