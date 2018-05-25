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
    - tf2-ingot-bronze-from-dust
  crafting:
    - tf2-ingot-bronze-from-nuggets
    - tf2-ingot-bronze-from-block
  smelter:
    - dust-smelting-bronze
    - ingot-bronze-from-dust-copper-and-dust-tin
    - ingot-bronze-from-dust-copper-and-ingot-tin
    - ingot-bronze-from-ingot-copper-and-dust-tin
    - ingot-bronze-from-ingot-copper-and-ingot-tin
    - recycling-gear-bronze
    - recycling-plate-bronze
    - recycling-tool-pickaxe-bronze
    - recycling-tool-shovel-bronze
    - recycling-tool-axe-bronze
    - recycling-tool-hoe-bronze
    - recycling-tool-fishing-rod-bronze
    - recycling-tool-shears-bronze
    - recycling-tool-hammer-bronze
    - recycling-tool-sickle-bronze
    - recycling-weapon-sword-bronze
    - recycling-weapon-bow-bronze
    - recycling-weapon-shield-bronze
    - recycling-armor-helmet-bronze
    - recycling-armor-chestplate-bronze
    - recycling-armor-leggings-bronze
    - recycling-armor-boots-bronze
usage-recipes:
  crafting:
    - tf2-nugget-bronze
    - tf2-gear-bronze
    - tf2-gear-iron-using-bronze
    - tf2-storage-block-bronze
    - tf2-signalum-security-lock
    - te5-machine-compactor
    - te5-augment-machine-secondary
    - td2-fluiduct-super
    - td2-viaduct-frame
    - tf2-tool-pickaxe-bronze
    - tf2-tool-shovel-bronze
    - tf2-tool-axe-bronze
    - tf2-tool-hoe-bronze
    - tf2-tool-fishing-rod-bronze
    - tf2-tool-shears-bronze
    - tf2-tool-hammer-bronze
    - tf2-tool-sickle-bronze
    - tf2-weapon-sword-bronze
    - tf2-weapon-bow-bronze
    - tf2-weapon-shield-bronze
    - tf2-armor-helmet-bronze
    - tf2-armor-chestplate-bronze
    - tf2-armor-leggings-bronze
    - tf2-armor-boots-bronze
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
