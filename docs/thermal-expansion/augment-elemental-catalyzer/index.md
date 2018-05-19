---
title: 'Augment: Elemental Catalyzer'
nav: thermal-expansion
image:
- alt: Elemental catalyzer augment
  file: thermal-expansion/augment-dynamo-reactant-elemental.png
redirect_from:
  - /docs/augment-elemental-catalyzer/
recipes:
  crafting:
    - augment-dynamo-reactant-elemental
---

An **elemental catalyzer** is an [augment](/docs/augments/) that increases the
amount of [Redstone Flux](/docs/redstone-flux/) a [reactant
dynamo](/docs/reactant-dynamo/) generates from
[reactions](/docs/reactant-dynamo/#reactions) between elemental fluids and
dusts.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
An elemental catalyzer can be installed in the Augmentation tab in a [reactant
dynamo](/docs/reactant-dynamo/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
An installed elemental catalyzer quintuples the maximum power output of a
[reactant dynamo](/docs/reactant-dynamo/), and increases the amount of [Redstone
Flux](/docs/redstone-flux/) it generates from each
[reaction](/docs/reactant-dynamo/#reactions) by 25%. However, the dynamo can
only generate energy from elemental reactions, like between [blazing
pyrotheum](/docs/blazing-pyrotheum/) and [cryotheum
dust](/docs/cryotheum-dust/).

If an elemental catalyzer is installed together with other augments that affect
the amount of energy generated from each unit of fuel, their energy
increase/decrease percentages are added together before being applied to the
amount of energy.
