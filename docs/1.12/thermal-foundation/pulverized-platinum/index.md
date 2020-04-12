---
title: Pulverized Platinum
redirect_from:
- /docs/thermal-foundation/items/materials/dusts/pulverized-platinum/
- /docs/pulverized-platinum/
- /docs/thermal-foundation/pulverized-platinum/
- /docs/thermal-foundation-2/pulverized-platinum/
- /docs/1.12/thermal-foundation-2/pulverized-platinum/
recipes:
  crafting:
  - tf-1-12-petrotheum-ingot-platinum
  - tf-1-12-petrotheum-ore-platinum
  pulverizer:
  - dust-platinum
  - ore-processing-nickel
  - ore-processing-platinum
  - ore-processing-iridium
  centrifuge:
  - dust-enderium
usage-recipes:
  crafting:
  - tf-1-12-pyrotheum-dust-platinum
  - tf-1-12-dust-enderium
  - tf-1-12-hardened-glass-platinum
  smelting:
  - tf-1-12-ingot-platinum-from-dust
  smelter:
  - dust-smelting-platinum
  - hardened-glass-platinum
---

![Pulverized platinum](/assets/images/thermal-foundation-2/dust-platinum.png){:style="height: 128px"}


**Pulverized platinum** is a raw material. It is the dust form of
[platinum](../platinum-ingot/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.recipes.pulverizer no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='te-1-12-centrifuge' recipes=page.recipes.centrifuge no-result=true %}

### Smashing
When [platinum ore](../platinum-ore/) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized platinum are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='te-1-12-smelter' recipes=page.usage-recipes.smelter %}
