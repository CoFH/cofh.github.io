---
title: Nickel Ingot
redirect_from:
  - /docs/thermal-foundation/base-metals/nickel/
  - /docs/thermal-foundation/metals-and-alloys/nickel/
recipes:
  smelting:
    - ore-processing-nickel
    - ingot-nickel-from-dust
  crafting:
    - pyrotheum-ore-nickel
    - petrotheum-pyrotheum-ore-nickel
    - pyrotheum-dust-nickel
    - ingot-nickel-from-nuggets
    - ingot-nickel-from-block
  redstone-furnace-ore:
    - ore-processing-nickel
  smelter:
    - ore-processing-sand-nickel
    - ore-processing-rich-slag-nickel
    - ore-processing-cinnabar-nickel
    - ore-processing-cinnabar-iron
    - dust-smelting-nickel
    - recycling-axe-nickel
    - recycling-bow-nickel
    - recycling-fishing-rod-nickel
    - recycling-hammer-nickel
    - recycling-hoe-nickel
    - recycling-pickaxe-nickel
    - recycling-shears-nickel
    - recycling-shield-nickel
    - recycling-shovel-nickel
    - recycling-sickle-nickel
    - recycling-sword-nickel
    - recycling-helmet-nickel
    - recycling-chestplate-nickel
    - recycling-leggings-nickel
    - recycling-boots-nickel
  smelter-pyrotheum:
    - ore-processing-sand-nickel
    - ore-processing-rich-slag-nickel
    - ore-processing-cinnabar-nickel
    - ore-processing-cinnabar-iron
usage-recipes:
  crafting:
    - petrotheum-ingot-nickel
    - nugget-nickel
    - gear-nickel
    - storage-block-nickel
    - axe-nickel
    - bow-nickel
    - fishing-rod-nickel
    - hammer-nickel
    - hoe-nickel
    - pickaxe-nickel
    - shears-nickel
    - shield-nickel
    - shovel-nickel
    - sickle-nickel
    - sword-nickel
    - helmet-nickel
    - chestplate-nickel
    - leggings-nickel
    - boots-nickel
  pulverizer:
    - dust-nickel
  smelter:
    - ingot-invar-from-dust-iron-and-ingot-nickel
    - ingot-invar-from-ingot-iron-and-ingot-nickel
    - ingot-constantan-from-dust-copper-and-ingot-nickel
    - ingot-constantan-from-ingot-copper-and-ingot-nickel
  compactor-plate:
    - plate-nickel-from-ingot
  compactor-mint:
    - coin-nickel-from-ingot
---

![Nickel ingot](/assets/images/thermal-foundation/ingot-nickel.png){:style="height: 128px"}


**Nickel ingots** are raw materials obtained from [nickel
ore](/docs/thermal-foundation/world/ores/nickel-ore/) and [iron
ore](https://minecraft.gamepedia.com/Iron_Ore).


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
