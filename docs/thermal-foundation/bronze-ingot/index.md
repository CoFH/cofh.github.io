---
title: Bronze Ingot
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/alloys/bronze/
  - /docs/thermal-foundation/metals-and-alloys/bronze/
  - /docs/thermal-foundation/items/materials/ingots/bronze-ingot/
  - /docs/bronze-ingot/
recipes:
  smelting:
    - ingot-bronze-from-dust
  crafting:
    - ingot-bronze-from-nuggets
    - ingot-bronze-from-block
  smelter:
    - dust-smelting-bronze
    - ingot-bronze-from-dust-copper-and-dust-tin
    - ingot-bronze-from-dust-copper-and-ingot-tin
    - ingot-bronze-from-ingot-copper-and-dust-tin
    - ingot-bronze-from-ingot-copper-and-ingot-tin
    - recycling-gear-bronze
    - recycling-plate-bronze
    - recycling-axe-bronze
    - recycling-bow-bronze
    - recycling-fishing-rod-bronze
    - recycling-hammer-bronze
    - recycling-hoe-bronze
    - recycling-pickaxe-bronze
    - recycling-shears-bronze
    - recycling-shield-bronze
    - recycling-shovel-bronze
    - recycling-sickle-bronze
    - recycling-sword-bronze
    - recycling-helmet-bronze
    - recycling-chestplate-bronze
    - recycling-leggings-bronze
    - recycling-boots-bronze
usage-recipes:
  crafting:
    - nugget-bronze
    - gear-bronze
    - gear-iron-using-bronze
    - storage-block-bronze
    - signalum-security-lock
    - machine-compactor
    - augment-machine-secondary
    - fluiduct-super
    - viaduct-frame
    - axe-bronze
    - bow-bronze
    - fishing-rod-bronze
    - hammer-bronze
    - hoe-bronze
    - pickaxe-bronze
    - shears-bronze
    - shield-bronze
    - shovel-bronze
    - sickle-bronze
    - sword-bronze
    - helmet-bronze
    - chestplate-bronze
    - leggings-bronze
    - boots-bronze
  pulverizer:
    - dust-bronze
  compactor:
    - plate-bronze
  compactor-coin:
    - coin-bronze
  compactor-gear:
    - gear-bronze
---

![Bronze ingot](/assets/images/thermal-foundation/ingot-bronze.png){:style="height: 128px"}


**Bronze ingots** are raw materials made from [copper](/docs/thermal-foundation/copper-ingot/) and
[tin](/docs/thermal-foundation/tin-ingot/).


Obtaining
---------

Bronze can be obtained by combining [copper](/docs/thermal-foundation/copper-ingot/) and
[tin](/docs/thermal-foundation/tin-ingot/), either by crafting [bronze blend](/docs/thermal-foundation/bronze-blend/)
or by using an [induction smelter](/docs/thermal-expansion/induction-smelter/).

### Smelting
{% include recipe-table.html type='smelting' recipes=page.recipes.smelting no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Induction Smelter
{% include recipe-table.html type='smelter-te5' recipes=page.recipes.smelter no-result=true %}


Usage
-----

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer-te5' recipes=page.usage-recipes.pulverizer %}

### Compactor ingredient
{% include recipe-table.html type='compactor-te5' recipes=page.usage-recipes.compactor %}

### Compactor with Numismatic Press ingredient
{% include recipe-table.html type='compactor-te5-coin' recipes=page.usage-recipes.compactor-coin %}

### Compactor with Gearworking Die ingredient
{% include recipe-table.html type='compactor-te5-gear' recipes=page.usage-recipes.compactor-gear %}
