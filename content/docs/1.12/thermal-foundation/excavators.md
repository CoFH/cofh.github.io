---
category: Equipment
subjects:
- tf-1-12-tool-excavator-bronze
image:
- alt: Iron excavator
  file: thermal-foundation/excavator-iron.png
- alt: Gold excavator
  file: thermal-foundation/excavator-gold.png
- alt: Diamond excavator
  file: thermal-foundation/excavator-diamond.png
- alt: Copper excavator
  file: thermal-foundation/excavator-copper.png
- alt: Tin excavator
  file: thermal-foundation/excavator-tin.png
- alt: Silver excavator
  file: thermal-foundation/excavator-silver.png
- alt: Lead excavator
  file: thermal-foundation/excavator-lead.png
- alt: Aluminum excavator
  file: thermal-foundation/excavator-aluminum.png
- alt: Nickel excavator
  file: thermal-foundation/excavator-nickel.png
- alt: Platinum excavator
  file: thermal-foundation/excavator-platinum.png
- alt: Steel excavator
  file: thermal-foundation/excavator-steel.png
- alt: Electrum excavator
  file: thermal-foundation/excavator-electrum.png
- alt: Invar excavator
  file: thermal-foundation/excavator-invar.png
- alt: Bronze excavator
  file: thermal-foundation/excavator-bronze.png
- alt: Constantan excavator
  file: thermal-foundation/excavator-constantan.png
- alt: Stone excavator
  file: thermal-foundation/excavator-stone.png
- alt: Wooden excavator
  file: thermal-foundation/excavator-wood.png
recipes:
  crafting-shaped:
  - tf-1-12-tool-excavator-wood
  - tf-1-12-tool-excavator-stone
  - tf-1-12-tool-excavator-iron
  - tf-1-12-tool-excavator-gold
  - tf-1-12-tool-excavator-diamond
  - tf-1-12-tool-excavator-copper
  - tf-1-12-tool-excavator-tin
  - tf-1-12-tool-excavator-silver
  - tf-1-12-tool-excavator-lead
  - tf-1-12-tool-excavator-aluminum
  - tf-1-12-tool-excavator-nickel
  - tf-1-12-tool-excavator-platinum
  - tf-1-12-tool-excavator-steel
  - tf-1-12-tool-excavator-electrum
  - tf-1-12-tool-excavator-invar
  - tf-1-12-tool-excavator-bronze
  - tf-1-12-tool-excavator-constantan
subcategory: Tools
title: Excavators
usage-recipes:
  pulverizer:
  - recycling-tool-excavator-wood
  - recycling-tool-excavator-diamond
  smelter:
  - recycling-tool-excavator-iron
  - recycling-tool-excavator-gold
  - recycling-tool-excavator-copper
  - recycling-tool-excavator-tin
  - recycling-tool-excavator-silver
  - recycling-tool-excavator-lead
  - recycling-tool-excavator-aluminum
  - recycling-tool-excavator-nickel
  - recycling-tool-excavator-platinum
  - recycling-tool-excavator-steel
  - recycling-tool-excavator-electrum
  - recycling-tool-excavator-invar
  - recycling-tool-excavator-bronze
  - recycling-tool-excavator-constantan
---

**Excavators** are [shovel](https://minecraft.gamepedia.com/Shovel)-like tools
that can dig 9 blocks at once.


Obtaining
---------

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}


Usage
-----

Excavators can be used to dig the same blocks as with
[shovels](https://minecraft.gamepedia.com/Shovels). When a block is broken using
an excavator, any blocks surrounding it in a 3x3 area will be broken as well if
possible. This can be temporarily disabled by sneaking.

Excavators use 1 durability for every individual block broken.

### Comparison
{% comment %}
uses = mat.maxUses * 2
{% endcomment %}

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Uses | Mining speed | Attack speed | Attack damage | Enchantability |
|---
| Wood | 118 | 2 | 1 | 2 | 15 |
| Stone | 262 | 4 | 1 | 3 | 5 |
| Iron | 500 | 6 | 1 | 4 | 14 |
| Gold | 64 | 12 | 1 | 2 | 22 |
| Diamond | 3,122 | 8 | 1 | 5 | 10 |
|
| Copper | 350 | 4 | 1 | 3 | 7 |
| Tin | 300 | 4.5 | 1 | 3 | 7 |
| Silver | 150 | 6 | 1 | 3 | 25 |
| Lead | 200 | 5 | 1 | 3 | 9 |
| Aluminum | 550 | 10 | 1 | 3 | 14 |
| Nickel | 600 | 6.5 | 1 | 4.5 | 18 |
| Platinum | 2,800 | 9 | 1 | 5.5 | 16 |
| Steel | 800 | 6.5 | 1 | 4.5 | 10 |
| Electrum | 200 | 14 | 1 | 2.5 | 30 |
| Invar | 850 | 6.5 | 1 | 4.5 | 12 |
| Bronze | 650 | 6 | 1 | 4 | 10 |
| Constantan | 550 | 6 | 1 | 3.5 | 12 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}

### Enchantments
Excavators can receive the same enchantments that
[shovels](https://minecraft.gamepedia.com/Shovel) can.

### Induction Smelter ingredient
{{<recipe_table type="smelter' recipe-ids=page.usage-recipes.smelter">}}

### Pulverizer ingredient
{{<recipe_table type="pulverizer' recipe-ids=page.usage-recipes.pulverizer">}}
