---
title: Pulverized Nickel
nav: thermal-foundation-2
redirect_from:
- /docs/thermal-foundation/items/materials/dusts/pulverized-nickel/
- /docs/pulverized-nickel/
- /docs/thermal-foundation/pulverized-nickel/
- /docs/thermal-foundation-2/pulverized-nickel/
recipes:
  crafting:
  - tf2-petrotheum-ingot-nickel
  - tf2-petrotheum-ore-nickel
  pulverizer:
  - dust-nickel
  - ore-processing-nickel
  - ore-processing-iron
  centrifuge:
  - dust-invar
  - dust-constantan
usage-recipes:
  crafting:
  - tf2-pyrotheum-dust-nickel
  - tf2-dust-invar
  - tf2-dust-constantan
  - tf2-hardened-glass-nickel
  smelting:
  - tf2-ingot-nickel-from-dust
  smelter:
  - dust-smelting-nickel
  - ingot-invar-from-dust-iron-and-dust-nickel
  - ingot-invar-from-ingot-iron-and-dust-nickel
  - ingot-constantan-from-dust-copper-and-dust-nickel
  - ingot-constantan-from-ingot-copper-and-dust-nickel
  - hardened-glass-nickel
---

![Pulverized nickel](/assets/images/thermal-foundation-2/dust-nickel.png){:style="height: 128px"}


**Pulverized nickel** is a raw material. It is the dust form of
[nickel](/docs/1.12/thermal-foundation-2/nickel-ingot/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='te5-pulverizer' recipes=page.recipes.pulverizer no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='te5-centrifuge' recipes=page.recipes.centrifuge no-result=true %}

### Smashing
When [nickel ore](/docs/1.12/thermal-foundation-2/nickel-ore/) is broken using a
[Smashing](/docs/1.12/cofh-core-4/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized nickel are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='te5-smelter' recipes=page.usage-recipes.smelter %}
