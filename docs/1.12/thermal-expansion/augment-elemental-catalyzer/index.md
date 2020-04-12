---
title: 'Augment: Elemental Catalyzer'
image:
- alt: Elemental catalyzer augment
  file: thermal-expansion-5/augment-dynamo-reactant-elemental.png
redirect_from:
- /docs/augment-elemental-catalyzer/
- /docs/thermal-expansion/augment-elemental-catalyzer/
- /docs/thermal-expansion-5/augment-elemental-catalyzer/
- /docs/1.12/thermal-expansion-5/augment-elemental-catalyzer/
recipes:
  crafting:
  - te-1-12-augment-dynamo-reactant-elemental
---

An **elemental catalyzer** is an [augment](../augments/) that increases the
amount of [Redstone Flux](/docs/redstone-flux/) a [reactant
dynamo](../reactant-dynamo/) generates from
[reactions](../reactant-dynamo/#reactions) between elemental fluids and
dusts.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
An elemental catalyzer can be installed in the Augmentation tab in a [reactant
dynamo](../reactant-dynamo/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
An installed elemental catalyzer quintuples the maximum power output of a
[reactant dynamo](../reactant-dynamo/), and increases the amount of [Redstone
Flux](/docs/redstone-flux/) it generates from each
[reaction](../reactant-dynamo/#reactions) by 25%. However, the dynamo can
only generate energy from elemental reactions, like between [blazing
pyrotheum](../../thermal-foundation/blazing-pyrotheum/) and [cryotheum
dust](../../thermal-foundation/cryotheum-dust/).

If an elemental catalyzer is installed together with other augments that affect
the amount of energy generated from each unit of fuel, their energy
increase/decrease percentages are added together before being applied to the
amount of energy.
