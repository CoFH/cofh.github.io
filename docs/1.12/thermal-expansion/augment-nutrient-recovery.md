---
category: Augments
image:
- alt: Nutrient recovery augment
  file: thermal-expansion/augment-machine-insolator-fertilizer.png
recipes:
  crafting-shaped:
  - te-1-12-augment-machine-insolator-fertilizer
subcategory: Machine
subjects:
- te-1-12-augment-machine-insolator-fertilizer
title: 'Augment: Nutrient Recovery'
---

A **nutrient recovery** [augment](../augments/) provides a chance for a
[phytogenic insolator](../phytogenic-insolator/) to not consume fertilizer
([Phyto-Gro](../../thermal-foundation/phyto-gro/)).


Obtaining
---------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped no-result=true %}


Usage
-----

### Installation
A nutrient recovery augment can be installed in the Augmentation tab in a
[phytogenic insolator](../phytogenic-insolator/)'s GUI. It can be installed
multiple times, stacking its effects.

### Effects
Installed nutrient recovery augments provide a chance for a [phytogenic
insolator](../phytogenic-insolator/) to not consume a fertilizer item after
an operation. However, they also increase the amount of energy required per
operation.

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Installed amount | Fertilizer reuse chance | Energy increase |
|---
| 1 | 20% | + 15% |
| 2 | 40% | + 30% |
| 3 | 60% | + 45% |
| 4 | 80% | + 60% |
| 5 | 95% | + 75% |
| 6 | 95% | + 90% |
| 7 | 95% | + 105% |
| 8 | 95% | + 120% |
| 9 | 95% | + 135% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

If nutrient recovery augments are installed together with other augments that
increase the amount of energy required per operation, their energy increase
percentages are added together before being applied to the amount of energy.
