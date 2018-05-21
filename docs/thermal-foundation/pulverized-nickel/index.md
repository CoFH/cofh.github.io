---
title: Pulverized Nickel
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/items/materials/dusts/pulverized-nickel/
  - /docs/pulverized-nickel/
recipes:
  crafting:
    - petrotheum-ingot-nickel
    - petrotheum-ore-nickel
  pulverizer:
    - dust-nickel
    - ore-processing-nickel
    - ore-processing-iron
  centrifuge:
    - dust-invar
    - dust-constantan
usage-recipes:
  crafting:
    - pyrotheum-dust-nickel
    - dust-invar
    - dust-constantan
  smelting:
    - ingot-nickel-from-dust
  smelter:
    - dust-smelting-nickel
    - ingot-invar-from-dust-iron-and-dust-nickel
    - ingot-invar-from-ingot-iron-and-dust-nickel
    - ingot-constantan-from-dust-copper-and-dust-nickel
    - ingot-constantan-from-ingot-copper-and-dust-nickel
    - hardened-glass-nickel
---

![Pulverized nickel](/assets/images/thermal-foundation/dust-nickel.png){:style="height: 128px"}


**Pulverized nickel** is a raw material. It is the dust form of
[nickel](/docs/thermal-foundation/nickel-ingot/).


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
