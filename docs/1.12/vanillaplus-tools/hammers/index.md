---
title: Hammers (Vanilla+ Tools)
image:
- alt: Iron hammer
  file: vanillaplus-tools/hammer-iron.png
- alt: Gold hammer
  file: vanillaplus-tools/hammer-gold.png
- alt: Diamond hammer
  file: vanillaplus-tools/hammer-diamond.png
- alt: Wooden hammer
  file: vanillaplus-tools/hammer-wood.png
- alt: Stone hammer
  file: vanillaplus-tools/hammer-stone.png
recipes:
  crafting:
  - vpt-tool-hammer-wood
  - vpt-tool-hammer-stone
  - vpt-tool-hammer-iron
  - vpt-tool-hammer-gold
  - vpt-tool-hammer-diamond
redirect_from:
- /docs/vanillaplus-tools/hammers/
---

**Hammers** are [pickaxe](https://minecraft.gamepedia.com/Pickaxe)-like tools
that can mine 9 blocks at once.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting with-note=true %}


Usage
-----

Hammers can be used to mine the same blocks
[pickaxes](https://minecraft.gamepedia.com/Pickaxe) can mine. When a block is
mined using a hammer, any blocks surrounding it in a 3x3 area will be mined as
well if possible. This can be temporarily disabled by sneaking.

Hammers use 1 durability for every individual block mined.

### Comparison
{% comment %}
uses = mat.maxUses * 2
{% endcomment %}

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Uses | Mining speed | Harvest level | Attack speed | Attack damage | Enchantability |
|---
| Wood | 118 | 2 | 0 | 0.6 | 8 | 15 |
| Stone | 262 | 4 | 1 | 0.6 | 11 | 5 |
| Iron | 500 | 6 | 2 | 0.7 | 11 | 14 |
| Gold | 64 | 12 | 0 | 0.8 | 8 | 22 |
| Diamond | 3,122 | 8 | 3 | 0.8 | 11 | 10 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}

### Enchantments
Hammers can receive the same enchantments that
[pickaxes](https://minecraft.gamepedia.com/Pickaxe) can, including [Silk
Touch](https://minecraft.gamepedia.com/Silk_Touch) and
[Fortune](https://minecraft.gamepedia.com/Fortune).
