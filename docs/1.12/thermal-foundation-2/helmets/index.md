---
title: Helmets (Thermal Foundation)
redirect_from:
- /thermal-expansion/items/invar-armor/
- /docs/thermal-foundation/equipment/armor/
- /docs/thermal-foundation/equipment/armor/helmets/
- /docs/helmets/
- /docs/tf-helmets/
- /docs/thermal-foundation/helmets/
- /docs/thermal-foundation-2/helmets/
recipes:
  crafting:
  - tf2-armor-helmet-copper
  - tf2-armor-helmet-tin
  - tf2-armor-helmet-silver
  - tf2-armor-helmet-lead
  - tf2-armor-helmet-aluminum
  - tf2-armor-helmet-nickel
  - tf2-armor-helmet-platinum
  - tf2-armor-helmet-steel
  - tf2-armor-helmet-electrum
  - tf2-armor-helmet-invar
  - tf2-armor-helmet-bronze
  - tf2-armor-helmet-constantan
usage-recipes:
  smelter:
  - recycling-armor-helmet-copper
  - recycling-armor-helmet-tin
  - recycling-armor-helmet-silver
  - recycling-armor-helmet-lead
  - recycling-armor-helmet-aluminum
  - recycling-armor-helmet-nickel
  - recycling-armor-helmet-platinum
  - recycling-armor-helmet-steel
  - recycling-armor-helmet-electrum
  - recycling-armor-helmet-invar
  - recycling-armor-helmet-bronze
  - recycling-armor-helmet-constantan
---

![Helmets](/assets/images/thermal-foundation-2/helmets.gif){:style="height: 128px"}


**[Helmets](https://minecraft.gamepedia.com/Helmet)** are a type of
[armor](https://minecraft.gamepedia.com/Armor) in vanilla Minecraft. [Thermal
Foundation](/docs/1.12/thermal-foundation-2/) adds a set of helmets made of various
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
{% include recipe-table.html type='te5-smelter' recipes=page.usage-recipes.smelter %}
