---
title: Destabilized Redstone
redirect_from:
- /thermal-expansion/fluids/destabilized-redstone/
- /docs/thermal-foundation/fluids/destabilized-redstone/
- /docs/thermal-foundation/fluids/molten/destabilized-redstone/
- /docs/destabilized-redstone/
- /docs/thermal-foundation/destabilized-redstone/
- /docs/thermal-foundation-2/destabilized-redstone/
- /docs/1.12/thermal-foundation-2/destabilized-redstone/
recipes:
  crucible:
  - redstone
  - redstone-from-block
  - redstone-from-clathrate
  - fluid-ore-processing-redstone
  transposer-empty:
  - bucket-redstone
  centrifuge:
  - dust-signalum
usage-recipes:
  crafting:
  - tf-1-12-redstone-from-fluid
  - tf-1-12-dust-signalum
  - ra-1-12-dust-fluxed-electrum-using-electrum
  - ra-1-12-dust-fluxed-electrum-using-gold-and-silver
  - ra-1-12-flux-crystal
  transposer-fill:
  - bucket-redstone
  - redstone-from-fluid
  - td-1-12-fluxduct-reinforced
  - td-1-12-fluxduct-signalum
  - td-1-12-fluxduct-resonant
  - ra-1-12-dust-fluxed-electrum
  - ra-1-12-flux-crystal
---

![Destabilized redstone](/assets/images/thermal-foundation-2/destabilized-redstone.gif){:style="height: 128px"}

> Behold, the Redstone Revolution!


**Destabilized redstone** is a fluid obtained by melting
[redstone](https://minecraft.wiki/w/Redstone) in a [magma
crucible](../../thermal-expansion/magma-crucible/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='te-1-12-crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='te-1-12-transposer-empty' recipes=page.recipes.transposer-empty %}

### Centrifugal Separator
{% include recipe-table.html type='te-1-12-centrifuge' recipes=page.recipes.centrifuge %}

### Natural generation
Deposits of [destabilized redstone ore](../destabilized-redstone-ore/) may
contain some destabilized redstone, which can be picked up using a
[bucket](https://minecraft.wiki/w/Bucket).


Usage
-----

Destabilized redstone can be placed as a block using a
[bucket](https://minecraft.wiki/w/Bucket).

### Light source
Destabilized redstone blocks emit a light level of 7.

### Redstone power source
Destabilized redstone blocks emit redstone power. The power level of flowing
blocks is proportional to how they are from the source block.

### Crafting ingredient
Any item that contains at least one
[bucket](https://minecraft.wiki/w/Bucket) worth of destabilized redstone
may be used in these recipes.

{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Fluid Transposer ingredient
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Reactant Dynamo fuel
Destabilized redstone can be used with
[sugar](https://minecraft.wiki/w/Sugar), [nether
wart](https://minecraft.wiki/w/Nether_Wart),
[gunpowder](https://minecraft.wiki/w/Gunpowder), [blaze
powder](https://minecraft.wiki/w/Blaze_Powder) or [ghast
tears](https://minecraft.wiki/w/Ghast_Tear) in a [reactant
dynamo](../../thermal-expansion/reactant-dynamo/) to generate varying amounts of energy.


Trivia
------

* If [Tinkers'
  Construct](https://minecraft.curseforge.com/projects/tinkers-construct) is
  installed, destabilized redstone can be mixed with molten
  [copper](../copper-ingot/) and molten [silver](../silver-ingot/) in a
  smeltery to make molten [signalum](../signalum-ingot/).
