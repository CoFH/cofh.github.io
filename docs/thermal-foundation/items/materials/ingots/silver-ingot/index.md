---
title: Silver Ingot
redirect_from:
  - /docs/thermal-foundation/base-metals/silver/
  - /docs/thermal-foundation/metals-and-alloys/silver/
recipes:
  smelting:
    - ore-processing-silver
    - ingot-silver-from-dust
  crafting:
    - pyrotheum-ore-silver
    - petrotheum-pyrotheum-ore-silver
    - pyrotheum-dust-silver
    - ingot-silver-from-nuggets
    - ingot-silver-from-block
  redstone-furnace-ore:
    - ore-processing-silver
  smelter:
    - ore-processing-sand-silver
    - ore-processing-rich-slag-silver
    - ore-processing-cinnabar-silver
    - ore-processing-cinnabar-lead
    - dust-smelting-silver
    - recycling-axe-silver
    - recycling-bow-silver
    - recycling-fishing-rod-silver
    - recycling-hammer-silver
    - recycling-hoe-silver
    - recycling-pickaxe-silver
    - recycling-shears-silver
    - recycling-shield-silver
    - recycling-shovel-silver
    - recycling-sickle-silver
    - recycling-sword-silver
    - recycling-helmet-silver
    - recycling-chestplate-silver
    - recycling-leggings-silver
    - recycling-boots-silver
  smelter-pyrotheum:
    - ore-processing-sand-silver
    - ore-processing-rich-slag-silver
    - ore-processing-cinnabar-silver
    - ore-processing-cinnabar-lead
usage-recipes:
  crafting:
    - petrotheum-ingot-silver
    - nugget-silver
    - gear-silver
    - storage-block-silver
    - redstone-coil-silver
    - augment-dynamo-power
    - axe-silver
    - bow-silver
    - fishing-rod-silver
    - hammer-silver
    - hoe-silver
    - pickaxe-silver
    - shears-silver
    - shield-silver
    - shovel-silver
    - sickle-silver
    - sword-silver
    - helmet-silver
    - chestplate-silver
    - leggings-silver
    - boots-silver
  pulverizer:
    - dust-silver
  smelter:
    - ingot-electrum-from-dust-gold-and-ingot-silver
    - ingot-electrum-from-ingot-gold-and-ingot-silver
  compactor-plate:
    - plate-silver-from-ingot
  compactor-mint:
    - coin-silver-from-ingot
---

![Silver ingot](/assets/images/thermal-foundation/ingot-silver.png){:style="height: 128px"}


**Silver ingots** are raw materials obtained from [silver
ore](/docs/thermal-foundation/world/ores/silver-ore/) and [lead
ore](/docs/thermal-foundation/world/ores/lead-ore/).


Obtaining
---------

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

### Induction Smelter ingredient
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}

### Compactor ingredient
{% include recipe-table.html type='compactor-plate' recipes=page.usage-recipes.compactor-plate %}

### Compactor with Numismatic Press ingredient
{% include recipe-table.html type='compactor-mint' recipes=page.usage-recipes.compactor-mint %}
