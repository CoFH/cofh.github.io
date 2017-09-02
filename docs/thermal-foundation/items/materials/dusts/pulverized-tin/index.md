---
title: Pulverized Tin
recipes:
  crafting:
    - petrotheum-ingot-tin
    - petrotheum-ore-tin
  pulverizer:
    - dust-tin
    - ore-processing-tin
  pulverizer-petrotheum:
    - ore-processing-tin
  centrifuge:
    - dust-bronze
    - dust-lumium
usage-recipes:
  crafting:
    - pyrotheum-dust-tin
    - dust-bronze
    - dust-lumium
  smelting:
    - ingot-tin-from-dust
  smelter:
    - dust-smelting-tin
    - ingot-bronze-from-dust-copper-and-dust-tin
    - ingot-bronze-from-ingot-copper-and-dust-tin
    - hardened-glass-tin
---

![Pulverized tin](/assets/images/thermal-foundation/dust-tin.png){:style="height: 128px"}


**Pulverized tin** is a raw material. It is the dust form of
[tin](/docs/thermal-foundation/items/materials/ingots/tin-ingot/).


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
