---
category: Augments
image:
- alt: Auxiliary reception coil augment
  file: thermal-expansion/augment-machine-power.png
recipes:
  crafting-shaped:
  - te-1-12-augment-machine-power
subcategory: Machine
subjects:
- te-1-12-augment-machine-power
title: 'Augment: Auxiliary Reception Coil'
---

An **auxiliary reception coil** is an [augment](../augments/) that increases
the maximum power usage of a [machine](../machines/), thereby increasing its
processing speed.


Obtaining
---------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped no-result=true %}


Usage
-----

### Installation
An auxiliary reception coil can be installed in the Augmentation tab in a
[machine](../machines/)'s GUI. It can be installed multiple times, stacking
its effects.

### Effects
Installed auxiliary reception coils increase a [machine](../machines/)'s
maximum power usage, thereby increasing its processing speed. However, they also
increase the amount of energy required per operation.

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Installed amount | Max. power usage multiplier | Energy increase |
|---
| 1 | × 2 | + 10% |
| 2 | × 3 | + 20% |
| 3 | × 4 | + 30% |
| 4 | × 5 | + 40% |
| 5 | × 6 | + 50% |
| 6 | × 7 | + 60% |
| 7 | × 8 | + 70% |
| 8 | × 9 | + 80% |
| 9 | × 10 | + 90% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

If auxiliary reception coils are installed together with other augments that
increase the amount of energy required per operation, their energy increase
percentages are added together before being applied to the amount of energy.
