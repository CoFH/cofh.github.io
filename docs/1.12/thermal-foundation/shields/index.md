---
title: Shields
redirect_from:
- /docs/thermal-foundation/equipment/weapons/shields/
- /docs/shields/
- /docs/tf-shields/
- /docs/thermal-foundation/shields/
- /docs/thermal-foundation-2/shields/
- /docs/1.12/thermal-foundation-2/shields/
image:
- alt: Iron shield
  file: thermal-foundation-2/shield-iron.png
- alt: Gold shield
  file: thermal-foundation-2/shield-gold.png
- alt: Diamond shield
  file: thermal-foundation-2/shield-diamond.png
- alt: Copper shield
  file: thermal-foundation-2/shield-copper.png
- alt: Tin shield
  file: thermal-foundation-2/shield-tin.png
- alt: Silver shield
  file: thermal-foundation-2/shield-silver.png
- alt: Lead shield
  file: thermal-foundation-2/shield-lead.png
- alt: Aluminum shield
  file: thermal-foundation-2/shield-aluminum.png
- alt: Nickel shield
  file: thermal-foundation-2/shield-nickel.png
- alt: Platinum shield
  file: thermal-foundation-2/shield-platinum.png
- alt: Steel shield
  file: thermal-foundation-2/shield-steel.png
- alt: Electrum shield
  file: thermal-foundation-2/shield-electrum.png
- alt: Invar shield
  file: thermal-foundation-2/shield-invar.png
- alt: Bronze shield
  file: thermal-foundation-2/shield-bronze.png
- alt: Constantan shield
  file: thermal-foundation-2/shield-constantan.png
- alt: Stone shield
  file: thermal-foundation-2/shield-stone.png
recipes:
  crafting:
  - tf-1-12-weapon-shield-stone
  - tf-1-12-weapon-shield-iron
  - tf-1-12-weapon-shield-gold
  - tf-1-12-weapon-shield-diamond
  - tf-1-12-weapon-shield-copper
  - tf-1-12-weapon-shield-tin
  - tf-1-12-weapon-shield-silver
  - tf-1-12-weapon-shield-lead
  - tf-1-12-weapon-shield-aluminum
  - tf-1-12-weapon-shield-nickel
  - tf-1-12-weapon-shield-platinum
  - tf-1-12-weapon-shield-steel
  - tf-1-12-weapon-shield-electrum
  - tf-1-12-weapon-shield-invar
  - tf-1-12-weapon-shield-bronze
  - tf-1-12-weapon-shield-constantan
usage-recipes:
  smelter:
  - recycling-weapon-shield-iron
  - recycling-weapon-shield-gold
  - recycling-weapon-shield-copper
  - recycling-weapon-shield-tin
  - recycling-weapon-shield-silver
  - recycling-weapon-shield-lead
  - recycling-weapon-shield-aluminum
  - recycling-weapon-shield-nickel
  - recycling-weapon-shield-platinum
  - recycling-weapon-shield-steel
  - recycling-weapon-shield-electrum
  - recycling-weapon-shield-invar
  - recycling-weapon-shield-bronze
  - recycling-weapon-shield-constantan
  pulverizer:
  - recycling-weapon-shield-diamond
---

**[Shields](https://minecraft.gamepedia.com/Shield)** are weapons in vanilla
Minecraft. [Thermal Foundation](../) adds a set of shields
made of various materials.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting with-note=true %}


Usage
-----

### Comparison
{% comment %}
uses = mat.maxUses + 275
{% endcomment %}

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
| Copper | 450 | 7 |
| Tin | 425 | 7 |
| Silver | 350 | 25 |
| Lead | 375 | 9 |
| Aluminum | 500 | 14 |
| Nickel | 575 | 18 |
| Platinum | 1,675 | 16 |
| Steel | 675 | 10 |
| Electrum | 375 | 30 |
| Invar | 700 | 12 |
| Bronze | 600 | 10 |
| Constantan | 550 | 12 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Induction Smelter ingredient
{% include recipe-table.html type='te-1-12-smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.usage-recipes.pulverizer %}
