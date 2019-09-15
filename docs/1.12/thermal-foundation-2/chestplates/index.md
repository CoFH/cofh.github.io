---
title: Chestplates (Thermal Foundation)
nav: thermal-foundation-2
redirect_from:
- /docs/thermal-foundation/equipment/armor/chestplates/
- /docs/chestplates/
- /docs/tf-chestplates/
- /docs/thermal-foundation/chestplates/
- /docs/thermal-foundation-2/chestplates/
recipes:
  crafting:
  - tf2-armor-chestplate-copper
  - tf2-armor-chestplate-tin
  - tf2-armor-chestplate-silver
  - tf2-armor-chestplate-lead
  - tf2-armor-chestplate-aluminum
  - tf2-armor-chestplate-nickel
  - tf2-armor-chestplate-platinum
  - tf2-armor-chestplate-steel
  - tf2-armor-chestplate-electrum
  - tf2-armor-chestplate-invar
  - tf2-armor-chestplate-bronze
  - tf2-armor-chestplate-constantan
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

![Chestplates](/assets/images/thermal-foundation-2/chestplates.gif){:style="height: 128px"}


**[Chestplates](https://minecraft.gamepedia.com/Chestplate)** are a type of
[armor](https://minecraft.gamepedia.com/Armor) in vanilla Minecraft. [Thermal
Foundation](/docs/1.12/thermal-foundation-2/) adds a set of chestplates made of various
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
