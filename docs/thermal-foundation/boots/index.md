---
title: Boots (Thermal Foundation)
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/equipment/armor/boots/
  - /docs/boots/
  - /docs/tf-boots/
recipes:
  crafting:
    - boots-copper
    - boots-tin
    - boots-silver
    - boots-lead
    - boots-aluminum
    - boots-nickel
    - boots-platinum
    - boots-steel
    - boots-electrum
    - boots-invar
    - boots-bronze
    - boots-constantan
usage-recipes:
  smelter:
    - recycling-boots-copper
    - recycling-boots-tin
    - recycling-boots-silver
    - recycling-boots-lead
    - recycling-boots-aluminum
    - recycling-boots-nickel
    - recycling-boots-platinum
    - recycling-boots-steel
    - recycling-boots-electrum
    - recycling-boots-invar
    - recycling-boots-bronze
    - recycling-boots-constantan
---

![Boots](/assets/images/thermal-foundation/boots.gif){:style="height: 128px"}


**[Boots](https://minecraft.gamepedia.com/Boots)** are a type of
[armor](https://minecraft.gamepedia.com/Armor) in vanilla Minecraft. [Thermal
Foundation](/docs/thermal-foundation/) adds a set of boots made of various
metals.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Comparison
{% comment %}
durability = mat.durability * 13
defense = mat.reductionAmounts[0]
{% endcomment %}

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Durability | Defense | Toughness | Enchantability |
|---
| Leather | 65 | 1 | | 15 |
| Chain | 195 | 1 | | 12 |
| Iron | 195 | 2 | | 9 |
| Gold | 91 | 1 | | 25 |
| Diamond | 429 | 3 | 2 | 10 |
|
| Copper | 130 | 1 | | 8 |
| Tin | 104 | 1 | | 9 |
| Silver | 104 | 2 | | 25 |
| Lead | 156 | 2 | | 9 |
| Aluminum | 156 | 1 | | 14 |
| Nickel | 195 | 2 | | 18 |
| Platinum | 455 | 3 | 2 | 16 |
| Steel | 286 | 2 | 1 | 10 |
| Electrum | 104 | 2 | | 30 |
| Invar | 273 | 2 | 1 | 12 |
| Bronze | 234 | 2 | 1 | 10 |
| Constantan | 169 | 2 | | 12 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}
