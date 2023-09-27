---
title: Blazing Pyrotheum
redirect_from:
- /thermal-expansion/fluids/blazing-pyrotheum/
- /docs/thermal-foundation/fluids/blazing-pyrotheum/
- /docs/thermal-foundation/fluids/elemental/blazing-pyrotheum/
- /docs/blazing-pyrotheum/
- /docs/thermal-foundation/blazing-pyrotheum/
- /docs/thermal-foundation-2/blazing-pyrotheum/
- /docs/1.12/thermal-foundation-2/blazing-pyrotheum/
recipes:
  crucible:
  - pyrotheum
  transposer-empty:
  - bucket-pyrotheum
usage-recipes:
  transposer-fill:
  - bucket-pyrotheum
---

![Blazing pyrotheum](/assets/images/thermal-foundation-2/blazing-pyrotheum.gif){:style="height: 128px"}

> This is actually worse than lava. You monster.


**Blazing pyrotheum** is the fire elemental fluid. It is obtained by melting
[pyrotheum dust](../pyrotheum-dust/) in a [magma
crucible](../../thermal-expansion/magma-crucible/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='te-1-12-crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='te-1-12-transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Blazing pyrotheum can be placed as a block using a
[bucket](https://minecraft.wiki/w/Bucket).

### Light source
Blazing pyrotheum blocks emit a light level of 15.

### Flow
The way blazing pyrotheum flows is similar to
[lava](https://minecraft.wiki/w/Lava). Pyrotheum source blocks will also
gradually fall downwards if there are no blocks below them.

### Effects
Most [entities](https://minecraft.wiki/w/Entity) that touch blazing
pyrotheum take 2 damage every half-second.

Like [lava](https://minecraft.wiki/w/Lava), blazing pyrotheum starts
fires. However, pyrotheum does so much more aggressively, instantly starting
fires on top of every adjacent block.

Blazing pyrotheum has the following effects on certain blocks and mobs:

* flammable blocks are instantly destroyed;
* [cobblestone](https://minecraft.wiki/w/Cobblestone) is smelted into
  [stone](https://minecraft.wiki/w/Stone);
* [grass blocks](https://minecraft.wiki/w/Grass_Block) are turned into
  [dirt](https://minecraft.wiki/w/Dirt);
* [sand](https://minecraft.wiki/w/Sand) is smelted into
  [glass](https://minecraft.wiki/w/Glass);
* [water](https://minecraft.wiki/w/Water) and
  [ice](https://minecraft.wiki/w/Ice) is turned into
  [stone](https://minecraft.wiki/w/Stone);
* [clay](https://minecraft.wiki/w/Clay_(block)) is smelted into
  [terracotta](https://minecraft.wiki/w/Terracotta);
* [snow](https://minecraft.wiki/w/Snow_Block) and [snow
  layers](https://minecraft.wiki/w/Slow_(layer)) are evaporated;
* [cobblestone stairs](https://minecraft.wiki/w/Stairs) are smelted into
  [stone brick stairs](https://minecraft.wiki/w/Stairs);
* [creepers](https://minecraft.wiki/w/Creeper) instantly explode.


### Fluid Transposer ingredient
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.usage-recipes.transposer-fill %}

### Pyro-Concentrator
An [induction smelter](../../thermal-expansion/induction-smelter/) with a
[pyro-concentrator](../../thermal-expansion/augment-pyro-concentrator/) installed consumes blazing
pyrotheum to process ores more efficiently. It consumes 100 mB of pyrotheum per
processed ore.

### Magmatic Dynamo fuel
When used as fuel in a [magmatic dynamo](../../thermal-expansion/magmatic-dynamo/), a bucket of
blazing pyrotheum yields 2,000,000 RF, or 2,500,000 RF if an [isentropic
reservoir](../../thermal-expansion/augment-isentropic-reservoir/) is installed.

### Reactant Dynamo fuel
When used together with [cryotheum dust](../cryotheum-dust/) as fuel in a
[reactant dynamo](../../thermal-expansion/reactant-dynamo/), 100 mB of blazing pyrotheum yields
400,000 RF, or 500,000 RF if an [elemental
catalyzer](../../thermal-expansion/augment-elemental-catalyzer/) is installed.
