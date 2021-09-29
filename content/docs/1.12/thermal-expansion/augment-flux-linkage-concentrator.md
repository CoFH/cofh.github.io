---
category: Augments
image:
- alt: Flux linkage concentrator augment
  file: thermal-expansion/augment-machine-charger-throughput.png
recipes:
  crafting-shaped:
  - te-1-12-augment-machine-charger-throughput
subcategory: Machine
subjects:
- te-1-12-augment-machine-charger-throughput
title: 'Augment: Flux Linkage Concentrator'
---

A **flux linkage concentrator** is an [augment](../augments/) that greatly
increases the charging speed of an [energetic infuser](../energetic-infuser/)
when charging items that hold [Redstone Flux](/docs/redstone-flux/).


Obtaining
---------

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}


Usage
-----

### Installation
A flux linkage concentrator can be installed in the Augmentation tab in an
[energetic infuser](../energetic-infuser/)'s GUI. It is a specialization that
cannot be installed together with other specialization augments.

### Effects
An installed flux linkage concentrator greatly increases an [energetic
infuser](../energetic-infuser/)'s maximum power usage when charging items
that hold [Redstone Flux](/docs/redstone-flux/), thereby greatly increasing its
charging speed. The increased maximum power usage depends on the machine's
[tier](../../thermal-foundation/tiers/).

| Tier | Max. charging rate |
|---|---|
| Basic | 2,000 RF/t |
| Hardened | 8,000 RF/t |
| Reinforced | 18,000 RF/t |
| Signalum | 32,000 RF/t |
| Resonant / Creative | 50,000 RF/t |


An energetic infuser with a flux linkage concentrator installed will still be
limited by the maximum charging rate of items it charges.
