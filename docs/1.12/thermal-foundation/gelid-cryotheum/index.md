---
title: Gelid Cryotheum
redirect_from:
- /thermal-expansion/fluids/gelid-cryotheum/
- /docs/thermal-foundation/fluids/gelid-cryotheum/
- /docs/thermal-foundation/fluids/elemental/gelid-cryotheum/
- /docs/gelid-cryotheum/
- /docs/thermal-foundation/gelid-cryotheum/
- /docs/thermal-foundation-2/gelid-cryotheum/
- /docs/1.12/thermal-foundation-2/gelid-cryotheum/
recipes:
  crucible:
  - cryotheum
  transposer-empty:
  - bucket-cryotheum
usage-recipes:
  transposer-fill:
  - bucket-cryotheum
  - packed-ice
  - redstone-from-clathrate
  - glowstone-dust-from-clathrate
  - ender-pearl-from-clathrate
  - td-1-12-fluxduct-super
---

![Gelid cryotheum](/assets/images/thermal-foundation-2/gelid-cryotheum.gif){:style="height: 128px"}

> This is also worse than lava, except cold. You yeti.


**Gelid cryotheum** is the ice elemental fluid. It is obtained by melting
[cryotheum dust](../cryotheum-dust/) in a [magma
crucible](../../thermal-expansion/magma-crucible/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='te-1-12-crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='te-1-12-transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Gelid cryotheum can be placed as a block using a
[bucket](https://minecraft.wiki/w/Bucket).

### Flow
The way gelid cryotheum flows is similar to
[lava](https://minecraft.wiki/w/Lava). Cryotheum source blocks will also
gradually fall downwards if there are no blocks below them.

### Effects
Most [entities](https://minecraft.wiki/w/Entity) that touch gelid
cryotheum take 2 damage every half-second.

Gelid cryotheum has the following effects on certain blocks and mobs:

* adjacent blocks are covered with [snow
  layers](https://minecraft.wiki/w/Snow_(layer));
* [grass blocks](https://minecraft.wiki/w/Grass_Block) are turned into
  [dirt](https://minecraft.wiki/w/Dirt);
* [water](https://minecraft.wiki/w/Water) source blocks are turned into
  [ice](https://minecraft.wiki/w/Ice);
* flowing [water](https://minecraft.wiki/w/Water) is turned into
  [snow](https://minecraft.wiki/w/Snow_Block);
* [lava](https://minecraft.wiki/w/Lava) source blocks are turned into
  [obsidian](https://minecraft.wiki/w/Obsidian);
* flowing [lava](https://minecraft.wiki/w/Lava) is turned into
  [stone](https://minecraft.wiki/w/Stone);
* [grass](https://minecraft.wiki/w/Grass) and
  [leaves](https://minecraft.wiki/w/Leaves) are instantly destroyed;
* [fire](https://minecraft.wiki/w/Fire) is extinguished;
* [energized glowstone](../energized-glowstone/) source blocks are turned
  into [glowstone](https://minecraft.wiki/w/Glowstone);
* [zombies](https://minecraft.wiki/w/Zombie) and
  [creepers](https://minecraft.wiki/w/Creeper) are turned into [snow
  golems](https://minecraft.wiki/w/Snow_Golem);
* [blazes](https://minecraft.wiki/w/Blaze) take 10 damage instead of 2;
* [snow golems](https://minecraft.wiki/w/Snow_Golem) and
  [blizzes](../blizz/) are given the effects [Speed
  I](https://minecraft.wiki/w/Speed) and [Regeneration
  I](https://minecraft.wiki/w/Regeneration) for 6 seconds.

### Fluid Transposer ingredient
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.usage-recipes.transposer-fill %}

If another mod registers a cinnabar ore block, it can be processed into 2 pieces
of [cinnabar](../cinnabar/) using 200 mB of gelid cryotheum and 2,000 RF.

### Reactant Dynamo fuel
When used together with [pyrotheum dust](../pyrotheum-dust/) as fuel in a
[reactant dynamo](../../thermal-expansion/reactant-dynamo/), 100 mB of gelid cryotheum yields
400,000 RF, or 500,000 RF if an [elemental
catalyzer](../../thermal-expansion/augment-elemental-catalyzer/) is installed.

### Coolant
Gelid cryotheum is a very effective [coolant](../../thermal-expansion/coolants/). It is 3 times as
effective and lasts 12 times as long as
[water](https://minecraft.wiki/w/Water).
