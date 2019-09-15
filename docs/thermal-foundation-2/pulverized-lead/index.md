---
title: Pulverized Lead
nav: thermal-foundation-2
redirect_from:
- /docs/thermal-foundation/items/materials/dusts/pulverized-lead/
- /docs/pulverized-lead/
- /docs/thermal-foundation/pulverized-lead/
recipes:
  crafting:
  - tf2-petrotheum-ingot-lead
  - tf2-petrotheum-ore-lead
  pulverizer:
  - dust-lead
  - ore-processing-lead
  - ore-processing-silver
  centrifuge:
  - dust-enderium
usage-recipes:
  crafting:
  - tf2-pyrotheum-dust-lead
  - tf2-dust-enderium
  - tf2-hardened-glass
  - tf2-hardened-glass-lead
  smelting:
  - tf2-ingot-lead-from-dust
  smelter:
  - dust-smelting-lead
  - hardened-glass
---

![Pulverized lead](/assets/images/thermal-foundation/dust-lead.png){:style="height: 128px"}


**Pulverized lead** is a raw material. It is the dust form of
[lead](/docs/thermal-foundation-2/lead-ingot/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='pulverizer-te5' recipes=page.recipes.pulverizer no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='centrifuge-te5' recipes=page.recipes.centrifuge no-result=true %}

### Smashing
When [lead ore](/docs/thermal-foundation-2/lead-ore/) is broken using a
[Smashing](/docs/cofh-core-4/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized lead are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
