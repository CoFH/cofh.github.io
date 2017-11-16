---
title: 'Augment: Isentropic Reservoir'
nav: thermal-expansion
image:
- alt: Isentropic reservoir augment
  file: thermal-expansion/augment-dynamo-magmatic-coolant.png
recipes:
  crafting:
    - augment-dynamo-magmatic-coolant
---

An **isentropic reservoir** is an [augment](/docs/augments/) that increases the
amount of [Redstone Flux](/docs/redstone-flux/) a [magmatic
dynamo](/docs/magmatic-dynamo/) generates by making it consume
[coolant](/docs/coolants/) as well as fuel.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
An isentropic reservoir can be installed in the Augmentation tab in a [magmatic
dynamo](/docs/magmatic-dynamo/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
An installed isentropic reservoir quadruples the maximum power output of a
[magmatic dynamo](/docs/magmatic-dynamo/), and increases the amount of [Redstone
Flux](/docs/redstone-flux/) it generates from each unit of fuel by 25%. However,
the dynamo requires [coolant](/docs/coolants/) as well as fuel to generate
energy.

Coolant, like fuel, is consumed in batches of 100 mB. Every batch of coolant can
be used to generate a certain amount of energy; this amount is equal to the
[thermal capacity](/docs/coolants/#usage) of the used coolant.

If an isentropic reservoir is installed together with other augments that affect
the amount of energy generated from each unit of fuel, their energy
increase/decrease percentages are added together before being applied to the
amount of energy.
