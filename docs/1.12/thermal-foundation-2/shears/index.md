---
title: Shears (Thermal Foundation)
nav: thermal-foundation-2
redirect_from:
- /docs/thermal-foundation/equipment/shears/
- /docs/thermal-foundation/equipment/tools/shears/
- /docs/shears/
- /docs/tf-shears/
- /docs/thermal-foundation/shears/
- /docs/thermal-foundation-2/shears/
recipes:
  crafting:
  - tf2-tool-shears-wood
  - tf2-tool-shears-stone
  - tf2-tool-shears-gold
  - tf2-tool-shears-diamond
  - tf2-tool-shears-copper
  - tf2-tool-shears-tin
  - tf2-tool-shears-silver
  - tf2-tool-shears-lead
  - tf2-tool-shears-aluminum
  - tf2-tool-shears-nickel
  - tf2-tool-shears-platinum
  - tf2-tool-shears-steel
  - tf2-tool-shears-electrum
  - tf2-tool-shears-invar
  - tf2-tool-shears-bronze
  - tf2-tool-shears-constantan
usage-recipes:
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
  pulverizer:
  - recycling-tool-shears-wood
  - recycling-tool-shears-diamond
---

![Shears](/assets/images/thermal-foundation-2/shears.gif){:style="height: 128px"}


**[Shears](https://minecraft.gamepedia.com/Shears)** are tools in vanilla
Minecraft. [Thermal Foundation](/docs/1.12/thermal-foundation-2/) adds a set of shears
made of various materials.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting with-note=true %}


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
{% include recipe-table.html type='te5-smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='te5-pulverizer' recipes=page.usage-recipes.pulverizer %}
