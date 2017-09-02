---
title: Pulverized Copper
recipes:
  crafting:
    - petrotheum-ingot-copper
    - petrotheum-ore-copper
  pulverizer:
    - dust-copper
    - ore-processing-copper
  pulverizer-petrotheum:
    - ore-processing-copper
  centrifuge:
    - dust-bronze
    - dust-constantan
    - dust-signalum
usage-recipes:
  crafting:
    - pyrotheum-dust-copper
    - dust-bronze
    - dust-constantan
    - dust-signalum
  smelting:
    - ingot-copper-from-dust
  smelter:
    - dust-smelting-copper
    - ingot-bronze-from-dust-copper-and-dust-tin
    - ingot-bronze-from-dust-copper-and-ingot-tin
    - ingot-constantan-from-dust-copper-and-dust-nickel
    - ingot-constantan-from-dust-copper-and-ingot-nickel
    - hardened-glass-copper
---

![Pulverized copper](/assets/images/thermal-foundation/dust-copper.png){:style="height: 128px"}


**Pulverized copper** is a raw material. It is the dust form of
[copper](/docs/thermal-foundation/items/materials/ingots/copper-ingot/).


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
