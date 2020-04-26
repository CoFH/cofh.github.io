---
title: Fishing Rods
image:
- alt: Iron fishing rod
  file: vanillaplus-tools/fishing-rod-iron.png
- alt: Gold fishing rod
  file: vanillaplus-tools/fishing-rod-gold.png
- alt: Diamond fishing rod
  file: vanillaplus-tools/fishing-rod-diamond.png
- alt: Stone fishing rod
  file: vanillaplus-tools/fishing-rod-stone.png
recipes:
  crafting:
  - vpt-1-12-tool-fishing-rod-stone
  - vpt-1-12-tool-fishing-rod-iron
  - vpt-1-12-tool-fishing-rod-gold
  - vpt-1-12-tool-fishing-rod-diamond
redirect_from:
- /docs/vanillaplus-tools/fishing-rods/
---

**[Fishing rods](https://minecraft.gamepedia.com/Fishing_Rod)** are tools in
vanilla Minecraft. [Vanilla+ Tools](../) adds a set of
fishing rods made of materials other than wood.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting with-note=true %}


Usage
-----

### Comparison
The lure and luck modifiers of a fishing rod make it as powerful as a regular
[fishing rod](https://minecraft.gamepedia.com/Fishing_Rod) enchanted with
[Lure](https://minecraft.gamepedia.com/Lure) and [Luck of the
Sea](https://minecraft.gamepedia.com/Luck_of_the_Sea) at those levels,
respectively.

{% comment %}
uses = mat.maxUses + 5
lureModifier = round(mat.efficiency / 3)
luckModifier = round(mat.harvestLevel / 2)
{% endcomment %}

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Uses | Lure modifier | Luck modifier | Enchantability |
|---
| Wood (vanilla) | 65 | 0 | 0 | 1 |
|
| Stone | 136 | 1 | 1 | 5 |
| Iron | 255 | 2 | 1 | 14 |
| Gold | 37 | 4 | 0 | 22 |
| Diamond | 1,566 | 3 | 2 | 10 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}
