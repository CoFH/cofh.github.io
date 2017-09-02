---
title: Pulverized Gold
recipes:
  crafting:
    - petrotheum-ingot-gold
    - petrotheum-ore-gold
  pulverizer:
    - dust-gold
    - ore-processing-gold
    - ore-processing-copper
    - ore-processing-mithril
  pulverizer-petrotheum:
    - ore-processing-gold
    - ore-processing-copper
    - ore-processing-mithril
  centrifuge:
    - dust-electrum
usage-recipes:
  crafting:
    - pyrotheum-dust-gold
    - dust-electrum
    - dust-fluxed-electrum-using-gold-and-silver
  smelting:
    - ingot-gold-from-dust
  smelter:
    - dust-smelting-gold
    - ingot-electrum-from-dust-gold-and-dust-silver
    - ingot-electrum-from-dust-gold-and-ingot-silver
---

![Pulverized gold](/assets/images/thermal-foundation/dust-gold.png){:style="height: 128px"}


**Pulverized gold** is a raw material. It is the dust form of
[gold](https://minecraft.gamepedia.com/Gold_Ingot).


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
