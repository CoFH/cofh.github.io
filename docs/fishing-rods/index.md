---
title: Fishing Rods
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/equipment/fishing-rods/
  - /docs/thermal-foundation/equipment/tools/fishing-rods/
recipes:
  crafting:
    - fishing-rod-stone
    - fishing-rod-iron
    - fishing-rod-gold
    - fishing-rod-diamond
    - fishing-rod-copper
    - fishing-rod-tin
    - fishing-rod-silver
    - fishing-rod-lead
    - fishing-rod-aluminum
    - fishing-rod-nickel
    - fishing-rod-platinum
    - fishing-rod-steel
    - fishing-rod-electrum
    - fishing-rod-invar
    - fishing-rod-bronze
    - fishing-rod-constantan
usage-recipes:
  smelter:
    - recycling-fishing-rod-iron
    - recycling-fishing-rod-gold
    - recycling-fishing-rod-copper
    - recycling-fishing-rod-tin
    - recycling-fishing-rod-silver
    - recycling-fishing-rod-lead
    - recycling-fishing-rod-aluminum
    - recycling-fishing-rod-nickel
    - recycling-fishing-rod-platinum
    - recycling-fishing-rod-steel
    - recycling-fishing-rod-electrum
    - recycling-fishing-rod-invar
    - recycling-fishing-rod-bronze
    - recycling-fishing-rod-constantan
  pulverizer:
    - recycling-fishing-rod-diamond
---

![Fishing rods](/assets/images/thermal-foundation/fishing-rods.gif){:style="height: 128px"}


**[Fishing rods](https://minecraft.gamepedia.com/Fishing_Rod)** are tools in
vanilla Minecraft. If enabled, [Thermal Foundation](/docs/thermal-foundation/)
adds a set of fishing rods made of various materials.


Obtaining
---------

### Crafting
All of the following recipes are disabled by default.

{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Comparison
{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Uses | Enchantability |
|---
| Wood (vanilla) | 65 | 1 |
|
| Stone | 136 | 5 |
| Iron | 255 | 14 |
| Gold | 37 | 22 |
| Diamond | 1566 | 10 |
|
| Copper | 180 | 6 |
| Tin | 205 | 7 |
| Silver | 205 | 20 |
| Lead | 155 | 9 |
| Aluminum | 230 | 14 |
| Nickel | 305 | 18 |
| Platinum | 1705 | 9 |
| Steel | 505 | 10 |
| Electrum | 105 | 30 |
| Invar | 455 | 16 |
| Bronze | 505 | 15 |
| Constantan | 280 | 20 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer' recipes=page.usage-recipes.pulverizer %}
