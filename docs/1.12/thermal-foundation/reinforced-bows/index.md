---
title: Reinforced Bows (Thermal Foundation)
redirect_from:
- /docs/thermal-foundation/equipment/reinforced-bows/
- /docs/thermal-foundation/equipment/bows/
- /docs/thermal-foundation/equipment/weapons/reinforced-bows/
- /docs/reinforced-bows/
- /docs/tf-reinforced-bows/
- /docs/thermal-foundation/reinforced-bows/
- /docs/thermal-foundation-2/reinforced-bows/
- /docs/1.12/thermal-foundation-2/reinforced-bows/
recipes:
  crafting:
  - tf2-weapon-bow-stone
  - tf2-weapon-bow-iron
  - tf2-weapon-bow-gold
  - tf2-weapon-bow-diamond
  - tf2-weapon-bow-copper
  - tf2-weapon-bow-tin
  - tf2-weapon-bow-silver
  - tf2-weapon-bow-lead
  - tf2-weapon-bow-aluminum
  - tf2-weapon-bow-nickel
  - tf2-weapon-bow-platinum
  - tf2-weapon-bow-steel
  - tf2-weapon-bow-electrum
  - tf2-weapon-bow-invar
  - tf2-weapon-bow-bronze
  - tf2-weapon-bow-constantan
usage-recipes:
  smelter:
  - recycling-weapon-bow-iron
  - recycling-weapon-bow-gold
  - recycling-weapon-bow-copper
  - recycling-weapon-bow-tin
  - recycling-weapon-bow-silver
  - recycling-weapon-bow-lead
  - recycling-weapon-bow-aluminum
  - recycling-weapon-bow-nickel
  - recycling-weapon-bow-platinum
  - recycling-weapon-bow-steel
  - recycling-weapon-bow-electrum
  - recycling-weapon-bow-invar
  - recycling-weapon-bow-bronze
  - recycling-weapon-bow-constantan
  pulverizer:
  - recycling-weapon-bow-diamond
---

![Reinforced Bows](/assets/images/thermal-foundation-2/bows.gif){:style="height: 128px"}


**[Bows](https://minecraft.gamepedia.com/Bow)** are weapons in vanilla
Minecraft. [Thermal Foundation](/docs/1.12/thermal-foundation/) adds a set of
**reinforced bows**, which are bows made with various materials.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting with-note=true %}


Usage
-----

### Comparison
{% comment %}
uses = mat.maxUses + 325
arrowDamage = 1 + (mat.attackDamage / 4)
arrowSpeed = 1 + (mat.efficiency / 20)
{% endcomment %}

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Uses | Arrow damage multiplier | Arrow speed multiplier | Enchantability |
|---
| Wood (vanilla) | 384 | × 1 | × 1 | 15 |
|
| Stone | 456 | × 1.25 | × 1.2 | 5 |
| Iron | 575 | × 1.5 | × 1.3 | 14 |
| Gold | 357 | × 1 | × 1.6 | 22 |
| Diamond | 1,886 | × 1.75 | × 1.4 | 10 |
|
| Copper | 500 | × 1.25 | × 1.2 | 7 |
| Tin | 475 | × 1.25 | × 1.23 | 7 |
| Silver | 400 | × 1.25 | × 1.3 | 25 |
| Lead | 425 | × 1.25 | × 1.25 | 9 |
| Aluminum | 550 | × 1.25 | × 1.5 | 14 |
| Nickel | 625 | × 1.63 | × 1.33 | 18 |
| Platinum | 1,725 | × 1.88 | × 1.45 | 16 |
| Steel | 725 | × 1.63 | × 1.33 | 10 |
| Electrum | 425 | × 1.13 | × 1.7 | 30 |
| Invar | 750 | × 1.63 | × 1.33 | 12 |
| Bronze | 650 | × 1.5 | × 1.3 | 10 |
| Constantan | 600 | × 1.38 | × 1.3 | 12 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Induction Smelter ingredient
{% include recipe-table.html type='te5-smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='te5-pulverizer' recipes=page.usage-recipes.pulverizer %}
