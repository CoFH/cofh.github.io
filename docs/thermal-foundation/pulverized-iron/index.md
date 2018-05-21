---
title: Pulverized Iron
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/materials/pulverized-materials-and-blends/
  - /docs/thermal-foundation/items/materials/dusts/pulverized-iron/
  - /docs/pulverized-iron/
recipes:
  crafting:
    - petrotheum-ingot-iron
    - petrotheum-ore-iron
  pulverizer:
    - dust-iron
    - ore-processing-iron
    - ore-processing-tin
    - ore-processing-aluminum
  centrifuge:
    - dust-invar
usage-recipes:
  crafting:
    - pyrotheum-dust-iron
    - dust-invar
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


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
