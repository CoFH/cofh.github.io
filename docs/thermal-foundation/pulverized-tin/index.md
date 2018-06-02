---
title: Pulverized Tin
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/items/materials/dusts/pulverized-tin/
  - /docs/pulverized-tin/
recipes:
  crafting:
    - tf2-petrotheum-ingot-tin
    - tf2-petrotheum-ore-tin
  pulverizer:
    - dust-tin
    - ore-processing-tin
  centrifuge:
    - dust-bronze
    - dust-lumium
usage-recipes:
  crafting:
    - tf2-pyrotheum-dust-tin
    - tf2-dust-bronze
    - tf2-dust-lumium
  smelting:
    - tf2-ingot-tin-from-dust
  smelter:
    - dust-smelting-tin
    - ingot-bronze-from-dust-copper-and-dust-tin
    - ingot-bronze-from-ingot-copper-and-dust-tin
    - hardened-glass-tin
---

![Pulverized tin](/assets/images/thermal-foundation/dust-tin.png){:style="height: 128px"}


**Pulverized tin** is a raw material. It is the dust form of
[tin](/docs/thermal-foundation/tin-ingot/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='pulverizer-te5' recipes=page.recipes.pulverizer no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='centrifuge-te5' recipes=page.recipes.centrifuge no-result=true %}

### Smashing
When [tin ore](/docs/thermal-foundation/tin-ore/) is broken using a
[Smashing](/docs/cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized tin are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
