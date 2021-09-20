---
category: Fluids
recipes:
  crucible:
  - aerotheum
  transposer-empty:
  - bucket-aerotheum
show_image: false
subcategory: Elemental
subjects:
- tf-1-12-aerotheum
title: Zephyrean Aerotheum
usage-recipes:
  transposer-fill:
  - bucket-aerotheum
  - td-1-12-viaduct
---

![Zephyrean aerotheum](/assets/images/docs/1.12/thermal-foundation/zephyrean-aerotheum.gif){:style="height: 128px"}


**Zephyrean aerotheum** is the air elemental fluid. It is obtained by melting
[aerotheum dust](../aerotheum-dust/) in a [magma
crucible](../../thermal-expansion/magma-crucible/). It is lighter than air and vertically flows up
instead of down.


Obtaining
---------

### Magma Crucible
{{<recipe_table type="crucible" ids_param="recipes.crucible">}}

### Fluid Transposer
{{<recipe_table type="transposer-empty" ids_param="recipes.transposer-empty">}}


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
When touched by players and mobs, zephyrean aerotheum applies the effect
[Levitation I](https://minecraft.gamepedia.com/Status_effect#Levitation) to them
for 6 seconds.

Projectiles that come into contact with zephyrean aerotheum are sent flying in a
random direction away from the fluid.

### Fluid Transposer ingredient
{{<recipe_table type="transposer-fill' recipe-ids=page.usage-recipes.transposer-fill">}}

### Reactant Dynamo fuel
When used together with [petrotheum dust](../petrotheum-dust/) as fuel in a
[reactant dynamo](../../thermal-expansion/reactant-dynamo/), 100 mB of zephyrean aerotheum yields
400,000 RF, or 500,000 RF if an [elemental
catalyzer](../../thermal-expansion/augment-elemental-catalyzer/) is installed.


Trivia
------

* Like other fluids, zephyrean aerotheum produces dripping particles. However,
  these particles form on top of blocks above the fluid, and 'fall' upwards.
