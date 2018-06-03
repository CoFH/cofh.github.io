---
title: Pulverized Platinum
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/items/materials/dusts/pulverized-platinum/
  - /docs/pulverized-platinum/
recipes:
  crafting:
    - tf2-petrotheum-ingot-platinum
    - tf2-petrotheum-ore-platinum
  pulverizer:
    - dust-platinum
    - ore-processing-nickel
    - ore-processing-platinum
    - ore-processing-iridium
  centrifuge:
    - dust-enderium
usage-recipes:
  crafting:
    - tf2-pyrotheum-dust-platinum
    - tf2-dust-enderium
    - tf2-hardened-glass-platinum
  smelting:
    - tf2-ingot-platinum-from-dust
  smelter:
    - dust-smelting-platinum
    - hardened-glass-platinum
---

![Pulverized platinum](/assets/images/thermal-foundation/dust-platinum.png){:style="height: 128px"}


**Pulverized platinum** is a raw material. It is the dust form of
[platinum](/docs/thermal-foundation/platinum-ingot/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='pulverizer-te5' recipes=page.recipes.pulverizer no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='centrifuge-te5' recipes=page.recipes.centrifuge no-result=true %}

### Smashing
When [platinum ore](/docs/thermal-foundation/platinum-ore/) is broken using a
[Smashing](/docs/cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized platinum are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
