---
title: Coal Coke
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/items/materials/other/coal-coke/
  - /docs/coal-coke/
recipes:
  crafting:
    - coal-coke-from-block
  redstone-furnace-pyrolysis:
    - coal-coke
usage-recipes:
  crafting:
    - storage-block-coal-coke
  smelter:
    - ingot-steel-from-dust-iron-and-coal-coke
    - ingot-steel-from-ingot-iron-and-coal-coke
---

![Coal coke](/assets/images/thermal-foundation/coal-coke.png){:style="height: 128px"}


**Coal coke** is a material obtained by processing
[coal](https://minecraft.gamepedia.com/Coal) in a [redstone
furnace](/docs/redstone-furnace/) with [pyrolytic
conversion](/docs/augment-pyrolytic-conversion/) installed. It can be used as
fuel, or as an ingredient to produce [steel](/docs/steel-ingot/).


Obtaining
---------

### Redstone Furnace with Pyrolytic Conversion
{% include recipe-table.html type='redstone-furnace-pyrolysis' recipes=page.recipes.redstone-furnace-pyrolysis no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Fuel
When used as fuel in a [furnace](https://minecraft.gamepedia.com/Furnace), one
piece of coal coke lasts 160 seconds, which is enough to smelt up to 16 items.
It lasts twice as long as regular [coal](https://minecraft.gamepedia.com/Coal).

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}
