---
title: Destabilized Redstone
redirect_from:
  - /docs/thermal-foundation/fluids/destabilized-redstone/
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
    - redstone-from-fluid
    - dust-signalum
    - dust-fluxed-electrum-using-electrum
    - dust-fluxed-electrum-using-gold-and-silver
    - flux-crystal
  transposer-fill:
    - bucket-redstone
    - redstone-from-fluid
    - blaze-powder
    - blizz-powder
    - blitz-powder
    - basalz-powder
    - fluxduct-reinforced
    - fluxduct-signalum
    - fluxduct-resonant
    - dust-fluxed-electrum
    - flux-crystal
---

![Destabilized redstone](/assets/images/thermal-foundation/destabilized-redstone.gif){:style="height: 128px"}

> Behold, the Redstone Revolution!


**Destabilized redstone** is a fluid obtained by melting
[redstone](https://minecraft.gamepedia.com/Redstone) in a [magma
crucible](/docs/thermal-expansion/machines/magma-crucible/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='transposer-empty' recipes=page.recipes.transposer-empty %}

### Centrifugal Separator
{% include recipe-table.html type='centrifuge' recipes=page.recipes.centrifuge %}

### Natural generation
Deposits of [destabilized redstone
ore](/docs/thermal-foundation/world/fluid-ores/destabilized-redstone-ore/) may
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

{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Reactant Dynamo fuel
Destabilized redstone can be used with
[sugar](https://minecraft.gamepedia.com/Sugar), [nether
wart](https://minecraft.gamepedia.com/Nether_Wart),
[gunpowder](https://minecraft.gamepedia.com/Gunpowder), [blaze
powder](https://minecraft.gamepedia.com/Blaze_Powder) or [ghast
tears](https://minecraft.gamepedia.com/Ghast_Tear) in a [reactant
dynamo](/docs/thermal-expansion/dynamos/reactant-dynamo) to generate varying
amounts of energy.
