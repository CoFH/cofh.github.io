---
title: 'Augment: Tectonic Initiator'
nav: thermal-expansion
image:
  - alt: Tectonic initiator augment
    file: thermal-expansion/augment-machine-pulverizer-petrotheum.gif
redirect_from:
  - /docs/augment-tectonic-initiator/
recipes:
  crafting:
    - augment-machine-pulverizer-petrotheum
---

A **tectonic initiator** is an [augment](/docs/thermal-expansion/augments/) that allows for a
[pulverizer](/docs/thermal-expansion/pulverizer/) to process
[ores](/docs/thermal-expansion/pulverizer/#ore-processing) more efficiently using [tectonic
petrotheum](/docs/thermal-foundation/tectonic-petrotheum/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A tectonic initiator can be installed in the Augmentation tab in a
[pulverizer](/docs/thermal-expansion/pulverizer/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
A [pulverizer](/docs/thermal-expansion/pulverizer/) with a tectonic initiator installed produces
1.5 times as much of the primary product of any
[ore](/docs/thermal-expansion/pulverizer/#ore-processing) it processes (amounts are rounded down
when necessary). However, it consumes 100 mB of [tectonic
petrotheum](/docs/thermal-foundation/tectonic-petrotheum/) per ore to do so, and the amount of
energy required per operation is increased by 50%.

An installed tectonic initiator also increases the chances of a pulverizer
producing a secondary product. This effect stacks with those of any installed
[auxiliary sieves](/docs/thermal-expansion/augment-auxiliary-sieve/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Installed auxiliary sieves | Chance multiplier (approx.) | Chance multiplier (exact) |
|---
| 0 | × 1.33 | × 1 1/3 |
| 1 | × 1.67 | × 1 2/3 |
| 2 | × 2.22 | × 2 2/9 |
| 3 | × 3.33 | × 3 1/3 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

If the chance for a secondary product is raised to above 100%, the secondary
product is guaranteed to be produced at least once. The remainder of the chance
(e.g. 25% for a 125% chance) becomes the chance of the secondary product being
produced twice.

If a tectonic initiator is installed together with other augments that increase
the amount of energy required per operation, their energy increase percentages
are added together before being applied to the amount of energy.
