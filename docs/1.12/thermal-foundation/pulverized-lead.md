---
category: Materials
recipes:
  centrifuge:
  - dust-enderium
  crafting-shapeless:
  - tf-1-12-petrotheum-ingot-lead
  - tf-1-12-petrotheum-ore-lead
  pulverizer:
  - dust-lead
  - ore-processing-lead
  - ore-processing-silver
show-image: false
subcategory: Dusts
subjects:
- tf-1-12-dust-lead
title: Pulverized Lead
usage-recipes:
  crafting-shapeless:
  - tf-1-12-pyrotheum-dust-lead
  - tf-1-12-dust-enderium
  - tf-1-12-hardened-glass
  - tf-1-12-hardened-glass-lead
  smelter:
  - dust-smelting-lead
  - hardened-glass
  smelting:
  - tf-1-12-ingot-lead-from-dust
---

![Pulverized lead](/assets/images/docs/1.12/thermal-foundation/dust-lead.png){:style="height: 128px"}


**Pulverized lead** is a raw material. It is the dust form of
[lead](../lead-ingot/).


Obtaining
---------

### Pulverizer
{% include docs/recipe/table/table.html recipe-type='pulverizer' recipe-ids=page.recipes.pulverizer no-result=true %}

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless no-result=true %}

### Centrifugal Separator
{% include docs/recipe/table/table.html recipe-type='centrifuge' recipe-ids=page.recipes.centrifuge no-result=true %}

### Smashing
When [lead ore](../lead-ore/) is broken using a
[Smashing](../../cofh-core/smashing/) enchanted
[pickaxe](https://minecraft.gamepedia.com/Pickaxe) or similar tool, two piles of
pulverized lead are dropped instead of the ore.


Usage
-----

### Smelting ingredient
{% include docs/recipe/table/table.html recipe-type='smelting' recipe-ids=page.usage-recipes.smelting %}

### Crafting ingredient
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}

### Induction Smelter ingredient
{% include docs/recipe/table/table.html recipe-type='smelter' recipe-ids=page.usage-recipes.smelter %}
