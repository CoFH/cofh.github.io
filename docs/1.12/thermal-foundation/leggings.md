---
category: Equipment
subjects:
- tf-1-12-armor-leggings-bronze
recipes:
  crafting-shaped:
  - tf-1-12-armor-leggings-copper
  - tf-1-12-armor-leggings-tin
  - tf-1-12-armor-leggings-silver
  - tf-1-12-armor-leggings-lead
  - tf-1-12-armor-leggings-aluminum
  - tf-1-12-armor-leggings-nickel
  - tf-1-12-armor-leggings-platinum
  - tf-1-12-armor-leggings-steel
  - tf-1-12-armor-leggings-electrum
  - tf-1-12-armor-leggings-invar
  - tf-1-12-armor-leggings-bronze
  - tf-1-12-armor-leggings-constantan
show-image: false
subcategory: Armor
title: Leggings
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

![Leggings](/assets/images/docs/1.12/thermal-foundation/leggings.gif){:style="height: 128px"}


**[Leggings](https://minecraft.gamepedia.com/Leggings)** are a type of
[armor](https://minecraft.gamepedia.com/Armor) in vanilla Minecraft. [Thermal
Foundation](../) adds a set of leggings made of various
metals.


Obtaining
---------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped %}


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
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}
