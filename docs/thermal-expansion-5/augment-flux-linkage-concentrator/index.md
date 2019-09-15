---
title: 'Augment: Flux Linkage Concentrator'
nav: thermal-expansion-5
image:
- alt: Flux linkage concentrator augment
  file: thermal-expansion/augment-machine-charger-throughput.png
redirect_from:
- /docs/augment-flux-linkage-concentrator/
- /docs/thermal-expansion/augment-flux-linkage-concentrator/
recipes:
  crafting:
  - te5-augment-machine-charger-throughput
---

A **flux linkage concentrator** is an [augment](/docs/thermal-expansion-5/augments/) that greatly
increases the charging speed of an [energetic infuser](/docs/thermal-expansion-5/energetic-infuser/)
when charging items that hold [Redstone Flux](/docs/redstone-flux/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Installation
A flux linkage concentrator can be installed in the Augmentation tab in an
[energetic infuser](/docs/thermal-expansion-5/energetic-infuser/)'s GUI. It is a specialization that
cannot be installed together with other specialization augments.

### Effects
An installed flux linkage concentrator greatly increases an [energetic
infuser](/docs/thermal-expansion-5/energetic-infuser/)'s maximum power usage when charging items
that hold [Redstone Flux](/docs/redstone-flux/), thereby greatly increasing its
charging speed. The increased maximum power usage depends on the machine's
[tier](/docs/thermal-foundation-2/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. charging rate |
|---
| Basic | 2,000 RF/t |
| Hardened | 8,000 RF/t |
| Reinforced | 18,000 RF/t |
| Signalum | 32,000 RF/t |
| Resonant / Creative | 50,000 RF/t |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}

An energetic infuser with a flux linkage concentrator installed will still be
limited by the maximum charging rate of items it charges.
