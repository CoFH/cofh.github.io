---
title: Shears (Thermal Foundation)
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/equipment/shears/
  - /docs/thermal-foundation/equipment/tools/shears/
  - /docs/shears/
recipes:
  crafting:
    - shears-wood
    - shears-stone
    - shears-gold
    - shears-diamond
    - shears-copper
    - shears-tin
    - shears-silver
    - shears-lead
    - shears-aluminum
    - shears-nickel
    - shears-platinum
    - shears-steel
    - shears-electrum
    - shears-invar
    - shears-bronze
    - shears-constantan
usage-recipes:
  smelter:
    - recycling-shears-gold
    - recycling-shears-copper
    - recycling-shears-tin
    - recycling-shears-silver
    - recycling-shears-lead
    - recycling-shears-aluminum
    - recycling-shears-nickel
    - recycling-shears-platinum
    - recycling-shears-steel
    - recycling-shears-electrum
    - recycling-shears-invar
    - recycling-shears-bronze
    - recycling-shears-constantan
  pulverizer:
    - recycling-shears-wood
    - recycling-shears-diamond
---

![Shears](/assets/images/thermal-foundation/shears.gif){:style="height: 128px"}


**[Shears](https://minecraft.gamepedia.com/Shears)** are tools in vanilla
Minecraft. [Thermal Foundation](/docs/thermal-foundation/) adds a set of shears
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
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer' recipes=page.usage-recipes.pulverizer %}
