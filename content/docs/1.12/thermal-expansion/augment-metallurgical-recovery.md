---
category: Augments
image:
- alt: Metallurgical recovery augment
  file: thermal-expansion/augment-machine-smelter-flux.png
recipes:
  crafting-shaped:
  - te-1-12-augment-machine-smelter-flux
subcategory: Machine
subjects:
- te-1-12-augment-machine-smelter-flux
title: 'Augment: Metallurgical Recovery'
---

A **metallurgical recovery** [augment](../augments/) provides a chance for an
[induction smelter](../induction-smelter/) to not consume metallurgical
fluxes like [sand](https://minecraft.gamepedia.com/Sand) and [rich
slag](../../thermal-foundation/rich-slag/).


Obtaining
---------

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}


Usage
-----

### Installation
A metallurgical recovery augment can be installed in the Augmentation tab in an
[induction smelter](../induction-smelter/)'s GUI. It can be installed
multiple times, stacking its effects.

### Effects
Installed metallurgical recovery augments provide a chance for an [induction
smelter](../induction-smelter/) to not consume a metallurgical flux after an
operation. However, they also increase the amount of energy required per
operation.

Metallurgical fluxes are items that are commonly used in smelter recipes:
[sand](https://minecraft.gamepedia.com/Sand), [soul
sand](https://minecraft.gamepedia.com/Soul_Sand), [rich slag](../../thermal-foundation/rich-slag/)
and [cinnabar](../../thermal-foundation/cinnabar/).

| Installed amount | Flux reuse chance | Energy increase |
|---|---|---|
| 1 | 15% | + 15% |
| 2 | 30% | + 30% |
| 3 | 45% | + 45% |
| 4 | 60% | + 60% |
| 5 | 75% | + 75% |
| 6 | 90% | + 90% |
| 7 | 95% | + 105% |
| 8 | 95% | + 120% |
| 9 | 95% | + 135% |


If metallurgical recovery augments are installed together with other augments
that increase the amount of energy required per operation, their energy increase
percentages are added together before being applied to the amount of energy.
