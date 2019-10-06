---
title: Fishing Rods (Thermal Foundation)
redirect_from:
- /docs/thermal-foundation/equipment/fishing-rods/
- /docs/thermal-foundation/equipment/tools/fishing-rods/
- /docs/fishing-rods/
- /docs/tf-fishing-rods/
- /docs/thermal-foundation/fishing-rods/
- /docs/thermal-foundation-2/fishing-rods/
- /docs/1.12/thermal-foundation-2/fishing-rods/
recipes:
  crafting:
  - tf-1-12-tool-fishing-rod-stone
  - tf-1-12-tool-fishing-rod-iron
  - tf-1-12-tool-fishing-rod-gold
  - tf-1-12-tool-fishing-rod-diamond
  - tf-1-12-tool-fishing-rod-copper
  - tf-1-12-tool-fishing-rod-tin
  - tf-1-12-tool-fishing-rod-silver
  - tf-1-12-tool-fishing-rod-lead
  - tf-1-12-tool-fishing-rod-aluminum
  - tf-1-12-tool-fishing-rod-nickel
  - tf-1-12-tool-fishing-rod-platinum
  - tf-1-12-tool-fishing-rod-steel
  - tf-1-12-tool-fishing-rod-electrum
  - tf-1-12-tool-fishing-rod-invar
  - tf-1-12-tool-fishing-rod-bronze
  - tf-1-12-tool-fishing-rod-constantan
usage-recipes:
  smelter:
  - recycling-tool-fishing-rod-iron
  - recycling-tool-fishing-rod-gold
  - recycling-tool-fishing-rod-copper
  - recycling-tool-fishing-rod-tin
  - recycling-tool-fishing-rod-silver
  - recycling-tool-fishing-rod-lead
  - recycling-tool-fishing-rod-aluminum
  - recycling-tool-fishing-rod-nickel
  - recycling-tool-fishing-rod-platinum
  - recycling-tool-fishing-rod-steel
  - recycling-tool-fishing-rod-electrum
  - recycling-tool-fishing-rod-invar
  - recycling-tool-fishing-rod-bronze
  - recycling-tool-fishing-rod-constantan
  pulverizer:
  - recycling-tool-fishing-rod-diamond
---

![Fishing rods](/assets/images/thermal-foundation-2/fishing-rods.gif){:style="height: 128px"}


**[Fishing rods](https://minecraft.gamepedia.com/Fishing_Rod)** are tools in
vanilla Minecraft. [Thermal Foundation](/docs/1.12/thermal-foundation/) adds a set of
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
{% include recipe-table.html type='te-1-12-smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.usage-recipes.pulverizer %}
