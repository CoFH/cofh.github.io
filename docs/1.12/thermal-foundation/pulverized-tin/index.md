---
title: Pulverized Tin
redirect_from:
- /docs/thermal-foundation/items/materials/dusts/pulverized-tin/
- /docs/pulverized-tin/
- /docs/thermal-foundation/pulverized-tin/
- /docs/thermal-foundation-2/pulverized-tin/
- /docs/1.12/thermal-foundation-2/pulverized-tin/
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
  - tf2-hardened-glass-tin
  smelting:
  - tf2-ingot-tin-from-dust
  smelter:
  - dust-smelting-tin
  - ingot-bronze-from-dust-copper-and-dust-tin
  - ingot-bronze-from-ingot-copper-and-dust-tin
  - hardened-glass-tin
---

![Pulverized tin](/assets/images/thermal-foundation-2/dust-tin.png){:style="height: 128px"}


**Pulverized tin** is a raw material. It is the dust form of
[tin](/docs/1.12/thermal-foundation/tin-ingot/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='te5-pulverizer' recipes=page.recipes.pulverizer no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='te5-centrifuge' recipes=page.recipes.centrifuge no-result=true %}

### Smashing
When [tin ore](/docs/1.12/thermal-foundation/tin-ore/) is broken using a
[Smashing](/docs/1.12/cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized tin are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='te5-smelter' recipes=page.usage-recipes.smelter %}
