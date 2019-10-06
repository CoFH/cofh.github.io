---
title: Pulverized Lead
redirect_from:
- /docs/thermal-foundation/items/materials/dusts/pulverized-lead/
- /docs/pulverized-lead/
- /docs/thermal-foundation/pulverized-lead/
- /docs/thermal-foundation-2/pulverized-lead/
- /docs/1.12/thermal-foundation-2/pulverized-lead/
recipes:
  crafting:
  - tf-1-12-petrotheum-ingot-lead
  - tf-1-12-petrotheum-ore-lead
  pulverizer:
  - dust-lead
  - ore-processing-lead
  - ore-processing-silver
  centrifuge:
  - dust-enderium
usage-recipes:
  crafting:
  - tf-1-12-pyrotheum-dust-lead
  - tf-1-12-dust-enderium
  - tf-1-12-hardened-glass
  - tf-1-12-hardened-glass-lead
  smelting:
  - tf-1-12-ingot-lead-from-dust
  smelter:
  - dust-smelting-lead
  - hardened-glass
---

![Pulverized lead](/assets/images/thermal-foundation-2/dust-lead.png){:style="height: 128px"}


**Pulverized lead** is a raw material. It is the dust form of
[lead](/docs/1.12/thermal-foundation/lead-ingot/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='te-1-12-pulverizer' recipes=page.recipes.pulverizer no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='te-1-12-centrifuge' recipes=page.recipes.centrifuge no-result=true %}

### Smashing
When [lead ore](/docs/1.12/thermal-foundation/lead-ore/) is broken using a
[Smashing](/docs/1.12/cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized lead are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='te-1-12-smelter' recipes=page.usage-recipes.smelter %}
