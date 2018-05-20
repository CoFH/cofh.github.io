---
title: Fishing Rods (Thermal Foundation)
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/equipment/fishing-rods/
  - /docs/thermal-foundation/equipment/tools/fishing-rods/
  - /docs/fishing-rods/
  - /docs/tf-fishing-rods/
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
vanilla Minecraft. [Thermal Foundation](/docs/thermal-foundation/) adds a set of
fishing rods made of various materials.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting with-note=true %}


Usage
-----

### Comparison
The lure and luck modifiers of a fishing rod make it as powerful as a regular
[fishing rod](https://minecraft.gamepedia.com/Fishing_Rod) enchanted with
[Lure](https://minecraft.gamepedia.com/Lure) and [Luck of the
Sea](https://minecraft.gamepedia.com/Luck_of_the_Sea) at those levels,
respectively.

{% comment %}
uses = mat.maxUses + 5
lureModifier = round(mat.efficiency / 3)
luckModifier = round(mat.harvestLevel / 2)
{% endcomment %}

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Uses | Lure modifier | Luck modifier | Enchantability |
|---
| Wood (vanilla) | 65 | 0 | 0 | 1 |
|
| Stone | 136 | 1 | 1 | 5 |
| Iron | 255 | 2 | 1 | 14 |
| Gold | 37 | 4 | 0 | 22 |
| Diamond | 1,566 | 3 | 2 | 10 |
|
| Copper | 180 | 1 | 1 | 7 |
| Tin | 155 | 2 | 1 | 7 |
| Silver | 80 | 2 | 1 | 25 |
| Lead | 105 | 2 | 1 | 9 |
| Aluminum | 230 | 3 | 1 | 14 |
| Nickel | 305 | 2 | 1 | 18 |
| Platinum | 1,405 | 3 | 2 | 16 |
| Steel | 405 | 2 | 1 | 10 |
| Electrum | 105 | 5 | 0 | 30 |
| Invar | 430 | 2 | 1 | 12 |
| Bronze | 330 | 2 | 1 | 10 |
| Constantan | 280 | 2 | 1 | 12 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer' recipes=page.usage-recipes.pulverizer %}
