---
title: Zephyrean Aerotheum
nav: thermal-foundation
redirect_from:
  - /docs/thermal-foundation/fluids/zephyrean-aerotheum/
  - /docs/thermal-foundation/fluids/elemental/zephyrean-aerotheum/
recipes:
  crucible:
    - aerotheum
  transposer-empty:
    - bucket-aerotheum
usage-recipes:
  transposer-fill:
    - bucket-aerotheum
    - viaduct
---

![Zephyrean aerotheum](/assets/images/thermal-foundation/zephyrean-aerotheum.gif){:style="height: 128px"}


**Zephyrean aerotheum** is the air elemental fluid. It is obtained by melting
[aerotheum dust](/docs/aerotheum-dust/) in a [magma
crucible](/docs/magma-crucible/). It is lighter than air and vertically flows up
instead of down.


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Zephyrean aerotheum can be placed as a block using a
[bucket](https://minecraft.gamepedia.com/Bucket).

### Flow
Zephyrean aerotheum flows like other fluids, except it vertically flows up
instead of down.

Zephyrean aerotheum source blocks will gradually float upwards if there are no
blocks above them. If they float at high levels (layers 120 and above by
default) they will dissipate into the air. They will also dissipate at 80% of
this height if the fluid has no space to flow.

### Effects
When touched by players and mobs, zephyrean aerotheum applies two effects to
them: [Invisibility](https://minecraft.gamepedia.com/Status_effect#Invisibility)
for 3 seconds, and [Water
Breathing](https://minecraft.gamepedia.com/Status_effect#Water_Breathing) for 30
seconds.

Projectiles that come into contact with zephyrean aerotheum are sent flying in a
random direction away from the fluid.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Reactant Dynamo fuel
When used together with [petrotheum dust](/docs/petrotheum-dust/) as fuel in a
[reactant dynamo](/docs/reactant-dynamo/), 100 mB of zephyrean aerotheum yields
400,000 RF, or 500,000 RF if an [elemental
catalyzer](/docs/augment-elemental-catalyzer/) is installed.


Trivia
------

* Like other fluids, zephyrean aerotheum produces dripping particles. However,
  these particles form on top of blocks above the fluid, and 'fall' upwards.
