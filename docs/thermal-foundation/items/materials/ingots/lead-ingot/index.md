---
title: Lead Ingot
redirect_from:
  - /docs/thermal-foundation/base-metals/lead/
  - /docs/thermal-foundation/metals-and-alloys/lead/
recipes:
  smelting:
    - ore-processing-lead
    - ingot-lead-from-dust
  crafting:
    - pyrotheum-dust-lead
    - pyrotheum-ore-lead
    - petrotheum-pyrotheum-ore-lead
    - ingot-lead-from-nuggets
    - ingot-lead-from-block
  redstone-furnace-ore:
    - ore-processing-lead
  smelter:
    - ore-processing-sand-lead
    - ore-processing-rich-slag-lead
    - ore-processing-cinnabar-lead
    - ore-processing-cinnabar-silver
    - dust-smelting-lead
    - recycling-axe-lead
    - recycling-bow-lead
    - recycling-fishing-rod-lead
    - recycling-hammer-lead
    - recycling-hoe-lead
    - recycling-pickaxe-lead
    - recycling-shears-lead
    - recycling-shield-lead
    - recycling-shovel-lead
    - recycling-sickle-lead
    - recycling-sword-lead
    - recycling-helmet-lead
    - recycling-chestplate-lead
    - recycling-leggings-lead
    - recycling-boots-lead
  smelter-pyrotheum:
    - ore-processing-sand-lead
    - ore-processing-rich-slag-lead
    - ore-processing-cinnabar-lead
    - ore-processing-cinnabar-silver
usage-recipes:
  crafting:
    - petrotheum-ingot-lead
    - nugget-lead
    - gear-lead
    - storage-block-lead
    - multimeter
    - energy-cell-basic
    - flux-capacitor-basic
    - augment-dynamo-efficiency
    - augment-machine-charger-throughput
    - fluxduct-basic
    - fluiduct-basic-opaque
    - fluiduct-basic-opaque-from-transparent
    - fluiduct-hardened-opaque
    - fluiduct-hardened-opaque-from-transparent
    - fluiduct-energy-opaque-from-transparent
    - fluiduct-super-opaque-from-transparent
    - itemduct-opaque
    - itemduct-opaque-from-transparent
    - itemduct-fast-opaque-from-transparent
    - itemduct-energy-opaque-from-transparent
    - itemduct-energy-fast-opaque-from-transparent
    - structuralduct
    - viaduct-long-range
    - axe-lead
    - bow-lead
    - fishing-rod-lead
    - hammer-lead
    - hoe-lead
    - pickaxe-lead
    - shears-lead
    - shield-lead
    - shovel-lead
    - sickle-lead
    - sword-lead
    - helmet-lead
    - chestplate-lead
    - leggings-lead
    - boots-lead
  pulverizer:
    - dust-lead
  smelter:
    - hardened-glass-using-ingot
  compactor-plate:
    - plate-lead-from-ingot
  compactor-mint:
    - coin-lead-from-ingot
---

![Lead ingot](/assets/images/thermal-foundation/ingot-lead.png){:style="height: 128px"}


**Lead ingots** are raw materials.


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

### Induction Smelter
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}

### Compactor ingredient
{% include recipe-table.html type='compactor-plate' recipes=page.usage-recipes.compactor-plate %}

### Compactor with Numismatic Press ingredient
{% include recipe-table.html type='compactor-mint' recipes=page.usage-recipes.compactor-mint %}
