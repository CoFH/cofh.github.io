---
title: 'Augment: Auxiliary Reception Coil'
nav: thermal-expansion-5
image:
- alt: Auxiliary reception coil augment
  file: thermal-expansion-5/augment-machine-power.png
redirect_from:
- /docs/thermal-expansion/augments/machine-processing-speed/
- /docs/augment-auxiliary-reception-coil/
- /docs/thermal-expansion/augment-auxiliary-reception-coil/
recipes:
  crafting:
  - te5-augment-machine-power
---

An **auxiliary reception coil** is an [augment](/docs/thermal-expansion-5/augments/) that increases
the maximum power usage of a [machine](/docs/thermal-expansion-5/machines/), thereby increasing its
processing speed.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
An auxiliary reception coil can be installed in the Augmentation tab in a
[machine](/docs/thermal-expansion-5/machines/)'s GUI. It can be installed multiple times, stacking
its effects.

### Effects
Installed auxiliary reception coils increase a [machine](/docs/thermal-expansion-5/machines/)'s
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
