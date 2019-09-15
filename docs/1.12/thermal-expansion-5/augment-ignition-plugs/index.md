---
title: 'Augment: Ignition Plugs'
nav: thermal-expansion-5
image:
- alt: Ignition plugs augment
  file: thermal-expansion-5/augment-dynamo-compression-fuel.png
redirect_from:
- /docs/augment-ignition-plugs/
- /docs/thermal-expansion/augment-ignition-plugs/
- /docs/thermal-expansion-5/augment-ignition-plugs/
recipes:
  crafting:
  - te5-augment-dynamo-compression-fuel
---

An **ignition plugs** [augment](/docs/1.12/thermal-expansion-5/augments/) increases the amount of
[Redstone Flux](/docs/redstone-flux/) a [compression
dynamo](/docs/1.12/thermal-expansion-5/compression-dynamo/) generates using [refined
fuel](/docs/1.12/thermal-foundation-2/refined-fuel/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
An ignition plugs augment can be installed in the Augmentation tab in a
[compression dynamo](/docs/1.12/thermal-expansion-5/compression-dynamo/)'s GUI. It is a specialization
that cannot be installed together with other specialization augments.

### Effects
An installed ignition plugs augment quadruples the maximum power output of a
[compression dynamo](/docs/1.12/thermal-expansion-5/compression-dynamo/), and increases the amount of
[Redstone Flux](/docs/redstone-flux/) it generates from each unit of fuel by
50%. However, the dynamo can only generate energy using [refined
fuel](/docs/1.12/thermal-foundation-2/refined-fuel/).

If ignition plugs are installed together with other augments that affect the
amount of energy generated from each unit of fuel, their energy
increase/decrease percentages are added together before being applied to the
amount of energy.
