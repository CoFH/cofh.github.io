---
category: Augments
image:
- alt: Auxiliary sieve augment
  file: thermal-expansion/augment-machine-secondary.png
recipes:
  crafting-shaped:
  - te-1-12-augment-machine-secondary
subcategory: Machine
subjects:
- te-1-12-augment-machine-secondary
title: 'Augment: Auxiliary Sieve'
---

An **auxiliary sieve** is an [augment](../augments/) that increases the
chances of an applicable [machine](../machines/) producing a secondary
product.


Obtaining
---------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped no-result=true %}


Usage
-----

### Installation
An auxiliary sieve can be installed in the Augmentation tab in a
[machine](../machines/)'s GUI. It can be installed multiple times, stacking
its effects.

Auxiliary sieves can only be installed in machines that can produce secondary
products, like [pulverizers](../pulverizer/) and [induction
smelters](../induction-smelter/).

### Effects
Installed auxiliary sieves increase the chances of a [machine](../machines/)
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
