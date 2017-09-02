---
title: Pulverized Iron
recipes:
  crafting:
    - petrotheum-ingot-iron
    - petrotheum-ore-iron
  pulverizer:
    - dust-iron
    - ore-processing-iron
    - ore-processing-tin
    - ore-processing-aluminum
  pulverizer-petrotheum:
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
    - ingot-iron-from-dust
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

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Pulverizer
{% include recipe-table.html type='pulverizer' recipes=page.recipes.pulverizer no-result=true %}

### Pulverizer with Tectonic Initiator
{% include recipe-table.html type='pulverizer-petrotheum' recipes=page.recipes.pulverizer-petrotheum no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='centrifuge' recipes=page.recipes.centrifuge no-result=true %}


Usage
-----

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}
