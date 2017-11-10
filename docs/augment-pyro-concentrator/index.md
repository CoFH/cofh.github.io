---
title: 'Augment: Pyro-Concentrator'
nav: thermal-expansion
image:
  - alt: Pyro-concentrator augment
    file: thermal-expansion/augment-machine-smelter-pyrotheum.gif
recipes:
  crafting:
    - augment-machine-smelter-pyrotheum
---

A **pyro-concentrator** is an [augment](/docs/augments/) that allows for an
[induction smelter](/docs/induction-smelter/) to process
[ores](/docs/induction-smelter/#ore-processing) more efficiently using [blazing
pyrotheum](/docs/blazing-pyrotheum/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A pyro-concentrator can be installed in the Augmentation tab in an [induction
smelter](/docs/induction-smelter/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
An [induction smelter](/docs/induction-smelter/) with a pyro-concentrator
installed produces one extra unit of the primary product of any
[ore](/docs/induction-smelter/#ore-processing) it processes. However, it
consumes 100 mB of [blazing pyrotheum](/docs/blazing-pyrotheum/) per ore to do
so, and the amount of energy required per operation is increased by 50%.

An installed pyro-concentrator also increases the chances of an induction smelter
producing a secondary product. This effect stacks with those of any installed
[auxiliary sieves](/docs/augment-auxiliary-sieve/).

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

If a pyro-concentrator is installed together with other augments that increase
the amount of energy required per operation, their energy increase percentages
are added together before being applied to the amount of energy.
