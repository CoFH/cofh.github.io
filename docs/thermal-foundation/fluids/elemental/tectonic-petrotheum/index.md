---
title: Tectonic Petrotheum
redirect_from:
  - /docs/thermal-foundation/fluids/tectonic-petrotheum/
recipes:
  crucible:
    - petrotheum
  transposer-empty:
    - bucket-petrotheum
usage-recipes:
  transposer-fill:
    - bucket-petrotheum
---

![Tectonic petrotheum](/assets/images/thermal-foundation/tectonic-petrotheum.gif){:style="height: 128px"}


**Tectonic petrotheum** is the earth elemental fluid. It is obtained by melting
[petrotheum
dust](/docs/thermal-foundation/items/materials/elemental/petrotheum-dust/) in a
[magma crucible](/docs/thermal-expansion/machines/magma-crucible/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Tectonic petrotheum can be placed as a block using a
[bucket](https://minecraft.gamepedia.com/Bucket).

### Flow
Tectonic petrotheum flows like other fluids. Petrotheum source blocks will also
gradually fall downwards if there are no blocks below them.

### Effects
When touched by players and living mobs, tectonic petrotheum applies the effects
[Haste III](https://minecraft.gamepedia.com/Status_effect#Haste), [Night
Vision](https://minecraft.gamepedia.com/Status_effect#Night_Vision) and
[Resistance II](https://minecraft.gamepedia.com/Status_effect#Resistance) to
them for 30 seconds.

When tectonic petrotheum touches [stone](https://minecraft.gamepedia.com/Stone),
[cobblestone](https://minecraft.gamepedia.com/Cobblestone), [stone
bricks](https://minecraft.gamepedia.com/Stone_Bricks) or [moss
stone](https://minecraft.gamepedia.com/Moss_Stone), these blocks are turned into
[gravel](https://minecraft.gamepedia.com/Gravel).

If enabled, tectonic petrotheum breaks any adjacent blocks made of stone or
rock. This is disabled by default.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Tectonic Initiator
An [pulverizer](/docs/thermal-expansion/machines/pulverizer/) with a [tectonic
initiator](/docs/thermal-expansion/augments/machine/pulverizer/tectonic-initiator/)
installed can consume tectonic petrotheum to process ores more efficiently. It
consumes 100 mB of petrotheum per processed ore.

### Reactant Dynamo fuel
When used together with [aerotheum
dust](/docs/thermal-foundation/items/materials/elemental/aerotheum-dust/) as
fuel in a [reactant dynamo](/docs/thermal-expansion/dynamos/reactant-dynamo/),
100 mB of tectonic petrotheum yields 400,000 RF, or 500,000 RF if an [elemental
catalyzer](/docs/thermal-expansion/augments/dynamo/reactant/elemental-catalyzer/)
is installed.
