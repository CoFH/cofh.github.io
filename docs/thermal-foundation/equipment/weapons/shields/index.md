---
title: Shields
recipes:
  crafting:
    - shield-stone
    - shield-iron
    - shield-gold
    - shield-diamond
    - shield-copper
    - shield-tin
    - shield-silver
    - shield-lead
    - shield-aluminum
    - shield-nickel
    - shield-platinum
    - shield-steel
    - shield-electrum
    - shield-invar
    - shield-bronze
    - shield-constantan
usage-recipes:
  smelter:
    - recycling-shield-iron
    - recycling-shield-gold
    - recycling-shield-copper
    - recycling-shield-tin
    - recycling-shield-silver
    - recycling-shield-lead
    - recycling-shield-aluminum
    - recycling-shield-nickel
    - recycling-shield-platinum
    - recycling-shield-steel
    - recycling-shield-electrum
    - recycling-shield-invar
    - recycling-shield-bronze
    - recycling-shield-constantan
  pulverizer:
    - recycling-shield-diamond
---

![Shields](/assets/images/thermal-foundation/shields.gif){:style="height: 128px"}


**[Shields](https://minecraft.gamepedia.com/Shield)** are weapons in vanilla
Minecraft. [Thermal Foundation](/docs/thermal-foundation/) adds a set of shields
made of various materials.


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
| Wood (vanilla) | 336 | 15 |
|
| Stone | 406 | 5 |
| Iron | 525 | 14 |
| Gold | 307 | 22 |
| Diamond | 1836 | 10 |
|
| Copper | 450 | 6 |
| Tin | 475 | 7 |
| Silver | 475 | 20 |
| Lead | 425 | 9 |
| Aluminum | 500 | 14 |
| Nickel | 575 | 18 |
| Platinum | 1975 | 9 |
| Steel | 775 | 10 |
| Electrum | 375 | 30 |
| Invar | 725 | 16 |
| Bronze | 775 | 15 |
| Constantan | 550 | 20 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer' recipes=page.usage-recipes.pulverizer %}
