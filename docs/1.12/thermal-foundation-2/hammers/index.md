---
title: Hammers (Thermal Foundation)
nav: thermal-foundation-2
redirect_from:
- /docs/thermal-foundation/equipment/tools/hammers/
- /docs/hammers/
- /docs/tf-hammers/
- /docs/thermal-foundation/hammers/
- /docs/thermal-foundation-2/hammers/
recipes:
  crafting:
  - tf2-tool-hammer-wood
  - tf2-tool-hammer-stone
  - tf2-tool-hammer-iron
  - tf2-tool-hammer-gold
  - tf2-tool-hammer-diamond
  - tf2-tool-hammer-copper
  - tf2-tool-hammer-tin
  - tf2-tool-hammer-silver
  - tf2-tool-hammer-lead
  - tf2-tool-hammer-aluminum
  - tf2-tool-hammer-nickel
  - tf2-tool-hammer-platinum
  - tf2-tool-hammer-steel
  - tf2-tool-hammer-electrum
  - tf2-tool-hammer-invar
  - tf2-tool-hammer-bronze
  - tf2-tool-hammer-constantan
usage-recipes:
  smelter:
  - recycling-tool-hammer-iron
  - recycling-tool-hammer-gold
  - recycling-tool-hammer-copper
  - recycling-tool-hammer-tin
  - recycling-tool-hammer-silver
  - recycling-tool-hammer-lead
  - recycling-tool-hammer-aluminum
  - recycling-tool-hammer-nickel
  - recycling-tool-hammer-platinum
  - recycling-tool-hammer-steel
  - recycling-tool-hammer-electrum
  - recycling-tool-hammer-invar
  - recycling-tool-hammer-bronze
  - recycling-tool-hammer-constantan
  pulverizer:
  - recycling-tool-hammer-wood
  - recycling-tool-hammer-diamond
---

![Hammers](/assets/images/thermal-foundation-2/hammers.gif){:style="height: 128px"}


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
well if possible. This can be temporarily disabled by sneaking.

Hammers use 1 durability for every individual block mined.

### Comparison
{% comment %}
uses = mat.maxUses * 2
{% endcomment %}

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
| Copper | 350 | 4 | 1 | 0.6 | 11 | 7 |
| Tin | 300 | 4.5 | 1 | 0.6 | 11 | 7 |
| Silver | 150 | 6 | 1 | 0.6 | 11 | 25 |
| Lead | 200 | 5 | 1 | 0.6 | 11 | 9 |
| Aluminum | 550 | 10 | 1 | 0.6 | 11 | 14 |
| Nickel | 600 | 6.5 | 2 | 0.7 | 11 | 18 |
| Platinum | 2,800 | 9 | 4 | 0.9 | 11 | 16 |
| Steel | 800 | 6.5 | 2 | 0.7 | 11 | 10 |
| Electrum | 200 | 14 | 0 | 0.8 | 8 | 30 |
| Invar | 850 | 6.5 | 2 | 0.7 | 11 | 12 |
| Bronze | 650 | 6 | 2 | 0.7 | 11 | 10 |
| Constantan | 550 | 6 | 2 | 0.7 | 11 | 12 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}

### Enchantments
Hammers can receive the same enchantments that
[pickaxes](https://minecraft.gamepedia.com/Pickaxe) can, including [Silk
Touch](https://minecraft.gamepedia.com/Silk_Touch) and
[Fortune](https://minecraft.gamepedia.com/Fortune).

### Induction Smelter ingredient
{% include recipe-table.html type='te5-smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='te5-pulverizer' recipes=page.usage-recipes.pulverizer %}
