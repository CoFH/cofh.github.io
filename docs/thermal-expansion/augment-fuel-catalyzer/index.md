---
title: 'Augment: Fuel Catalyzer'
nav: thermal-expansion
image:
- alt: Fuel catalyzer augment
  file: thermal-expansion/augment-dynamo-efficiency.gif
redirect_from:
  - /docs/thermal-expansion/augments/dynamo-fuel-efficiency/
  - /docs/augment-fuel-catalyzer/
recipes:
  crafting:
    - te5-augment-dynamo-efficiency
---

A **fuel catalyzer** is an [augment](/docs/thermal-expansion/augments/) that increases the amount
of energy a [dynamo](/docs/thermal-expansion/dynamos/) generates from each unit of fuel.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A fuel catalyzer can be installed in the Augmentation tab in a
[dynamo](/docs/thermal-expansion/dynamos/)'s GUI. It can be installed multiple times, stacking its
effects.

### Effects
Installed fuel catalyzers increase the amount of energy a
[dynamo](/docs/thermal-expansion/dynamos/) generates from each unit of fuel.

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Installed amount | Energy increase |
|---
| 1 | + 15% |
| 2 | + 30% |
| 3 | + 45% |
| 4 | + 60% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

If fuel catalyzers are installed together with other augments that affect the
amount of energy generated from each unit of fuel, their energy
increase/decrease percentages are added together before being applied to the
amount of energy.
