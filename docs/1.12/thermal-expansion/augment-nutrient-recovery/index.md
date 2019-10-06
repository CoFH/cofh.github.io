---
title: 'Augment: Nutrient Recovery'
image:
- alt: Nutrient recovery augment
  file: thermal-expansion-5/augment-machine-insolator-fertilizer.png
redirect_from:
- /docs/augment-nutrient-recovery/
- /docs/thermal-expansion/augment-nutrient-recovery/
- /docs/thermal-expansion-5/augment-nutrient-recovery/
- /docs/1.12/thermal-expansion-5/augment-nutrient-recovery/
recipes:
  crafting:
  - te5-augment-machine-insolator-fertilizer
---

A **nutrient recovery** [augment](/docs/1.12/thermal-expansion/augments/) provides a chance for a
[phytogenic insolator](/docs/1.12/thermal-expansion/phytogenic-insolator/) to not consume fertilizer
([Phyto-Gro](/docs/1.12/thermal-foundation/phyto-gro/)).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A nutrient recovery augment can be installed in the Augmentation tab in a
[phytogenic insolator](/docs/1.12/thermal-expansion/phytogenic-insolator/)'s GUI. It can be installed
multiple times, stacking its effects.

### Effects
Installed nutrient recovery augments provide a chance for a [phytogenic
insolator](/docs/1.12/thermal-expansion/phytogenic-insolator/) to not consume a fertilizer item after
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
