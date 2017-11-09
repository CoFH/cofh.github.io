---
title: 'Augment: Tectonic Initiator'
nav: thermal-expansion
image:
  - alt: Tectonic-initiator augment
    file: thermal-expansion/augment-machine-pulverizer-petrotheum.gif
recipes:
  crafting:
    - augment-machine-pulverizer-petrotheum
recipe-list:
  - ore-processing-iron
  - ore-processing-gold
  - ore-processing-copper
  - ore-processing-tin
  - ore-processing-silver
  - ore-processing-lead
  - ore-processing-aluminum
  - ore-processing-nickel
  - ore-processing-platinum
  - ore-processing-mithril
  - ore-processing-iridium
  - ore-processing-coal
  - ore-processing-lapis-lazuli
  - ore-processing-redstone
  - ore-processing-diamond
  - ore-processing-emerald
  - ore-processing-nether-quartz
  - fluid-ore-processing-oil-sand
  - fluid-ore-processing-oil-shale
  - fluid-ore-processing-redstone
  - fluid-ore-processing-glowstone
  - fluid-ore-processing-ender
---

A **tectonic initiator** is an [augment](/docs/augments/) that allows for a
[pulverizer](/docs/pulverizer/) to process ores more efficiently using [tectonic
petrotheum](/docs/tectonic-petrotheum/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A tectonic initiator can be installed in the Augmentation tab in a
[pulverizer](/docs/pulverizer/)'s GUI. It is a specialization that cannot be
installed together with other specialization augments.

### Effects
A [pulverizer](/docs/pulverizer/) with a tectonic initiator installed gains the
ability to consume [tectonic petrotheum](/docs/tectonic-petrotheum/). When
processing ores, the pulverizer only works when petrotheum is supplied.

A pulverizer with a tectonic initiator installed produces one extra unit of the
primary product of the ore it is currently processing. It consumes 100 mB of
tectonic petrotheum per ore.

An installed tectonic initiator also increases the chances of a pulverizer
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

Note that the chance increase is not applied to the secondary chances shown
below, due to how it can vary as shown above.

A tectonic initiator also increases the amount of energy required per operation
by 50%. For convenience, the energy amounts shown below are the resulting
amounts after this increase is applied. The true energy amounts are the listed
amounts divided by 1.5. When other augments are installed that increase the
amount of energy required per operation, all the energy increase percentages are
added together before being applied to the true amount of energy, including the
50% from this augment.


Recipes
-------

{% include recipe-table.html type='pulverizer-petrotheum' recipes=page.recipe-list %}
