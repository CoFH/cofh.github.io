---
title: Pulverized Lead
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/items/materials/dusts/pulverized-lead/
  - /docs/pulverized-lead/
recipes:
  crafting:
    - petrotheum-ingot-lead
    - petrotheum-ore-lead
  pulverizer:
    - dust-lead
    - ore-processing-lead
    - ore-processing-silver
  centrifuge:
    - dust-enderium
usage-recipes:
  crafting:
    - pyrotheum-dust-lead
    - dust-enderium
  smelting:
    - ingot-lead-from-dust
  smelter:
    - dust-smelting-lead
    - hardened-glass
---

![Pulverized lead](/assets/images/thermal-foundation/dust-lead.png){:style="height: 128px"}


**Pulverized lead** is a raw material. It is the dust form of
[lead](/docs/thermal-foundation/lead-ingot/).


Obtaining
---------

### Pulverizer
{% include recipe-table.html type='pulverizer-te5' recipes=page.recipes.pulverizer no-result=true %}

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Centrifugal Separator
{% include recipe-table.html type='centrifuge-te5' recipes=page.recipes.centrifuge no-result=true %}


Usage
-----

### Smelting ingredient
{% include recipe-table.html type='smelting' recipes=page.usage-recipes.smelting %}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Induction Smelter ingredient
{% include recipe-table.html type='smelter-te5' recipes=page.usage-recipes.smelter %}
