---
title: Swords (Thermal Foundation)
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/equipment/swords/
  - /docs/thermal-foundation/equipment/weapons/swords/
  - /docs/swords/
  - /docs/tf-swords/
recipes:
  crafting:
    - sword-copper
    - sword-tin
    - sword-silver
    - sword-lead
    - sword-aluminum
    - sword-nickel
    - sword-platinum
    - sword-steel
    - sword-electrum
    - sword-invar
    - sword-bronze
    - sword-constantan
usage-recipes:
  smelter:
    - recycling-sword-copper
    - recycling-sword-tin
    - recycling-sword-silver
    - recycling-sword-lead
    - recycling-sword-aluminum
    - recycling-sword-nickel
    - recycling-sword-platinum
    - recycling-sword-steel
    - recycling-sword-electrum
    - recycling-sword-invar
    - recycling-sword-bronze
    - recycling-sword-constantan
---

![Swords](/assets/images/thermal-foundation/swords.gif){:style="height: 128px"}


**[Swords](https://minecraft.gamepedia.com/Sword)** are weapons in vanilla
Minecraft. [Thermal Foundation](/docs/thermal-foundation/) adds a set of swords
made of various metals.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Comparison
{% comment %}
uses = mat.maxUses
{% endcomment %}

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Uses | Attack speed | Attack damage | Enchantability |
|---
| Wood | 59 | 1.6 | 4 | 15 |
| Stone | 131 | 1.6 | 5 | 5 |
| Iron | 250 | 1.6 | 6 | 14 |
| Gold | 32 | 1.6 | 4 | 22 |
| Diamond | 1,561 | 1.6 | 7 | 10 |
|
| Copper | 175 | 1.6 | 5 | 7 |
| Tin | 150 | 1.6 | 5 | 7 |
| Silver | 75 | 1.6 | 5 | 25 |
| Lead | 100 | 1.6 | 5 | 9 |
| Aluminum | 225 | 1.6 | 5 | 14 |
| Nickel | 300 | 1.6 | 6.5 | 18 |
| Platinum | 1,400 | 1.6 | 7.5 | 16 |
| Steel | 400 | 1.6 | 6.5 | 10 |
| Electrum | 100 | 1.6 | 4.5 | 30 |
| Invar | 425 | 1.6 | 6.5 | 12 |
| Bronze | 325 | 1.6 | 6 | 10 |
| Constantan | 275 | 1.6 | 5.5 | 12 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
