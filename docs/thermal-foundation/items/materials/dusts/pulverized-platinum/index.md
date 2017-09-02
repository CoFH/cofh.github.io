---
title: Pulverized Platinum
recipes:
  crafting:
    - petrotheum-ingot-platinum
    - petrotheum-ore-platinum
  pulverizer:
    - dust-platinum
    - ore-processing-nickel
    - ore-processing-platinum
    - ore-processing-iridium
  pulverizer-petrotheum:
    - ore-processing-nickel
    - ore-processing-platinum
    - ore-processing-iridium
  centrifuge:
    - dust-enderium
usage-recipes:
  crafting:
    - pyrotheum-dust-platinum
    - dust-enderium
  smelting:
    - ingot-platinum-from-dust
  smelter:
    - dust-smelting-platinum
    - hardened-glass-platinum
---

![Pulverized platinum](/assets/images/thermal-foundation/dust-platinum.png){:style="height: 128px"}


**Pulverized platinum** is a raw material. It is the dust form of
[platinum](/docs/thermal-foundation/items/materials/ingots/platinum-ingot/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='pulverizer' recipes=page.recipes.pulverizer no-result=true %}

### Pulverizer with Tectonic Initiator
{% include recipe-table.html type='pulverizer-petrotheum' recipes=page.recipes.pulverizer-petrotheum no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='centrifuge' recipes=page.recipes.centrifuge no-result=true %}


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter' recipes=page.usage-recipes.smelter %}
