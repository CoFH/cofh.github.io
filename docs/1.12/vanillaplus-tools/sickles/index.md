---
title: Sickles (Vanilla+ Tools)
image:
- alt: Iron sickle
  file: vanillaplus-tools/sickle-iron.png
- alt: Gold sickle
  file: vanillaplus-tools/sickle-gold.png
- alt: Diamond sickle
  file: vanillaplus-tools/sickle-diamond.png
- alt: Wooden sickle
  file: vanillaplus-tools/sickle-wood.png
- alt: Stone sickle
  file: vanillaplus-tools/sickle-stone.png
recipes:
  crafting:
  - vpt-1-12-tool-sickle-wood
  - vpt-1-12-tool-sickle-stone
  - vpt-1-12-tool-sickle-iron
  - vpt-1-12-tool-sickle-gold
  - vpt-1-12-tool-sickle-diamond
redirect_from:
- /docs/vanillaplus-tools/sickles/
---

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
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Enchantments
Sickles can be enchanted with the following
[enchantments](https://minecraft.gamepedia.com/Enchanting):

* [Curse of Vanishing](https://minecraft.gamepedia.com/Enchanting#Curse_of_Vanishing)
* [Efficiency](https://minecraft.gamepedia.com/Enchanting#Efficiency)
* [Fortune](https://minecraft.gamepedia.com/Enchanting#Fortune)
* [Mending](https://minecraft.gamepedia.com/Enchanting#Mending)
* [Silk Touch](https://minecraft.gamepedia.com/Enchanting#Silk_Touch)
* [Unbreaking](https://minecraft.gamepedia.com/Enchanting#Unbreaking)
* [Leech](../../cofh-core/leech/)
* [Vorpal](../../cofh-core/vorpal/)
* [Soulbound](../../cofh-core/soulbound/)
