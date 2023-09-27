---
title: Energized Glowstone
redirect_from:
- /thermal-expansion/fluids/energized-glowstone/
- /docs/thermal-foundation/fluids/energized-glowstone/
- /docs/thermal-foundation/fluids/molten/energized-glowstone/
- /docs/energized-glowstone/
- /docs/thermal-foundation/energized-glowstone/
- /docs/thermal-foundation-2/energized-glowstone/
- /docs/1.12/thermal-foundation-2/energized-glowstone/
recipes:
  crucible:
  - glowstone
  - glowstone-from-block
  - glowstone-from-clathrate
  - fluid-ore-processing-glowstone
  transposer-empty:
  - bucket-glowstone
  centrifuge:
  - dust-lumium
usage-recipes:
  crafting:
  - tf-1-12-glowstone-dust-from-fluid
  - tf-1-12-dust-lumium
  transposer-fill:
  - bucket-glowstone
  - glowstone-dust-from-fluid
  - td-1-12-itemduct-fast
  - td-1-12-itemduct-energy-fast
---

![Energized glowstone](/assets/images/thermal-foundation-2/energized-glowstone.gif){:style="height: 128px"}

> So that's how those formations occur! It all makes nonsense now!


**Energized glowstone** is a fluid obtained by melting
[glowstone](https://minecraft.wiki/w/Glowstone) in a [magma
crucible](../../thermal-expansion/magma-crucible/). It is lighter than air and vertically flows up
instead of down.


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='te-1-12-crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='te-1-12-transposer-empty' recipes=page.recipes.transposer-empty %}

### Centrifugal Separator
{% include recipe-table.html type='te-1-12-centrifuge' recipes=page.recipes.centrifuge %}

### Natural generation
Deposits of [energized netherrack](../energized-netherrack/) may contain some
energized glowstone, which can be picked up using a
[bucket](https://minecraft.wiki/w/Bucket).


Usage
-----

Energized glowstone can be placed as a block using a
[bucket](https://minecraft.wiki/w/Bucket).

### Light source
Energized glowstone blocks emit a light level of 15.

### Flow
Energized glowstone flows like other fluids, except it vertically flows up
instead of down.

Energized glowstone source blocks will gradually float upwards if there are no
blocks above them. If they float at high levels (layers 120 and above by
default) they will condense back into solid
[glowstone](https://minecraft.wiki/w/Glowstone). They will also condense
at 80% of this height if the fluid has no space to flow.

### Effects
When touched by players and mobs, energized glowstone applies the effects [Speed
I](https://minecraft.wiki/w/Speed) and [Jump Boost
I](https://minecraft.wiki/w/Jump_Boost) to them for 6
seconds, as well as
[Glowing](https://minecraft.wiki/w/Glowing) for 30 seconds.

When an energized glowstone source block comes into contact with [gelid
cryotheum](../gelid-cryotheum/), the source block instantly condenses back
into solid [glowstone](https://minecraft.wiki/w/Glowstone).

### Crafting ingredient
Any item that contains at least one
[bucket](https://minecraft.wiki/w/Bucket) worth of energized glowstone
may be used in these recipes.

{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}

### Fluid Transposer ingredient
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Reactant Dynamo fuel
Energized glowstone can be used with
[sugar](https://minecraft.wiki/w/Sugar), [nether
wart](https://minecraft.wiki/w/Nether_Wart),
[gunpowder](https://minecraft.wiki/w/Gunpowder), [blaze
powder](https://minecraft.wiki/w/Blaze_Powder) or [ghast
tears](https://minecraft.wiki/w/Ghast_Tear) in a [reactant
dynamo](../../thermal-expansion/reactant-dynamo/) to generate varying amounts of energy.


Trivia
------

* Like other fluids, energized glowstone produces dripping particles. However,
  these particles form on top of blocks above the fluid, and 'fall' upwards.
* If [Tinkers'
  Construct](https://minecraft.curseforge.com/projects/tinkers-construct) is
  installed, energized glowstone can be mixed with molten
  [tin](../tin-ingot/) and molten [silver](../silver-ingot/) in a smeltery
  to make molten [lumium](../lumium-ingot/).
