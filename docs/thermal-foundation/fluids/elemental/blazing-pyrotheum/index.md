---
title: Blazing Pyrotheum
redirect_from:
  - /docs/thermal-foundation/fluids/blazing-pyrotheum/
recipes:
  crucible:
    - pyrotheum
  transposer-empty:
    - pyrotheum-from-bucket
usage-recipes:
  transposer-fill:
    - bucket-pyrotheum
---

![Blazing pyrotheum](/assets/images/thermal-foundation/blazing-pyrotheum.gif){:style="height: 128px"}

> This is actually worse than lava. You monster.


**Blazing pyrotheum** is the fire elemental fluid. It is obtained by melting
[pyrotheum
dust](/docs/thermal-foundation/items/materials/elemental/pyrotheum-dust/) in a
[magma crucible](/docs/thermal-expansion/machines/magma-crucible/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

### Light source
Blazing pyrotheum blocks emit a light level of 15.

### Flow
The way blazing pyrotheum flows is similar to
[lava](https://minecraft.gamepedia.com/Lava). Pyrotheum source blocks will also
gradually fall downwards if there are no blocks below them.

### Interactions
Like [lava](https://minecraft.gamepedia.com/Lava), blazing pyrotheum blocks
start fires. However, pyrotheum does so much more aggressively.

Blazing pyrotheum has specific interactions with the following blocks:

* flammable blocks are instantly destroyed;
* [cobblestone](https://minecraft.gamepedia.com/Cobblestone) is smelted into
  [stone](https://minecraft.gamepedia.com/Stone);
* [grass blocks](https://minecraft.gamepedia.com/Grass_Block) are turned into
  [dirt](https://minecraft.gamepedia.com/Dirt);
* [sand](https://minecraft.gamepedia.com/Sand) is smelted into
  [glass](https://minecraft.gamepedia.com/Glass);
* [water](https://minecraft.gamepedia.com/Water) and
  [ice](https://minecraft.gamepedia.com/Ice) is turned into
  [stone](https://minecraft.gamepedia.com/Stone);
* [clay](https://minecraft.gamepedia.com/Clay_(block)) is smelted into
  [terracotta](https://minecraft.gamepedia.com/Terracotta);
* [snow](https://minecraft.gamepedia.com/Snow) and [snow
  layers](https://minecraft.gamepedia.com/Slow_(layer)) are evaporated;
* [cobblestone stairs](https://minecraft.gamepedia.com/Stairs) are smelted into
  [stone brick stairs](https://minecraft.gamepedia.com/Stairs).

### Effects
Like [lava](https://minecraft.gamepedia.com/Lava), most
[entities](https://minecraft.gamepedia.com/Entity) that touch blazing pyrotheum
take damage and are set on fire.

When a [creeper](https://minecraft.gamepedia.com/Creeper) comes into contact
with blazing pyrotheum, it will instantly explode.

### Fluid Transposer ingredient
{% include recipe-table.html type='transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Pyro-Concentrator
An [induction smelter](/docs/thermal-expansion/machines/induction-smelter/) with
a
[pyro-concentrator](/docs/thermal-expansion/augments/machine/induction-smelter/pyro-concentrator/)
installed can consume blazing pyrotheum to process ores more efficiently. It
consumes 100 mB of pyrotheum per processed ore.

### Magmatic Dynamo fuel
When used as fuel in a [magmatic
dynamo](/docs/thermal-expansion/dynamos/magmatic-dynamo/), blazing pyrotheum
yields 2,000,000 RF per bucket.

### Reactant Dynamo fuel
When used together with [cryotheum
dust](/docs/thermal-foundation/items/materials/elemental/cryotheum-dust/) as
fuel in a [reactant dynamo](/docs/thermal-expansion/dynamos/reactant-dynamo/),
100 mB of blazing pyrotheum yields 400,000 RF, or 500,000 RF if an [elemental
catalyzer](/docs/thermal-expansion/augments/dynamo/reactant/elemental-catalyzer/)
is installed.
