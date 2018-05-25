---
title: 'Augment: Pyro-Concentrator'
nav: thermal-expansion
image:
  - alt: Pyro-concentrator augment
    file: thermal-expansion/augment-machine-smelter-pyrotheum.gif
redirect_from:
  - /docs/augment-pyro-concentrator/
recipes:
  crafting:
    - te5-augment-machine-smelter-pyrotheum
---

A **pyro-concentrator** is an [augment](/docs/thermal-expansion/augments/) that allows for an
[induction smelter](/docs/thermal-expansion/induction-smelter/) to process
[ores](/docs/thermal-expansion/induction-smelter/#ore-processing) more efficiently using [blazing
pyrotheum](/docs/thermal-foundation/blazing-pyrotheum/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A pyro-concentrator can be installed in the Augmentation tab in an [induction
smelter](/docs/thermal-expansion/induction-smelter/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
An [induction smelter](/docs/thermal-expansion/induction-smelter/) with a pyro-concentrator
installed produces 1.5 times as much of the primary product of any
[ore](/docs/thermal-expansion/induction-smelter/#ore-processing) it processes. However, it
consumes 100 mB of [blazing pyrotheum](/docs/thermal-foundation/blazing-pyrotheum/) per ore to do
so, and the amount of energy required per operation is increased by 50%.

An installed pyro-concentrator also increases the chances of an induction
smelter producing a secondary product. This effect stacks with those of any
installed [auxiliary sieves](/docs/thermal-expansion/augment-auxiliary-sieve/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Installed auxiliary sieves | Chance multiplier (approx.) | Chance multiplier (exact) |
|---
| 0 | × 1.43 | × 1 3/7 |
| 1 | × 1.82 | × 1 9/11 |
| 2 | × 2.5 | × 2 1/2 |
| 3 | × 4 | × 4 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

If the chance for a secondary product is raised to above 100%, the secondary
product is guaranteed to be produced at least once. The remainder of the chance
(e.g. 25% for a 125% chance) becomes the chance of the secondary product being
produced twice.

If a pyro-concentrator is installed together with other augments that increase
the amount of energy required per operation, their energy increase percentages
are added together before being applied to the amount of energy.
