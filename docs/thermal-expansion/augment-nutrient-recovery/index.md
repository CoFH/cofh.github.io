---
title: 'Augment: Nutrient Recovery'
nav: thermal-expansion
image:
  - alt: Nutrient recovery augment
    file: thermal-expansion/augment-machine-insolator-fertilizer.png
redirect_from:
  - /docs/augment-nutrient-recovery/
recipes:
  crafting:
    - augment-machine-insolator-fertilizer
---

A **nutrient recovery** [augment](/docs/thermal-expansion/augments/) provides a chance for a
[phytogenic insolator](/docs/thermal-expansion/phytogenic-insolator/) to not consume fertilizer
([Phyto-Gro](/docs/thermal-foundation/phyto-gro/)).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A nutrient recovery augment can be installed in the Augmentation tab in a
[phytogenic insolator](/docs/thermal-expansion/phytogenic-insolator/)'s GUI. It can be installed
multiple times, stacking its effects.

### Effects
Installed nutrient recovery augments provide a chance for a [phytogenic
insolator](/docs/thermal-expansion/phytogenic-insolator/) to not consume a fertilizer item after
an operation. However, they also increase the amount of energy required per
operation.

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Installed amount | Fertilizer reuse chance | Energy increase |
|---
| 1 | 20% | + 5% |
| 2 | 40% | + 10% |
| 3 | 60% | + 15% |
| 4 | 80% | + 20% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

If nutrient recovery augments are installed together with other augments that
increase the amount of energy required per operation, their energy increase
percentages are added together before being applied to the amount of energy.
