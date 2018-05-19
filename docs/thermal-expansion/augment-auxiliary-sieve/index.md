---
title: 'Augment: Auxiliary Sieve'
nav: thermal-expansion
image:
  - alt: Auxiliary sieve augment
    file: thermal-expansion/augment-machine-secondary.png
redirect_from:
  - /docs/thermal-expansion/augments/machine-secondary-output/
  - /docs/augment-auxiliary-sieve/
recipes:
  crafting:
    - augment-machine-secondary
---

An **auxiliary sieve** is an [augment](/docs/augments/) that increases the
chances of an applicable [machine](/docs/machines/) producing a secondary
product.


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
products, like [pulverizers](/docs/pulverizer/) and [induction
smelters](/docs/induction-smelter/).

### Effects
Installed auxiliary sieves increase the chances of a [machine](/docs/machines/)
producing a secondary product. However, they also increase the amount of energy
required per operation.

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Installed amount | Chance multiplier (approx.) | Chance multiplier (exact) | Energy increase |
|---
| 1 | × 1.18 | × 1 3/17 | + 10% |
| 2 | × 1.43 | × 1 3/7 | + 20% |
| 3 | × 1.82 | × 1 9/11 | + 30% |
| 4 | × 2.5 | × 2 1/2 | + 40% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

For example, if a machine is processing something that has a 35% chance of
producing a secondary product, and two auxiliary sieves are installed, the
chance is multiplied by approximately 1.43, raising it to 50%.

If the chance for a secondary product is raised to above 100%, the secondary
product is guaranteed to be produced at least once. The remainder of the chance
(e.g. 25% for a 125% chance) becomes the chance of the secondary product being
produced twice.

If auxiliary sieves are installed together with other augments that increase the
amount of energy required per operation, their energy increase percentages are
added together before being applied to the amount of energy.
