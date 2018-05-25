---
title: Leggings (Thermal Foundation)
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/equipment/armor/leggings/
  - /docs/leggings/
  - /docs/tf-leggings/
recipes:
  crafting:
    - tf2-armor-leggings-copper
    - tf2-armor-leggings-tin
    - tf2-armor-leggings-silver
    - tf2-armor-leggings-lead
    - tf2-armor-leggings-aluminum
    - tf2-armor-leggings-nickel
    - tf2-armor-leggings-platinum
    - tf2-armor-leggings-steel
    - tf2-armor-leggings-electrum
    - tf2-armor-leggings-invar
    - tf2-armor-leggings-bronze
    - tf2-armor-leggings-constantan
usage-recipes:
  smelter:
    - recycling-armor-leggings-copper
    - recycling-armor-leggings-tin
    - recycling-armor-leggings-silver
    - recycling-armor-leggings-lead
    - recycling-armor-leggings-aluminum
    - recycling-armor-leggings-nickel
    - recycling-armor-leggings-platinum
    - recycling-armor-leggings-steel
    - recycling-armor-leggings-electrum
    - recycling-armor-leggings-invar
    - recycling-armor-leggings-bronze
    - recycling-armor-leggings-constantan
---

![Leggings](/assets/images/thermal-foundation/leggings.gif){:style="height: 128px"}


**[Leggings](https://minecraft.gamepedia.com/Leggings)** are a type of
[armor](https://minecraft.gamepedia.com/Armor) in vanilla Minecraft. [Thermal
Foundation](/docs/thermal-foundation/) adds a set of leggings made of various
metals.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Comparison
{% comment %}
durability = mat.durability * 15
defense = mat.reductionAmounts[1]
{% endcomment %}

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Durability | Defense | Toughness | Enchantability |
|---
| Leather | 75 | 2 | | 15 |
| Chain | 225 | 4 | | 12 |
| Iron | 225 | 5 | | 9 |
| Gold | 105 | 3 | | 25 |
| Diamond | 495 | 6 | 2 | 10 |
|
| Copper | 150 | 3 | | 8 |
| Tin | 120 | 3 | | 9 |
| Silver | 120 | 4 | | 25 |
| Lead | 180 | 4 | | 9 |
| Aluminum | 180 | 3 | | 14 |
| Nickel | 225 | 5 | | 18 |
| Platinum | 525 | 6 | 2 | 16 |
| Steel | 330 | 5 | 1 | 10 |
| Electrum | 120 | 4 | | 30 |
| Invar | 315 | 5 | 1 | 12 |
| Bronze | 270 | 6 | 1 | 10 |
| Constantan | 195 | 4 | | 12 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
