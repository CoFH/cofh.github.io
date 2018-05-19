---
title: Sickles (Thermal Foundation)
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/equipment/sickles/
  - /docs/thermal-foundation/equipment/tools/sickles/
  - /docs/sickles/
  - /docs/tf-sickles/
recipes:
  crafting:
    - sickle-wood
    - sickle-stone
    - sickle-iron
    - sickle-gold
    - sickle-diamond
    - sickle-copper
    - sickle-tin
    - sickle-silver
    - sickle-lead
    - sickle-aluminum
    - sickle-nickel
    - sickle-platinum
    - sickle-steel
    - sickle-electrum
    - sickle-invar
    - sickle-bronze
    - sickle-constantan
usage-recipes:
  smelter:
    - recycling-sickle-iron
    - recycling-sickle-gold
    - recycling-sickle-copper
    - recycling-sickle-tin
    - recycling-sickle-silver
    - recycling-sickle-lead
    - recycling-sickle-aluminum
    - recycling-sickle-nickel
    - recycling-sickle-platinum
    - recycling-sickle-steel
    - recycling-sickle-electrum
    - recycling-sickle-invar
    - recycling-sickle-bronze
    - recycling-sickle-constantan
  pulverizer:
    - recycling-sickle-wood
    - recycling-sickle-diamond
---

![Sickles](/assets/images/thermal-foundation/sickles.gif){:style="height: 128px"}


**Sickles** are tools that can be used to break large amounts of plant-like
blocks at once. They are especially useful for harvesting crops quickly.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting with-note=true %}


Usage
-----

When a plant-like block is broken with a sickle, up to 49 plant-like blocks in a
7x7 area around it are broken as well. This also works on
[cobwebs](https://minecraft.gamepedia.com/Cobweb). When sneaking, a sickle
breaks only one block at a time.

Sickles use 1 durability for every individual block broken.

### Comparison
{% comment %}
uses = mat.maxUses * 4
{% endcomment %}

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Uses | Attack speed | Attack damage | Enchantability |
|---
| Wood | 236 | 1.4 | 3.5 | 15 |
| Stone | 524 | 1.4 | 4.5 | 5 |
| Iron | 1,000 | 1.4 | 5.5 | 14 |
| Gold | 128 | 1.4 | 3.5 | 22 |
| Diamond | 6,244 | 1.4 | 6.5 | 10 |
|
| Copper | 700 | 1.4 | 4.5 | 7 |
| Tin | 600 | 1.4 | 4.5 | 7 |
| Silver | 300 | 1.4 | 4.5 | 25 |
| Lead | 400 | 1.4 | 4.5 | 9 |
| Aluminum | 900 | 1.4 | 4.5 | 14 |
| Nickel | 1,200 | 1.4 | 6 | 18 |
| Platinum | 5,600 | 1.4 | 7 | 16 |
| Steel | 1,600 | 1.4 | 6 | 10 |
| Electrum | 400 | 1.4 | 4 | 30 |
| Invar | 1,700 | 1.4 | 6 | 12 |
| Bronze | 1,300 | 1.4 | 5.5 | 10 |
| Constantan | 1,100 | 1.4 | 5 | 12 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Enchantments
Sickles can be enchanted with [Leech](/docs/leech/) and [Vorpal](/docs/vorpal/).

### Induction Smelter ingredient
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer' recipes=page.usage-recipes.pulverizer %}
