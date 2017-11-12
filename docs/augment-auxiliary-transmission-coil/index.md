---
title: 'Augment: Auxiliary Transmission Coil'
nav: thermal-expansion
image:
- alt: Auxiliary transmission coil augment
  file: thermal-expansion/augment-dynamo-power.png
redirect_from:
  - /docs/thermal-expansion/augments/dynamo-power-output/
recipes:
  crafting:
    - augment-dynamo-power
---

An **auxiliary transmission coil** is an [augment](/docs/augments/) that
increases the maximum power output of a [dynamo](/docs/dynamos/), thereby
increasing its energy production speed.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
An auxiliary transmission coil can be installed in the Augmentation tab in a
[dynamo](/docs/dynamos/)'s GUI. It can be installed multiple times, stacking its
effects.

### Effects
Installed auxiliary transmission coils increase a [dynamo](/docs/dynamos/)'s
maximum power output, thereby increasing its energy production speed. However,
they also decrease the amount of energy generated from each unit of fuel.

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Installed amount | Max. power output multiplier | Energy decrease |
|---
| 1 | × 2 | - 10% |
| 2 | × 3 | - 20% |
| 3 | × 4 | - 30% |
| 4 | × 5 | - 40% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

If auxiliary transmission coils are installed together with other augments that
affect the amount of energy generated from each unit of fuel, their energy
increase/decrease percentages are added together before being applied to the
amount of energy.
