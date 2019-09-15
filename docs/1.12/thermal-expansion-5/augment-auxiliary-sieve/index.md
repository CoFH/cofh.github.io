---
title: 'Augment: Auxiliary Sieve'
nav: thermal-expansion-5
image:
- alt: Auxiliary sieve augment
  file: thermal-expansion-5/augment-machine-secondary.png
redirect_from:
- /docs/thermal-expansion/augments/machine-secondary-output/
- /docs/augment-auxiliary-sieve/
- /docs/thermal-expansion/augment-auxiliary-sieve/
- /docs/thermal-expansion-5/augment-auxiliary-sieve/
recipes:
  crafting:
  - te5-augment-machine-secondary
---

An **auxiliary sieve** is an [augment](/docs/1.12/thermal-expansion-5/augments/) that increases the
chances of an applicable [machine](/docs/1.12/thermal-expansion-5/machines/) producing a secondary
product.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
An auxiliary sieve can be installed in the Augmentation tab in a
[machine](/docs/1.12/thermal-expansion-5/machines/)'s GUI. It can be installed multiple times, stacking
its effects.

Auxiliary sieves can only be installed in machines that can produce secondary
products, like [pulverizers](/docs/1.12/thermal-expansion-5/pulverizer/) and [induction
smelters](/docs/1.12/thermal-expansion-5/induction-smelter/).

### Effects
Installed auxiliary sieves increase the chances of a [machine](/docs/1.12/thermal-expansion-5/machines/)
producing a secondary product. However, they also increase the amount of energy
required per operation.

<!--
secondaryChance = 100 - amount * 15   (minimum is 5)
multiplier = 100 / secondaryChance
-->

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Installed amount | Chance multiplier | Energy increase |
|---
| 1 | × 1.18 | + 10% |
| 2 | × 1.43 | + 20% |
| 3 | × 1.82 | + 30% |
| 4 | × 2.5 | + 40% |
| 5 | × 4 | + 50% |
| 6 | × 10 | + 60% |
| 7 | × 20 | + 70% |
| 8 | × 20 | + 80% |
| 9 | × 20 | + 90% |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

For example, if a machine is processing something that has a 35% chance of
producing a secondary product, and two auxiliary sieves are installed, the
chance percentage is multiplied by 1.43, raising it to 50%.

If auxiliary sieves are installed together with other augments that increase the
amount of energy required per operation, their energy increase percentages are
added together before being applied to the amount of energy.
