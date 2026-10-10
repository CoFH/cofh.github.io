---
title: Shears
redirect_from:
- /docs/thermal-foundation/equipment/shears/
- /docs/thermal-foundation/equipment/tools/shears/
- /docs/shears/
- /docs/tf-shears/
- /docs/thermal-foundation/shears/
- /docs/thermal-foundation-2/shears/
- /docs/1.12/thermal-foundation-2/shears/
recipes:
  crafting:
  - tf-1-12-tool-shears-wood
  - tf-1-12-tool-shears-stone
  - tf-1-12-tool-shears-gold
  - tf-1-12-tool-shears-diamond
  - tf-1-12-tool-shears-copper
  - tf-1-12-tool-shears-tin
  - tf-1-12-tool-shears-silver
  - tf-1-12-tool-shears-lead
  - tf-1-12-tool-shears-aluminum
  - tf-1-12-tool-shears-nickel
  - tf-1-12-tool-shears-platinum
  - tf-1-12-tool-shears-steel
  - tf-1-12-tool-shears-electrum
  - tf-1-12-tool-shears-invar
  - tf-1-12-tool-shears-bronze
  - tf-1-12-tool-shears-constantan
usage-recipes:
  smelter:
  - recycling-tool-shears-gold
  - recycling-tool-shears-copper
  - recycling-tool-shears-tin
  - recycling-tool-shears-silver
  - recycling-tool-shears-lead
  - recycling-tool-shears-aluminum
  - recycling-tool-shears-nickel
  - recycling-tool-shears-platinum
  - recycling-tool-shears-steel
  - recycling-tool-shears-electrum
  - recycling-tool-shears-invar
  - recycling-tool-shears-bronze
  - recycling-tool-shears-constantan
  pulverizer:
  - recycling-tool-shears-wood
  - recycling-tool-shears-diamond
---

![Shears](/assets/images/thermal-foundation-2/shears.gif){:style="height: 128px"}


**[Shears](https://minecraft.wiki/w/Shears)** are tools in vanilla
Minecraft. [Thermal Foundation](../) adds a set of shears
made of various materials.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting with-note=true %}


Usage
-----

### Comparison
{% comment %}
uses = mat.maxUses - 12
{% endcomment %}

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Material | Uses |
|---
| Iron (vanilla) | 238 |
|
| Wood | 47 |
| Stone | 119 |
| Gold | 20 |
| Diamond | 1,549 |
|
| Copper | 163 |
| Tin | 138 |
| Silver | 63 |
| Lead | 88 |
| Aluminum | 213 |
| Nickel | 288 |
| Platinum | 1,388 |
| Steel | 388 |
| Electrum | 88 |
| Invar | 413 |
| Bronze | 313 |
| Constantan | 263 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

### Induction Smelter ingredient
{% include recipe-table.html type='te-1-12-smelter' recipes=page.usage-recipes.smelter %}

### Pulverizer ingredient
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.usage-recipes.pulverizer %}
