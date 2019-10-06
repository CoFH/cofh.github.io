---
title: Excavators (Vanilla+ Tools)
image:
- alt: Iron excavator
  file: vanillaplus-tools/excavator-iron.png
- alt: Gold excavator
  file: vanillaplus-tools/excavator-gold.png
- alt: Diamond excavator
  file: vanillaplus-tools/excavator-diamond.png
- alt: Wooden excavator
  file: vanillaplus-tools/excavator-wood.png
- alt: Stone excavator
  file: vanillaplus-tools/excavator-stone.png
recipes:
  crafting:
  - vpt-1-12-tool-excavator-wood
  - vpt-1-12-tool-excavator-stone
  - vpt-1-12-tool-excavator-iron
  - vpt-1-12-tool-excavator-gold
  - vpt-1-12-tool-excavator-diamond
redirect_from:
- /docs/vanillaplus-tools/excavators/
---

**Excavators** are [shovel](https://minecraft.gamepedia.com/Shovel)-like tools
that can dig 9 blocks at once.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting with-note=true %}


Usage
-----

Excavators can be used to dig the same blocks as with
[shovels](https://minecraft.gamepedia.com/Shovels). When a block is broken using
an excavator, any blocks surrounding it in a 3x3 area will be broken as well if
possible. This can be temporarily disabled by sneaking.

Excavators use 1 durability for every individual block broken.

### Comparison
{% comment %}
uses = mat.maxUses * 2
{% endcomment %}

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Uses | Mining speed | Attack speed | Attack damage | Enchantability |
|---
| Wood | 118 | 2 | 1 | 2 | 15 |
| Stone | 262 | 4 | 1 | 3 | 5 |
| Iron | 500 | 6 | 1 | 4 | 14 |
| Gold | 64 | 12 | 1 | 2 | 22 |
| Diamond | 3,122 | 8 | 1 | 5 | 10 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}

### Enchantments
Excavators can receive the same enchantments that
[shovels](https://minecraft.gamepedia.com/Shovel) can.
