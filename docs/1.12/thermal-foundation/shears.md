---
category: Equipment
subjects:
- tf-1-12-tool-shears-bronze
recipes:
  crafting-shaped:
  - tf-1-12-tool-shears-wood
  - tf-1-12-tool-shears-stone
  - tf-1-12-tool-shears-gold
  - tf-1-12-tool-shears-diamond
  - tf-1-12-tool-shears-copper
  - tf-1-12-tool-shears-tin
  - tf-1-12-tool-shears-silver
  - tf-1-12-tool-shears-lead
  - tf-1-12-tool-shears-aluminum
  - tf-1-12-tool-shears-nickel
  - tf-1-12-tool-shears-platinum
  - tf-1-12-tool-shears-steel
  - tf-1-12-tool-shears-electrum
  - tf-1-12-tool-shears-invar
  - tf-1-12-tool-shears-bronze
  - tf-1-12-tool-shears-constantan
show-image: false
subcategory: Tools
title: Shears
usage-recipes:
  pulverizer:
  - recycling-tool-shears-wood
  - recycling-tool-shears-diamond
  smelter:
  - recycling-tool-shears-gold
  - recycling-tool-shears-copper
  - recycling-tool-shears-tin
  - recycling-tool-shears-silver
  - recycling-tool-shears-lead
  - recycling-tool-shears-aluminum
  - recycling-tool-shears-nickel
  - recycling-tool-shears-platinum
  - recycling-tool-shears-steel
  - recycling-tool-shears-electrum
  - recycling-tool-shears-invar
  - recycling-tool-shears-bronze
  - recycling-tool-shears-constantan
---

![Shears](/assets/images/docs/1.12/thermal-foundation/shears.gif){:style="height: 128px"}


**[Shears](https://minecraft.gamepedia.com/Shears)** are tools in vanilla
Minecraft. [Thermal Foundation](../) adds a set of shears
made of various materials.


Obtaining
---------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped with-note=true %}


Usage
-----

### Comparison
{% comment %}
uses = mat.maxUses - 12
{% endcomment %}

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Uses |
|---
| Iron (vanilla) | 238 |
|
| Wood | 47 |
| Stone | 119 |
| Gold | 20 |
| Diamond | 1,549 |
|
| Copper | 163 |
| Tin | 138 |
| Silver | 63 |
| Lead | 88 |
| Aluminum | 213 |
| Nickel | 288 |
| Platinum | 1,388 |
| Steel | 388 |
| Electrum | 88 |
| Invar | 413 |
| Bronze | 313 |
| Constantan | 263 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.usage-recipes.pulverizer %}
