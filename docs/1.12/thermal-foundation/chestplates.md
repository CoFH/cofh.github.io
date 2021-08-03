---
category: Equipment
subjects:
- tf-1-12-armor-chestplate-bronze
recipes:
  crafting-shaped:
  - tf-1-12-armor-chestplate-copper
  - tf-1-12-armor-chestplate-tin
  - tf-1-12-armor-chestplate-silver
  - tf-1-12-armor-chestplate-lead
  - tf-1-12-armor-chestplate-aluminum
  - tf-1-12-armor-chestplate-nickel
  - tf-1-12-armor-chestplate-platinum
  - tf-1-12-armor-chestplate-steel
  - tf-1-12-armor-chestplate-electrum
  - tf-1-12-armor-chestplate-invar
  - tf-1-12-armor-chestplate-bronze
  - tf-1-12-armor-chestplate-constantan
show-image: false
subcategory: Armor
title: Chestplates
usage-recipes:
  smelter:
  - recycling-armor-chestplate-copper
  - recycling-armor-chestplate-tin
  - recycling-armor-chestplate-silver
  - recycling-armor-chestplate-lead
  - recycling-armor-chestplate-aluminum
  - recycling-armor-chestplate-nickel
  - recycling-armor-chestplate-platinum
  - recycling-armor-chestplate-steel
  - recycling-armor-chestplate-electrum
  - recycling-armor-chestplate-invar
  - recycling-armor-chestplate-bronze
  - recycling-armor-chestplate-constantan
---

![Chestplates](/assets/images/docs/1.12/thermal-foundation/chestplates.gif){:style="height: 128px"}


**[Chestplates](https://minecraft.gamepedia.com/Chestplate)** are a type of
[armor](https://minecraft.gamepedia.com/Armor) in vanilla Minecraft. [Thermal
Foundation](../) adds a set of chestplates made of various
metals.


Obtaining
---------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped %}


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
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}
