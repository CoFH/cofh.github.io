---
category: Fluids
recipes:
  centrifuge:
  - dust-signalum
  crucible:
  - redstone
  - redstone-from-block
  - redstone-from-clathrate
  - fluid-ore-processing-redstone
  transposer-empty:
  - bucket-redstone
show_image: false
subcategory: Molten
subjects:
- tf-1-12-redstone
title: Destabilized Redstone
usage-recipes:
  crafting-shapeless:
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

![Destabilized redstone](/images/docs/1.12/thermal-foundation/destabilized-redstone.gif)

> Behold, the Redstone Revolution!


**Destabilized redstone** is a fluid obtained by melting
[redstone](https://minecraft.gamepedia.com/Redstone) in a [magma
crucible](../../thermal-expansion/magma-crucible/).


Obtaining
---------

### Magma Crucible
{{<recipe_table type="crucible" ids_param="recipes.crucible">}}

### Fluid Transposer
{{<recipe_table type="transposer-empty" ids_param="recipes.transposer-empty">}}

### Centrifugal Separator
{{<recipe_table type="centrifuge" ids_param="recipes.centrifuge">}}

### Natural generation
Deposits of [destabilized redstone ore](../destabilized-redstone-ore/) may
contain some destabilized redstone, which can be picked up using a
[bucket](https://minecraft.gamepedia.com/Bucket).


Usage
-----

Destabilized redstone can be placed as a block using a
[bucket](https://minecraft.gamepedia.com/Bucket).

### Light source
Destabilized redstone blocks emit a light level of 7.

### Redstone power source
Destabilized redstone blocks emit redstone power. The power level of flowing
blocks is proportional to how they are from the source block.

### Crafting ingredient
Any item that contains at least one
[bucket](https://minecraft.gamepedia.com/Bucket) worth of destabilized redstone
may be used in these recipes.

{{<recipe_table type="crafting-shapeless" ids_param="usage-recipes.crafting-shapeless">}}

### Fluid Transposer ingredient
{{<recipe_table type="transposer-fill" ids_param="usage-recipes.transposer-fill">}}

### Reactant Dynamo fuel
Destabilized redstone can be used with
[sugar](https://minecraft.gamepedia.com/Sugar), [nether
wart](https://minecraft.gamepedia.com/Nether_Wart),
[gunpowder](https://minecraft.gamepedia.com/Gunpowder), [blaze
powder](https://minecraft.gamepedia.com/Blaze_Powder) or [ghast
tears](https://minecraft.gamepedia.com/Ghast_Tear) in a [reactant
dynamo](../../thermal-expansion/reactant-dynamo/) to generate varying amounts of energy.


Trivia
------

* If [Tinkers'
  Construct](https://minecraft.curseforge.com/projects/tinkers-construct) is
  installed, destabilized redstone can be mixed with molten
  [copper](../copper-ingot/) and molten [silver](../silver-ingot/) in a
  smeltery to make molten [signalum](../signalum-ingot/).
