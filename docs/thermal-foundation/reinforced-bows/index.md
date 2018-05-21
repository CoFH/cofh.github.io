---
title: Reinforced Bows (Thermal Foundation)
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/equipment/reinforced-bows/
  - /docs/thermal-foundation/equipment/bows/
  - /docs/thermal-foundation/equipment/weapons/reinforced-bows/
  - /docs/reinforced-bows/
  - /docs/tf-reinforced-bows/
recipes:
  crafting:
    - bow-stone
    - bow-iron
    - bow-gold
    - bow-diamond
    - bow-copper
    - bow-tin
    - bow-silver
    - bow-lead
    - bow-aluminum
    - bow-nickel
    - bow-platinum
    - bow-steel
    - bow-electrum
    - bow-invar
    - bow-bronze
    - bow-constantan
usage-recipes:
  smelter:
    - recycling-bow-iron
    - recycling-bow-gold
    - recycling-bow-copper
    - recycling-bow-tin
    - recycling-bow-silver
    - recycling-bow-lead
    - recycling-bow-aluminum
    - recycling-bow-nickel
    - recycling-bow-platinum
    - recycling-bow-steel
    - recycling-bow-electrum
    - recycling-bow-invar
    - recycling-bow-bronze
    - recycling-bow-constantan
  pulverizer:
    - recycling-bow-diamond
---

![Reinforced Bows](/assets/images/thermal-foundation/bows.gif){:style="height: 128px"}


**[Bows](https://minecraft.gamepedia.com/Bow)** are weapons in vanilla
Minecraft. [Thermal Foundation](/docs/thermal-foundation/) adds a set of
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
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer-te5' recipes=page.usage-recipes.pulverizer %}
