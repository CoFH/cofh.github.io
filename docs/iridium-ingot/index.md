---
title: Iridium Ingot
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/items/materials/ingots/iridium-ingot/
recipes:
  crafting:
    - pyrotheum-ore-iridium
    - petrotheum-pyrotheum-ore-iridium
    - pyrotheum-dust-iridium
    - ingot-iridium-from-nuggets
    - ingot-iridium-from-block
  smelter:
    - ore-processing-sand-iridium
    - ore-processing-rich-slag-iridium
    - ore-processing-cinnabar-iridium
    - ore-processing-cinnabar-platinum
    - dust-smelting-iridium
  smelter-pyrotheum:
    - ore-processing-sand-iridium
    - ore-processing-rich-slag-iridium
    - ore-processing-cinnabar-iridium
    - ore-processing-cinnabar-platinum
usage-recipes:
  crafting:
    - petrotheum-ingot-iridium
    - nugget-iridium
    - gear-iridium
    - storage-block-iridium
  pulverizer:
    - dust-iridium
  compactor-plate:
    - plate-iridium-from-ingot
  compactor-mint:
    - coin-iridium-from-ingot
---

![Iridium ingot](/assets/images/thermal-foundation/ingot-iridium.png){:style="height: 128px"}


**Iridium ingots** are raw materials obtained from [iridium
ore](/docs/iridium-ore/) and [platinum ore](/docs/platinum-ore/). They are
unobtainable by default, because neither of these ores generate in the world by
default.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

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


Trivia
------

* If [Tinkers'
  Construct](https://minecraft.curseforge.com/projects/tinkers-construct) is
  installed, iridium can be molten down in a smeltery.
