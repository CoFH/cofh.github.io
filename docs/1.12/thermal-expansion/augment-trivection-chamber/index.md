---
title: 'Augment: Trivection Chamber'
image:
- alt: Trivection chamber augment
  file: thermal-expansion-5/augment-machine-furnace-food.png
redirect_from:
- /docs/thermal-expansion/augments/redstone-furnace-specialization/
- /docs/augment-trivection-chamber/
- /docs/thermal-expansion/augment-trivection-chamber/
- /docs/thermal-expansion-5/augment-trivection-chamber/
- /docs/1.12/thermal-expansion-5/augment-trivection-chamber/
recipes:
  crafting:
  - te-1-12-augment-machine-furnace-food
---

A **trivection chamber** is an [augment](/docs/1.12/thermal-expansion/augments/) that increases the
amount of cooked [food](https://minecraft.gamepedia.com/Food) a [redstone
furnace](/docs/1.12/thermal-expansion/redstone-furnace/) produces when processing raw food.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A trivection chamber can be installed in the Augmentation tab in a [redstone
furnace](/docs/1.12/thermal-expansion/redstone-furnace/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
A [redstone furnace](/docs/1.12/thermal-expansion/redstone-furnace/) with a trivection chamber
installed produces 1.5 times as much cooked
[food](https://minecraft.gamepedia.com/Food) when processing raw food. The
output amount is rounded down when necessary, but is always at least 2, which
usually means that a single unit of raw food is processed into two units of
cooked food.

However, a redstone furnace with a trivection chamber installed cannot process
anything other than food, and the amount of energy required per operation is
increased by 50%.

If a trivection chamber is installed together with other augments that increase
the amount of energy required per operation, their energy increase percentages
are added together before being applied to the amount of energy.
