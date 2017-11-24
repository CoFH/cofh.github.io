---
title: Fluiduct
nav: thermal-dynamics
image:
  - alt: Fluiduct
    file: thermal-dynamics/fluiduct.png
  - alt: Fluiduct (opaque)
    file: thermal-dynamics/fluiduct-opaque.png
redirect_from:
  - /thermal-expansion/fluids/fluiducts/
  - /docs/thermal-dynamics/ducts/fluiducts/
  - /docs/fluiducts/
recipes:
  crafting:
    - fluiduct-basic
    - fluiduct-basic-opaque
    - fluiduct-basic-opaque-from-transparent
    - fluiduct-basic-transparent-from-opaque
usage-recipes:
  pulverizer:
    - recycling-fluiduct-basic
    - recycling-fluiduct-basic-opaque
---

A **fluiduct** is a block that transfers fluids between blocks.


Obtaining
---------

A placed fluiduct can be instantly picked up by dismantling it with a [crescent
hammer](/docs/crescent-hammer/). It can also be mined using a
[pickaxe](https://minecraft.gamepedia.com/Pickaxe).

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Placement
When placed, a fluiduct connects to any adjacent fluiducts and blocks that can
output or receive fluids. Any connected side of a fluiduct can be disconnected
and reconnected by using a [crescent hammer](/docs/crescent-hammer/) or similar
on it.

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
using a [multimeter](/docs/multimeter/)). The actual throughput per connection
depends on how full the fluiduct network is. A fully pressurized fluiduct
network uses the maximum throughput per connection, while a nearly empty
fluiduct network uses only half of this.

A fluiduct will break if it contains an extremely hot or cold fluid like
[lava](https://minecraft.gamepedia.com/Lava) or [gelid
cryotheum](/docs/gelid-cryotheum/). To transfer these fluids, a [hardened
fluiduct](/docs/hardened-fluiduct/) must be used.

### Attachments
Certain items can be attached to fluiduct connections to change how fluiducts
work. [Servos](/docs/servos/) allow fluiduct connections to pull fluids out of
blocks, [filters](/docs/filters/) allow them to restrict which fluids may pass
through, and [retrievers](/docs/retrievers/) allow them to pull fluids towards
themselves out of other blocks connected to the network.

### Light source
A transparent fluiduct will emit light when it contains a fluid that emits
light, like [lava](https://minecraft.gamepedia.com/Lava) or [energized
glowstone](/docs/energized-glowstone/).

### Pulverizer ingredient
{% include recipe-table.html type='pulverizer' recipes=page.usage-recipes.pulverizer %}
