---
title: 'Augment: Auxiliary Reception Coil'
nav: thermal-expansion
image:
  - alt: Auxiliary reception coil augment
    file: thermal-expansion/augment-machine-power.png
redirect_from:
  - /docs/thermal-expansion/augments/machine-processing-speed/
recipes:
  crafting:
    - augment-machine-power
---

An **auxiliary reception coil** is an [augment](/docs/augments/) that increases
the maximum power usage of a [machine](/docs/machines/), thereby increasing its
maximum processing speed.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
An auxiliary reception coil can be installed in the Augmentation tab in a
[machine](/docs/machines/)'s GUI. It can be installed multiple times, stacking
its effects.

### Effects
Each installed auxiliary reception coil increases a [machine](/docs/machines/)'s
maximum power usage by 1 time the base maximum power usage of the machine's
[tier](/docs/tiers/). However, it also increases the amount of energy required
per operation by 15% of the original amount.
