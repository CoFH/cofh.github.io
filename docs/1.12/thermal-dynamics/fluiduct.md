---
category: Ducts
image:
- alt: Fluiduct
  file: thermal-dynamics/fluiduct.png
- alt: Fluiduct (opaque)
  file: thermal-dynamics/fluiduct-opaque.png
recipes:
  crafting-shaped:
  - td-1-12-fluiduct-basic
  - td-1-12-fluiduct-basic-opaque
  crafting-shapeless:
  - td-1-12-fluiduct-basic-opaque-from-transparent
  - td-1-12-fluiduct-basic-transparent-from-opaque
subcategory: Fluids
subjects:
- td-1-12-fluiduct-basic
title: Fluiduct
---

A **fluiduct** is a block that transfers fluids between blocks.


Obtaining
---------

A placed fluiduct can be instantly picked up by dismantling it with a
[wrench](../../wrenches/). It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped %}
{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.recipes.crafting-shapeless %}


Usage
-----

### Placement
When placed, a fluiduct connects to any adjacent fluiducts and blocks that can
output or receive fluids. Any connected side of a fluiduct can be disconnected
and reconnected by using a [wrench](../../wrenches/) on it.

### Fluid transfer
When a block inserts a fluid into a fluiduct, the fluid is distributed to all
connected blocks that can receive it, as evenly as possible. A fluiduct can
transfer only one type of fluid at a time.

A limited amount of fluid per tick can be transferred through each fluiduct
connection. However, there is no limit on how much fluid can travel through a
fluiduct itself.

A network of fluiducts can store a certain amount of fluid, so that unloaded
[chunks](https://minecraft.gamepedia.com/Chunk) do not immediately cause it to
stop supplying the fluid to blocks. The fluid capacity of a network is
proportional to the amount of blocks connected to it.

The maximum throughput of a fluiduct per connection depends on the viscosity of
the transferred fluid, and can be between 80 and 600 mB/t (this can be read
using a [multimeter](../../thermal-foundation/multimeter/)). The actual
throughput per connection depends on how full the fluiduct network is. A fully
pressurized fluiduct network uses the maximum throughput per connection, while a
nearly empty fluiduct network uses only half of this.

A fluiduct will break if it contains an extremely hot or cold fluid like
[lava](https://minecraft.gamepedia.com/Lava) or [gelid
cryotheum](../../thermal-foundation/gelid-cryotheum/). To transfer these fluids,
a [hardened fluiduct](../hardened-fluiduct/) must be used.

### Attachments
Certain items can be attached to fluiduct connections to change how fluiducts
work. [Servos](../servos/) allow fluiduct connections to pull fluids out of
blocks, [filters](../filters/) allow them to restrict which fluids may pass
through, and [retrievers](../retrievers/) allow them to pull fluids towards
themselves from other blocks connected to the network.

### Light source
A transparent fluiduct will emit light when it contains a fluid that emits
light, like [lava](https://minecraft.gamepedia.com/Lava) or [energized
glowstone](../../thermal-foundation/energized-glowstone/).
