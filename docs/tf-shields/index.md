---
title: Shields (Thermal Foundation)
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/equipment/weapons/shields/
  - /docs/shields/
image:
  - alt: Stone shield
    file: thermal-foundation/shield-stone.png
  - alt: Iron shield
    file: thermal-foundation/shield-iron.png
  - alt: Gold shield
    file: thermal-foundation/shield-gold.png
  - alt: Diamond shield
    file: thermal-foundation/shield-diamond.png
  - alt: Copper shield
    file: thermal-foundation/shield-copper.png
  - alt: Tin shield
    file: thermal-foundation/shield-tin.png
  - alt: Silver shield
    file: thermal-foundation/shield-silver.png
  - alt: Lead shield
    file: thermal-foundation/shield-lead.png
  - alt: Aluminum shield
    file: thermal-foundation/shield-aluminum.png
  - alt: Nickel shield
    file: thermal-foundation/shield-nickel.png
  - alt: Platinum shield
    file: thermal-foundation/shield-platinum.png
  - alt: Steel shield
    file: thermal-foundation/shield-steel.png
  - alt: Electrum shield
    file: thermal-foundation/shield-electrum.png
  - alt: Invar shield
    file: thermal-foundation/shield-invar.png
  - alt: Bronze shield
    file: thermal-foundation/shield-bronze.png
  - alt: Constantan shield
    file: thermal-foundation/shield-constantan.png
recipes:
  crafting:
    - shield-stone
    - shield-iron
    - shield-gold
    - shield-diamond
    - shield-copper
    - shield-tin
    - shield-silver
    - shield-lead
    - shield-aluminum
    - shield-nickel
    - shield-platinum
    - shield-steel
    - shield-electrum
    - shield-invar
    - shield-bronze
    - shield-constantan
usage-recipes:
  smelter:
    - recycling-shield-iron
    - recycling-shield-gold
    - recycling-shield-copper
    - recycling-shield-tin
    - recycling-shield-silver
    - recycling-shield-lead
    - recycling-shield-aluminum
    - recycling-shield-nickel
    - recycling-shield-platinum
    - recycling-shield-steel
    - recycling-shield-electrum
    - recycling-shield-invar
    - recycling-shield-bronze
    - recycling-shield-constantan
  pulverizer:
    - recycling-shield-diamond
---

**[Shields](https://minecraft.gamepedia.com/Shield)** are weapons in vanilla
Minecraft. [Thermal Foundation](/docs/thermal-foundation/) adds a set of shields
made of various materials.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting with-note=true %}


Usage
-----

### Comparison
{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Uses | Enchantability |
|---
| Wood (vanilla) | 336 | 15 |
|
| Stone | 406 | 5 |
| Iron | 525 | 14 |
| Gold | 307 | 22 |
| Diamond | 1,836 | 10 |
|
| Copper | 450 | 6 |
| Tin | 475 | 7 |
| Silver | 475 | 20 |
| Lead | 425 | 9 |
| Aluminum | 500 | 14 |
| Nickel | 575 | 18 |
| Platinum | 1,975 | 9 |
| Steel | 775 | 10 |
| Electrum | 375 | 30 |
| Invar | 725 | 16 |
| Bronze | 775 | 15 |
| Constantan | 550 | 20 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer' recipes=page.usage-recipes.pulverizer %}
