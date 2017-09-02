---
title: Tin Ingot
redirect_from:
  - /docs/thermal-foundation/base-metals/tin/
  - /docs/thermal-foundation/metals-and-alloys/tin/
recipes:
  smelting:
    - ore-processing-tin
    - ingot-tin-from-dust
  crafting:
    - pyrotheum-ore-tin
    - petrotheum-pyrotheum-ore-tin
    - pyrotheum-dust-tin
    - ingot-tin-from-nuggets
    - ingot-tin-from-block
  redstone-furnace-ore:
    - ore-processing-tin
  smelter:
    - ore-processing-sand-tin
    - ore-processing-rich-slag-tin
    - ore-processing-cinnabar-tin
    - dust-smelting-tin
    - recycling-axe-tin
    - recycling-bow-tin
    - recycling-fishing-rod-tin
    - recycling-hammer-tin
    - recycling-hoe-tin
    - recycling-pickaxe-tin
    - recycling-shears-tin
    - recycling-shield-tin
    - recycling-shovel-tin
    - recycling-sickle-tin
    - recycling-sword-tin
    - recycling-helmet-tin
    - recycling-chestplate-tin
    - recycling-leggings-tin
    - recycling-boots-tin
  smelter-pyrotheum:
    - ore-processing-sand-tin
    - ore-processing-rich-slag-tin
    - ore-processing-cinnabar-tin
usage-recipes:
  crafting:
    - petrotheum-ingot-tin
    - nugget-tin
    - gear-tin
    - storage-block-tin
    - crescent-hammer
    - flux-capacitor-hardened
    - cache-basic
    - strongbox-basic
    - satchel-basic-using-leather
    - satchel-basic-using-rockwool
    - itemduct
    - itemduct-opaque
    - axe-tin
    - bow-tin
    - fishing-rod-tin
    - hammer-tin
    - hoe-tin
    - pickaxe-tin
    - shears-tin
    - shield-tin
    - shovel-tin
    - sickle-tin
    - sword-tin
    - helmet-tin
    - chestplate-tin
    - leggings-tin
    - boots-tin
  pulverizer:
    - dust-tin
  smelter:
    - ingot-bronze-from-dust-copper-and-ingot-tin
    - ingot-bronze-from-ingot-copper-and-ingot-tin
  compactor-plate:
    - plate-tin-from-ingot
  compactor-mint:
    - coin-tin-from-ingot
---

![Tin ingot](/assets/images/thermal-foundation/ingot-tin.png){:style="height: 128px"}


**Tin ingots** are raw materials obtained from [tin
ore](/docs/thermal-foundation/world/ores/tin-ore/).


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
