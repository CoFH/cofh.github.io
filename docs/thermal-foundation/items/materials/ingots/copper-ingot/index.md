---
title: Copper Ingot
redirect_from:
  - /docs/thermal-foundation/base-metals/copper/
  - /docs/thermal-foundation/metals-and-alloys/copper/
recipes:
  smelting:
    - ore-processing-copper
    - ingot-copper-from-dust
  crafting:
    - pyrotheum-ore-copper
    - petrotheum-pyrotheum-ore-copper
    - pyrotheum-dust-copper
    - ingot-copper-from-nuggets
    - ingot-copper-from-block
  redstone-furnace-ore:
    - ore-processing-copper
  smelter:
    - ore-processing-sand-copper
    - ore-processing-rich-slag-copper
    - ore-processing-cinnabar-copper
    - dust-smelting-copper
    - recycling-axe-copper
    - recycling-bow-copper
    - recycling-fishing-rod-copper
    - recycling-hammer-copper
    - recycling-hoe-copper
    - recycling-pickaxe-copper
    - recycling-shears-copper
    - recycling-shield-copper
    - recycling-shovel-copper
    - recycling-sickle-copper
    - recycling-sword-copper
    - recycling-helmet-copper
    - recycling-chestplate-copper
    - recycling-leggings-copper
    - recycling-boots-copper
  smelter-pyrotheum:
    - ore-processing-sand-copper
    - ore-processing-rich-slag-copper
    - ore-processing-cinnabar-copper
usage-recipes:
  crafting:
    - petrotheum-ingot-copper
    - nugget-copper
    - gear-copper
    - storage-block-copper
    - multimeter
    - device-tapper
    - augment-dynamo-coil-duct
    - flux-capacitor-basic
    - portable-tank-basic
    - fluiduct-basic
    - fluiduct-basic-opaque
    - watering-can-basic
    - axe-copper
    - bow-copper
    - fishing-rod-copper
    - hammer-copper
    - hoe-copper
    - pickaxe-copper
    - shears-copper
    - shield-copper
    - shovel-copper
    - sickle-copper
    - sword-copper
    - helmet-copper
    - chestplate-copper
    - leggings-copper
    - boots-copper
  pulverizer:
    - dust-copper
  smelter:
    - ingot-bronze-from-ingot-copper-and-dust-tin
    - ingot-bronze-from-ingot-copper-and-ingot-tin
    - ingot-constantan-from-ingot-copper-and-dust-nickel
    - ingot-constantan-from-ingot-copper-and-ingot-nickel
  compactor-plate:
    - plate-copper-from-ingot
  compactor-mint:
    - coin-copper-from-ingot
---

![Copper ingot](/assets/images/thermal-foundation/ingot-copper.png){:style="height: 128px"}


**Copper ingots** are raw materials obtained from [copper
ore](/docs/thermal-foundation/world/ores/copper-ore/).


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
