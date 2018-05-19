---
title: Augments
nav: thermal-expansion
redirect_from:
  - /docs/thermal-expansion/augments/augmentation/
  - /docs/thermal-expansion/tiers-and-augments/augments/
  - /docs/augments/
augments:
  machine:
    - machine-power
    - machine-secondary
    - machine-secondary-null
    - machine-furnace-food
    - machine-furnace-ore
    - machine-furnace-pyrolysis
    - machine-pulverizer-petrotheum
    - machine-sawmill-tapper
    - machine-smelter-flux
    - machine-smelter-pyrotheum
    - machine-insolator-fertilizer
    - machine-insolator-tree
    - machine-insolator-monoculture
    - machine-compactor-coin
    - machine-compactor-gear
    - machine-crucible-lava
    - machine-refinery-oil
    - machine-refinery-potion
    - machine-charger-throughput
    - machine-charger-repair
    - machine-charger-wireless
    - machine-centrifuge-mobs
    - machine-crafter-input
    - machine-crafter-tank
    - machine-brewer-reagent
    - machine-extruder-no-water
    - machine-extruder-sedimentary
  dynamo:
    - dynamo-power
    - dynamo-efficiency
    - dynamo-coil-duct
    - dynamo-throttle
    - dynamo-boiler
    - dynamo-steam-turbine
    - dynamo-magmatic-coolant
    - dynamo-compression-coolant
    - dynamo-compression-fuel
    - dynamo-reactant-elemental
    - dynamo-enervation-enchant
    - dynamo-numismatic-gem
---

**Augments** are items that can be installed in [machines](/docs/thermal-expansion/machines/) and
[dynamos](/docs/thermal-expansion/dynamos/) to improve ('augment') them in certain ways or to
change how they work.


Usage
-----

Augments can be installed in the Augmentation tab in the GUI of a
[machine](/docs/thermal-expansion/machines/) or [dynamo](/docs/thermal-expansion/dynamos/). The amount of augments
that can be installed depends on the block's [tier](/docs/thermal-foundation/tiers/). A basic
machine or dynamo cannot be augmented.

Some augments can be installed multiple times, stacking their effects.

Certain augments are classified as 'specializations'. Only one specialization
augment can be installed at a time.


List of augments
----------------

### Machine augments
{% include augment-table.html augments=page.augments.machine %}

### Dynamo augments
{% include augment-table.html augments=page.augments.dynamo %}
