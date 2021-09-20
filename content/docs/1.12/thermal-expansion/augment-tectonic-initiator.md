---
category: Augments
image:
- alt: Tectonic initiator augment
  file: thermal-expansion/augment-machine-pulverizer-petrotheum.gif
recipes:
  crafting-shaped:
  - te-1-12-augment-machine-pulverizer-petrotheum
subcategory: Machine
subjects:
- te-1-12-augment-machine-pulverizer-petrotheum
title: 'Augment: Tectonic Initiator'
---

A **tectonic initiator** is an [augment](../augments/) that allows for a
[pulverizer](../pulverizer/) to process
[ores](../pulverizer/#ore-processing) more efficiently using [tectonic
petrotheum](../../thermal-foundation/tectonic-petrotheum/).


Obtaining
---------

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}


Usage
-----

### Installation
A tectonic initiator can be installed in the Augmentation tab in a
[pulverizer](../pulverizer/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
A [pulverizer](../pulverizer/) with a tectonic initiator installed produces
1.5 times as much of the primary product of any
[ore](../pulverizer/#ore-processing) it processes (amounts are rounded down
when necessary). However, it consumes 100 mB of [tectonic
petrotheum](../../thermal-foundation/tectonic-petrotheum/) per ore to do so, and the amount of
energy required per operation is increased by 50%.

An installed tectonic initiator also increases the chances of a pulverizer
producing a secondary product. This effect stacks with those of any installed
[auxiliary sieves](../augment-auxiliary-sieve/).

<!--
modifiedChance = 100 - amount * 15 - 25   (minimum is 5)
multiplier = 100 / modifiedChance
-->

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Installed auxiliary sieves | Chance multiplier |
|---
| 0 | × 1.33 |
| 1 | × 1.67 |
| 2 | × 2.22 |
| 3 | × 3.33 |
| 4 | × 6.67 |
| 5 | × 20 |
| 6 | × 20 |
| 7 | × 20 |
| 8 | × 20 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

If a tectonic initiator is installed together with other augments that increase
the amount of energy required per operation, their energy increase percentages
are added together before being applied to the amount of energy.
