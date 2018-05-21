---
title: Chestplates (Thermal Foundation)
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/equipment/armor/chestplates/
  - /docs/chestplates/
  - /docs/tf-chestplates/
recipes:
  crafting:
    - chestplate-copper
    - chestplate-tin
    - chestplate-silver
    - chestplate-lead
    - chestplate-aluminum
    - chestplate-nickel
    - chestplate-platinum
    - chestplate-steel
    - chestplate-electrum
    - chestplate-invar
    - chestplate-bronze
    - chestplate-constantan
usage-recipes:
  smelter:
    - recycling-chestplate-copper
    - recycling-chestplate-tin
    - recycling-chestplate-silver
    - recycling-chestplate-lead
    - recycling-chestplate-aluminum
    - recycling-chestplate-nickel
    - recycling-chestplate-platinum
    - recycling-chestplate-steel
    - recycling-chestplate-electrum
    - recycling-chestplate-invar
    - recycling-chestplate-bronze
    - recycling-chestplate-constantan
---

![Chestplates](/assets/images/thermal-foundation/chestplates.gif){:style="height: 128px"}


**[Chestplates](https://minecraft.gamepedia.com/Chestplate)** are a type of
[armor](https://minecraft.gamepedia.com/Armor) in vanilla Minecraft. [Thermal
Foundation](/docs/thermal-foundation/) adds a set of chestplates made of various
metals.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Comparison
{% comment %}
durability = mat.durability * 16
defense = mat.reductionAmounts[2]
{% endcomment %}

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Durability | Defense | Toughness | Enchantability |
|---
| Leather | 80 | 3 | | 15 |
| Chain | 240 | 5 | | 12 |
| Iron | 240 | 6 | | 9 |
| Gold | 112 | 5 | | 25 |
| Diamond | 528 | 8 | 2 | 10 |
|
| Copper | 160 | 3 | | 8 |
| Tin | 128 | 4 | | 9 |
| Silver | 128 | 4 | | 25 |
| Lead | 192 | 5 | | 9 |
| Aluminum | 192 | 4 | | 14 |
| Nickel | 240 | 5 | | 18 |
| Platinum | 560 | 8 | 2 | 16 |
| Steel | 352 | 7 | 1 | 10 |
| Electrum | 128 | 4 | | 30 |
| Invar | 336 | 7 | 1 | 12 |
| Bronze | 288 | 6 | 1 | 10 |
| Constantan | 208 | 4 | | 12 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
