---
title: Pulverized Silver
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/items/materials/dusts/pulverized-silver/
recipes:
  crafting:
    - petrotheum-ingot-silver
    - petrotheum-ore-silver
  pulverizer:
    - dust-silver
    - ore-processing-silver
    - ore-processing-lead
  pulverizer-petrotheum:
    - ore-processing-silver
    - ore-processing-lead
  centrifuge:
    - dust-electrum
    - dust-signalum
    - dust-lumium
usage-recipes:
  crafting:
    - pyrotheum-dust-silver
    - dust-electrum
    - dust-signalum
    - dust-lumium
    - dust-fluxed-electrum-using-gold-and-silver
  smelting:
    - ingot-silver-from-dust
  smelter:
    - dust-smelting-silver
    - ingot-electrum-from-dust-gold-and-dust-silver
    - ingot-electrum-from-ingot-gold-and-dust-silver
    - hardened-glass-silver
---

![Pulverized silver](/assets/images/thermal-foundation/dust-silver.png){:style="height: 128px"}


**Pulverized silver** is a raw material. It is the dust form of
[silver](/docs/silver-ingot/).


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
