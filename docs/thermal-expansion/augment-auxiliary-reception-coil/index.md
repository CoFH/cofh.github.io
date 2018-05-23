---
title: 'Augment: Auxiliary Reception Coil'
nav: thermal-expansion
image:
  - alt: Auxiliary reception coil augment
    file: thermal-expansion/augment-machine-power.png
redirect_from:
  - /docs/thermal-expansion/augments/machine-processing-speed/
  - /docs/augment-auxiliary-reception-coil/
recipes:
  crafting:
    - te5-augment-machine-power
---

An **auxiliary reception coil** is an [augment](/docs/thermal-expansion/augments/) that increases
the maximum power usage of a [machine](/docs/thermal-expansion/machines/), thereby increasing its
processing speed.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
An auxiliary reception coil can be installed in the Augmentation tab in a
[machine](/docs/thermal-expansion/machines/)'s GUI. It can be installed multiple times, stacking
its effects.

### Effects
Installed auxiliary reception coils increase a [machine](/docs/thermal-expansion/machines/)'s
maximum power usage, thereby increasing its processing speed. However, they also
increase the amount of energy required per operation.

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Installed amount | Max. power usage multiplier | Energy increase |
|---
| 1 | × 2 | + 15% |
| 2 | × 3 | + 30% |
| 3 | × 4 | + 45% |
| 4 | × 5 | + 60% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

If auxiliary reception coils are installed together with other augments that
increase the amount of energy required per operation, their energy increase
percentages are added together before being applied to the amount of energy.
