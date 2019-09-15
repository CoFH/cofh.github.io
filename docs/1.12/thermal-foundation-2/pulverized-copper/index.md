---
title: Pulverized Copper
nav: thermal-foundation-2
redirect_from:
- /docs/thermal-foundation/items/materials/dusts/pulverized-copper/
- /docs/pulverized-copper/
- /docs/thermal-foundation/pulverized-copper/
- /docs/thermal-foundation-2/pulverized-copper/
recipes:
  crafting:
  - tf2-petrotheum-ingot-copper
  - tf2-petrotheum-ore-copper
  pulverizer:
  - dust-copper
  - ore-processing-copper
  centrifuge:
  - dust-bronze
  - dust-constantan
  - dust-signalum
usage-recipes:
  crafting:
  - tf2-pyrotheum-dust-copper
  - tf2-dust-bronze
  - tf2-dust-constantan
  - tf2-dust-signalum
  - tf2-hardened-glass-copper
  smelting:
  - tf2-ingot-copper-from-dust
  smelter:
  - dust-smelting-copper
  - ingot-bronze-from-dust-copper-and-dust-tin
  - ingot-bronze-from-dust-copper-and-ingot-tin
  - ingot-constantan-from-dust-copper-and-dust-nickel
  - ingot-constantan-from-dust-copper-and-ingot-nickel
  - hardened-glass-copper
---

![Pulverized copper](/assets/images/thermal-foundation-2/dust-copper.png){:style="height: 128px"}


**Pulverized copper** is a raw material. It is the dust form of
[copper](/docs/1.12/thermal-foundation-2/copper-ingot/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='pulverizer-te5' recipes=page.recipes.pulverizer no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='centrifuge-te5' recipes=page.recipes.centrifuge no-result=true %}

### Smashing
When [copper ore](/docs/1.12/thermal-foundation-2/copper-ore/) is broken using a
[Smashing](/docs/1.12/cofh-core-4/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized copper are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
