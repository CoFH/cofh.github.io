---
title: Helmets (Thermal Foundation)
nav: thermal-foundation
redirect_from:
  - /thermal-expansion/items/invar-armor/
  - /docs/thermal-foundation/equipment/armor/
  - /docs/thermal-foundation/equipment/armor/helmets/
  - /docs/helmets/
  - /docs/tf-helmets/
recipes:
  crafting:
    - helmet-copper
    - helmet-tin
    - helmet-silver
    - helmet-lead
    - helmet-aluminum
    - helmet-nickel
    - helmet-platinum
    - helmet-steel
    - helmet-electrum
    - helmet-invar
    - helmet-bronze
    - helmet-constantan
usage-recipes:
  smelter:
    - recycling-helmet-copper
    - recycling-helmet-tin
    - recycling-helmet-silver
    - recycling-helmet-lead
    - recycling-helmet-aluminum
    - recycling-helmet-nickel
    - recycling-helmet-platinum
    - recycling-helmet-steel
    - recycling-helmet-electrum
    - recycling-helmet-invar
    - recycling-helmet-bronze
    - recycling-helmet-constantan
---

![Helmets](/assets/images/thermal-foundation/helmets.gif){:style="height: 128px"}


**[Helmets](https://minecraft.gamepedia.com/Helmet)** are a type of
[armor](https://minecraft.gamepedia.com/Armor) in vanilla Minecraft. [Thermal
Foundation](/docs/thermal-foundation/) adds a set of helmets made of various
metals.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Comparison
{% comment %}
durability = mat.durability * 11
defense = mat.reductionAmounts[3]
{% endcomment %}

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Durability | Defense | Toughness | Enchantability |
|---
| Leather | 55 | 1 | | 15 |
| Chain | 165 | 2 | | 12 |
| Iron | 165 | 2 | | 9 |
| Gold | 77 | 2 | | 25 |
| Diamond | 363 | 3 | 2 | 10 |
|
| Copper | 110 | 1 | | 8 |
| Tin | 88 | 1 | | 9 |
| Silver | 88 | 1 | | 25 |
| Lead | 132 | 3 | | 9 |
| Aluminum | 132 | 2 | | 14 |
| Nickel | 165 | 2 | | 18 |
| Platinum | 385 | 3 | 2 | 16 |
| Steel | 242 | 2 | 1 | 10 |
| Electrum | 88 | 2 | | 30 |
| Invar | 231 | 2 | 1 | 12 |
| Bronze | 198 | 2 | 1 | 10 |
| Constantan | 143 | 2 | | 12 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
