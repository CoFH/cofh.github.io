---
title: Coal Coke
nav: thermal-foundation-2
redirect_from:
- /docs/thermal-foundation/items/materials/other/coal-coke/
- /docs/coal-coke/
- /docs/thermal-foundation/coal-coke/
recipes:
  crafting:
  - tf2-coal-coke-from-block
  redstone-furnace-pyrolysis:
  - coal-coke
usage-recipes:
  crafting:
  - tf2-storage-block-coal-coke
  smelter:
  - ingot-steel-from-dust-iron-and-coal-coke
  - ingot-steel-from-ingot-iron-and-coal-coke
---

![Coal coke](/assets/images/thermal-foundation-2/coal-coke.png){:style="height: 128px"}


**Coal coke** is a material obtained by processing
[coal](https://minecraft.gamepedia.com/Coal) in a [redstone
furnace](/docs/thermal-expansion-5/redstone-furnace/) with [pyrolytic
conversion](/docs/thermal-expansion-5/augment-pyrolytic-conversion/) installed. It can be used as
fuel, or as an ingredient to produce [steel](/docs/thermal-foundation-2/steel-ingot/).


Obtaining
---------

### Redstone Furnace with Pyrolytic Conversion
{% include recipe-table.html type='redstone-furnace-te5-pyrolysis' recipes=page.recipes.redstone-furnace-pyrolysis no-result=true %}

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
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
