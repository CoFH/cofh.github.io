---
title: Platinum Ingot
redirect_from:
  - /docs/thermal-foundation/base-metals/shiny-metal/
  - /docs/thermal-foundation/base-metals/platinum/
  - /docs/thermal-foundation/metals-and-alloys/shiny-metal/
  - /docs/thermal-foundation/metals-and-alloys/platinum/
recipes:
  smelting:
    - ingot-platinum-from-dust
    - ore-processing-platinum
  crafting:
    - pyrotheum-dust-platinum
    - ingot-platinum-from-nuggets
    - ingot-platinum-from-block
    - pyrotheum-ore-platinum
    - petrotheum-pyrotheum-ore-platinum
  redstone-furnace-ore:
    - ore-processing-platinum
  smelter:
    - ore-processing-cinnabar-nickel
    - dust-smelting-platinum
    - ore-processing-sand-platinum
    - ore-processing-rich-slag-platinum
    - ore-processing-cinnabar-platinum
    - ore-processing-cinnabar-iridium
    - recycling-axe-platinum
    - recycling-bow-platinum
    - recycling-fishing-rod-platinum
    - recycling-hammer-platinum
    - recycling-hoe-platinum
    - recycling-pickaxe-platinum
    - recycling-shears-platinum
    - recycling-shield-platinum
    - recycling-shovel-platinum
    - recycling-sickle-platinum
    - recycling-sword-platinum
    - recycling-helmet-platinum
    - recycling-chestplate-platinum
    - recycling-leggings-platinum
    - recycling-boots-platinum
  smelter-pyrotheum:
    - ore-processing-cinnabar-nickel
    - ore-processing-sand-platinum
    - ore-processing-rich-slag-platinum
    - ore-processing-cinnabar-platinum
    - ore-processing-cinnabar-iridium
usage-recipes:
  crafting:
    - petrotheum-ingot-platinum
    - nugget-platinum
    - gear-platinum
    - storage-block-platinum
    - axe-platinum
    - bow-platinum
    - fishing-rod-platinum
    - hammer-platinum
    - hoe-platinum
    - pickaxe-platinum
    - shears-platinum
    - shield-platinum
    - shovel-platinum
    - sickle-platinum
    - sword-platinum
    - helmet-platinum
    - chestplate-platinum
    - leggings-platinum
    - boots-platinum
  pulverizer:
    - dust-platinum
  compactor-plate:
    - plate-platinum-from-ingot
  compactor-mint:
    - coin-platinum-from-ingot
---

![Platinum ingot](/assets/images/thermal-foundation/ingot-platinum.png){:style="height: 128px"}


**Platinum ingots** are raw materials obtained from [nickel
ore](/docs/thermal-foundation/world/ores/nickel-ore/). They can also be obtained
from [platinum ore](/docs/thermal-foundation/world/ores/platinum-ore/) and
[iridium ore](/docs/thermal-foundation/world/ores/iridium-ore/), but those ores
don't generate in the world by default.


Obtaining
---------

Platinum can be obtained by processing [nickel
ore](/docs/thermal-foundation/world/ores/nickel-ore/) in a
[pulverizer](/docs/thermal-expansion/machines/pulverizer/), or in an [induction
smelter](/docs/thermal-expansion/machines/induction-smelter/) with
[cinnabar](/docs/thermal-foundation/items/materials/other/cinnabar/).

### Smelting
{% include recipe-table.html type='smelting' recipes=page.recipes.smelting no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Redstone Furnace with Flux Anodizers
{% include recipe-table.html type='redstone-furnace-ore' recipes=page.recipes.redstone-furnace-ore no-result=true %}

### Induction Smelter
{% include recipe-table.html type='smelter' recipes=page.recipes.smelter no-result=true %}

### Induction Smelter with Pyro-Concentrator
{% include recipe-table.html type='smelter-pyrotheum' recipes=page.recipes.smelter-pyrotheum no-result=true %}


Usage
-----

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer' recipes=page.usage-recipes.pulverizer %}

### Compactor ingredient
{% include recipe-table.html type='compactor-plate' recipes=page.usage-recipes.compactor-plate %}

### Compactor with Numismatic Press ingredient
{% include recipe-table.html type='compactor-mint' recipes=page.usage-recipes.compactor-mint %}
