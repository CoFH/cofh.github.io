---
title: 'Augment: Auxiliary Sieve'
nav: thermal-expansion
image:
  - alt: Auxiliary sieve augment
    file: thermal-expansion/augment-machine-secondary.png
redirect_from:
  - /docs/thermal-expansion/augments/machine-secondary-output/
recipes:
  crafting:
    - augment-machine-secondary
---

An **auxiliary sieve** is an [augment](/docs/augments/) that increases the
chances of an applicable [machine](/docs/machines/) producing a secondary
output.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
An auxiliary sieve can be installed in the Augmentation tab in a
[machine](/docs/machines/)'s GUI. It can be installed multiple times, stacking
its effects.

Auxiliary sieves can only be installed in machines that can produce secondary
outputs, like [pulverizers](/docs/pulverizer/) and [induction
smelters](/docs/induction-smelter/).

### Effects
An installed auxiliary sieve increases the chances of a
[machine](/docs/machines/) producing a secondary output. The secondary chance
increases further when multiple auxiliary sieves are installed.

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Installed amount | Chance multiplier (approx.) | Chance multiplier (exact) |
|---
| 1 | × 1.18 | × 1 3/17 |
| 2 | × 1.43 | × 1 3/7 |
| 3 | × 1.82 | × 1 9/11 |
| 4 | × 2.5 | × 2 1/2 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

For example, if a machine is processing something that has a 35% chance of
producing a secondary output, and two auxiliary sieves are installed, the chance
is multiplied by approximately 1.43, raising it to 50%.

If the chance for a secondary output is raised to more than 100%, the secondary
output is guaranteed to be produced at least once. The remainder of the chance
(e.g. 25% for a 125% chance) becomes the chance of the secondary output being
produced twice.

As a penalty, each installed auxiliary sieve increases the amount of energy
required per operation by 10% of the original amount.
