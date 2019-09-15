---
title: Pulverized Iron
nav: thermal-foundation-2
redirect_from:
- /docs/thermal-foundation/materials/pulverized-materials-and-blends/
- /docs/thermal-foundation/items/materials/dusts/pulverized-iron/
- /docs/pulverized-iron/
- /docs/thermal-foundation/pulverized-iron/
recipes:
  crafting:
  - tf2-petrotheum-ingot-iron
  - tf2-petrotheum-ore-iron
  pulverizer:
  - dust-iron
  - ore-processing-iron
  - ore-processing-tin
  - ore-processing-aluminum
  centrifuge:
  - dust-invar
usage-recipes:
  crafting:
  - tf2-pyrotheum-dust-iron
  - tf2-dust-invar
  smelting:
  - tf2-ingot-iron-from-dust
  smelter:
  - dust-smelting-iron
  - ingot-steel-from-dust-iron-and-coal-coke
  - ingot-steel-from-dust-iron-and-dust-coal
  - ingot-steel-from-dust-iron-and-dust-charcoal
  - ingot-invar-from-dust-iron-and-dust-nickel
  - ingot-invar-from-dust-iron-and-ingot-nickel
---

![Pulverized iron](/assets/images/thermal-foundation/dust-iron.png){:style="height: 128px"}


**Pulverized iron** is a raw material. It is the dust form of
[iron](https://minecraft.gamepedia.com/Iron_Ingot).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='pulverizer-te5' recipes=page.recipes.pulverizer no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='centrifuge-te5' recipes=page.recipes.centrifuge no-result=true %}

### Smashing
When [iron ore](https://minecraft.gamepedia.com/Iron_Ore) is broken using a
[Smashing](/docs/cofh-core-4/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized iron are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
