---
category: Augments
image:
- alt: Monoculture cycle augment
  file: thermal-expansion/augment-machine-insolator-monoculture.gif
recipes:
  crafting-shaped:
  - te-1-12-augment-machine-insolator-monoculture
subcategory: Machine
subjects:
- te-1-12-augment-machine-insolator-monoculture
title: 'Augment: Monoculture Cycle'
---

A **monoculture cycle** [augment](../augments/) changes a [phytogenic
insolator](../phytogenic-insolator/) to not consume non-fertilizer inputs,
simplifying the automation of producing a certain plant.


Obtaining
---------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped no-result=true %}


Usage
-----

### Installation
A monoculture cycle augment can be installed in the Augmentation tab in a
[phytogenic insolator](../phytogenic-insolator/)'s GUI. It is a
specialization that cannot be installed together with other specialization
augments.

### Effects
An installed monoculture cycle augment changes a [phytogenic
insolator](../phytogenic-insolator/) so that it does not consume
non-fertilizer inputs (like plant seeds). This allows the machine to keep
producing the same plant using only fertilizer and
[water](https://minecraft.gamepedia.com/Water). The augment also provides a 10%
chance for the machine to not consume a fertilizer item after an operation.

However, the augment also increases the amount of energy required per operation
by 50%, and decreases the secondary product chance of recipes by 100%
(subtracted directly from the chance percentage).

If a monoculture cycle augment is installed together with other augments that
increase the amount of energy required per operation, their energy increase
percentages are added together before being applied to the amount of energy.
