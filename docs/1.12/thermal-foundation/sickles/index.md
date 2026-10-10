---
title: Sickles
redirect_from:
- /docs/thermal-foundation/equipment/sickles/
- /docs/thermal-foundation/equipment/tools/sickles/
- /docs/sickles/
- /docs/tf-sickles/
- /docs/thermal-foundation/sickles/
- /docs/thermal-foundation-2/sickles/
- /docs/1.12/thermal-foundation-2/sickles/
recipes:
  crafting:
  - tf-1-12-tool-sickle-wood
  - tf-1-12-tool-sickle-stone
  - tf-1-12-tool-sickle-iron
  - tf-1-12-tool-sickle-gold
  - tf-1-12-tool-sickle-diamond
  - tf-1-12-tool-sickle-copper
  - tf-1-12-tool-sickle-tin
  - tf-1-12-tool-sickle-silver
  - tf-1-12-tool-sickle-lead
  - tf-1-12-tool-sickle-aluminum
  - tf-1-12-tool-sickle-nickel
  - tf-1-12-tool-sickle-platinum
  - tf-1-12-tool-sickle-steel
  - tf-1-12-tool-sickle-electrum
  - tf-1-12-tool-sickle-invar
  - tf-1-12-tool-sickle-bronze
  - tf-1-12-tool-sickle-constantan
usage-recipes:
  smelter:
  - recycling-tool-sickle-iron
  - recycling-tool-sickle-gold
  - recycling-tool-sickle-copper
  - recycling-tool-sickle-tin
  - recycling-tool-sickle-silver
  - recycling-tool-sickle-lead
  - recycling-tool-sickle-aluminum
  - recycling-tool-sickle-nickel
  - recycling-tool-sickle-platinum
  - recycling-tool-sickle-steel
  - recycling-tool-sickle-electrum
  - recycling-tool-sickle-invar
  - recycling-tool-sickle-bronze
  - recycling-tool-sickle-constantan
  pulverizer:
  - recycling-tool-sickle-wood
  - recycling-tool-sickle-diamond
---

![Sickles](/assets/images/thermal-foundation-2/sickles.gif){:style="height: 128px"}


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
[cobwebs](https://minecraft.wiki/w/Cobweb). When sneaking, a sickle
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
Sickles can be enchanted with the following
[enchantments](https://minecraft.wiki/w/Enchanting):

* [Curse of Vanishing](https://minecraft.wiki/w/Curse_of_Vanishing)
* [Efficiency](https://minecraft.wiki/w/Efficiency)
* [Fortune](https://minecraft.wiki/w/Fortune)
* [Mending](https://minecraft.wiki/w/Mending)
* [Silk Touch](https://minecraft.wiki/w/Silk_Touch)
* [Unbreaking](https://minecraft.wiki/w/Unbreaking)
* [Leech](../../cofh-core/leech/)
* [Vorpal](../../cofh-core/vorpal/)
* [Soulbound](../../cofh-core/soulbound/)

### Induction Smelter ingredient
{% include recipe-table.html type='te-1-12-smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.usage-recipes.pulverizer %}
