---
title: 'Augment: Tectonic Initiator'
image:
- alt: Tectonic initiator augment
  file: thermal-expansion-5/augment-machine-pulverizer-petrotheum.gif
redirect_from:
- /docs/augment-tectonic-initiator/
- /docs/thermal-expansion/augment-tectonic-initiator/
- /docs/thermal-expansion-5/augment-tectonic-initiator/
- /docs/1.12/thermal-expansion-5/augment-tectonic-initiator/
recipes:
  crafting:
  - te5-augment-machine-pulverizer-petrotheum
---

A **tectonic initiator** is an [augment](/docs/1.12/thermal-expansion/augments/) that allows for a
[pulverizer](/docs/1.12/thermal-expansion/pulverizer/) to process
[ores](/docs/1.12/thermal-expansion/pulverizer/#ore-processing) more efficiently using [tectonic
petrotheum](/docs/1.12/thermal-foundation/tectonic-petrotheum/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A tectonic initiator can be installed in the Augmentation tab in a
[pulverizer](/docs/1.12/thermal-expansion/pulverizer/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
A [pulverizer](/docs/1.12/thermal-expansion/pulverizer/) with a tectonic initiator installed produces
1.5 times as much of the primary product of any
[ore](/docs/1.12/thermal-expansion/pulverizer/#ore-processing) it processes (amounts are rounded down
when necessary). However, it consumes 100 mB of [tectonic
petrotheum](/docs/1.12/thermal-foundation/tectonic-petrotheum/) per ore to do so, and the amount of
energy required per operation is increased by 50%.

An installed tectonic initiator also increases the chances of a pulverizer
producing a secondary product. This effect stacks with those of any installed
[auxiliary sieves](/docs/1.12/thermal-expansion/augment-auxiliary-sieve/).

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
