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
[cryotheum dust](/docs/1.12/thermal-foundation/cryotheum-dust/) in a [magma
crucible](/docs/1.12/thermal-expansion/magma-crucible/).


Obtaining
---------

### Magma Crucible
{% include recipe-table.html type='te-1-12-crucible' recipes=page.recipes.crucible %}

### Fluid Transposer
{% include recipe-table.html type='te-1-12-transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Gelid cryotheum can be placed as a block using a
[bucket](https://minecraft.gamepedia.com/Bucket).

### Flow
The way gelid cryotheum flows is similar to
[lava](https://minecraft.gamepedia.com/Lava). Cryotheum source blocks will also
gradually fall downwards if there are no blocks below them.

### Effects
Most [entities](https://minecraft.gamepedia.com/Entity) that touch gelid
cryotheum take 2 damage every half-second.

Gelid cryotheum has the following effects on certain blocks and mobs:

* adjacent blocks are covered with [snow
  layers](https://minecraft.gamepedia.com/Snow_(layer));
* [grass blocks](https://minecraft.gamepedia.com/Grass_Block) are turned into
  [dirt](https://minecraft.gamepedia.com/Dirt);
* [water](https://minecraft.gamepedia.com/Water) source blocks are turned into
  [ice](https://minecraft.gamepedia.com/Ice);
* flowing [water](https://minecraft.gamepedia.com/Water) is turned into
  [snow](https://minecraft.gamepedia.com/Snow_Block);
* [lava](https://minecraft.gamepedia.com/Lava) source blocks are turned into
  [obsidian](https://minecraft.gamepedia.com/Obsidian);
* flowing [lava](https://minecraft.gamepedia.com/Lava) is turned into
  [stone](https://minecraft.gamepedia.com/Stone);
* [grass](https://minecraft.gamepedia.com/Grass) and
  [leaves](https://minecraft.gamepedia.com/Leaves) are instantly destroyed;
* [fire](https://minecraft.gamepedia.com/Fire) is extinguished;
* [energized glowstone](/docs/1.12/thermal-foundation/energized-glowstone/) source blocks are turned
  into [glowstone](https://minecraft.gamepedia.com/Glowstone);
* [zombies](https://minecraft.gamepedia.com/Zombie) and
  [creepers](https://minecraft.gamepedia.com/Creeper) are turned into [snow
  golems](https://minecraft.gamepedia.com/Snow_Golem);
* [blazes](https://minecraft.gamepedia.com/Blaze) take 10 damage instead of 2;
* [snow golems](https://minecraft.gamepedia.com/Snow_Golem) and
  [blizzes](/docs/1.12/thermal-foundation/blizz/) are given the effects [Speed
  I](https://minecraft.gamepedia.com/Status_effect#Speed) and [Regeneration
  I](https://minecraft.gamepedia.com/Status_effect#Regeneration) for 6 seconds.

### Fluid Transposer ingredient
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.usage-recipes.transposer-fill %}

If another mod registers a cinnabar ore block, it can be processed into 2 pieces
of [cinnabar](/docs/1.12/thermal-foundation/cinnabar/) using 200 mB of gelid cryotheum and 2,000 RF.

### Reactant Dynamo fuel
When used together with [pyrotheum dust](/docs/1.12/thermal-foundation/pyrotheum-dust/) as fuel in a
[reactant dynamo](/docs/1.12/thermal-expansion/reactant-dynamo/), 100 mB of gelid cryotheum yields
400,000 RF, or 500,000 RF if an [elemental
catalyzer](/docs/1.12/thermal-expansion/augment-elemental-catalyzer/) is installed.

### Coolant
Gelid cryotheum is a very effective [coolant](/docs/1.12/thermal-expansion/coolants/). It is 3 times as
effective and lasts 12 times as long as
[water](https://minecraft.gamepedia.com/Water).
