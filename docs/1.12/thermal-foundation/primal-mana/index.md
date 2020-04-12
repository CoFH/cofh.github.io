---
title: Primal Mana
redirect_from:
- /docs/thermal-foundation/fluids/primal-mana/
- /docs/thermal-foundation/fluids/other/primal-mana/
- /docs/primal-mana/
- /docs/thermal-foundation/primal-mana/
- /docs/thermal-foundation-2/primal-mana/
- /docs/1.12/thermal-foundation-2/primal-mana/
recipes:
  transposer-empty:
  - bucket-mana
usage-recipes:
  transposer-fill:
  - bucket-mana
---

![Primal mana](/assets/images/thermal-foundation-2/primal-mana.gif){:style="height: 128px"}


**Primal mana** is a fluid that currently cannot be obtained.


Obtaining
---------

### Fluid Transposer
{% include recipe-table.html type='te-1-12-transposer-empty' recipes=page.recipes.transposer-empty %}


Usage
-----

Primal mana can be placed as a block using a
[bucket](https://minecraft.gamepedia.com/Bucket).

### Light source
Primal mana blocks emit a light level of 15.

### Redstone power source
Primal mana blocks emit redstone power at power level 15.

### Flow
Primal mana flows like other fluids. Mana source blocks will also gradually fall
downwards if there are no blocks below them.

### Effects
[Entities](https://minecraft.gamepedia.com/Entity) that come into contact with
primal mana may be teleported to a random destination in a radius of 8 blocks.

Primal mana has the following effects on certain blocks:

* adjacent blocks are set on [fire](https://minecraft.gamepedia.com/Fire) or
  covered with [snow layers](https://minecraft.gamepedia.com/Snow_(layer));
* [dirt](https://minecraft.gamepedia.com/Dirt) is turned into [grass
  blocks](https://minecraft.gamepedia.com/Grass_Block);
* [coarse dirt](https://minecraft.gamepedia.com/Coarse_Dirt) is turned into
  [podzol](https://minecraft.gamepedia.com/Podzol);
* [farmland](https://minecraft.gamepedia.com/Farmland) is turned into
  [mycelium](https://minecraft.gamepedia.com/Mycelium);
* [glass](https://minecraft.gamepedia.com/Glass) is turned into
  [sand](https://minecraft.gamepedia.com/Sand);
* [redstone ore](https://minecraft.gamepedia.com/Redstone_Ore) lights up;
* [lapis lazuli ore](https://minecraft.gamepedia.com/Lapis_Lazuli_Ore) is turned
  into [lapis lazuli
  blocks](https://minecraft.gamepedia.com/Lapis_Lazuli_Block);
* [silver ore](../silver-ore/) is turned into [mana infused
  ore](../mana-infused-ore/);
* [lead ore](../lead-ore/) is turned into [gold
  ore](https://minecraft.gamepedia.com/Gold_Ore);
* [blocks of silver](../block-of-silver/) are turned into [blocks of mana
  infused metal](../block-of-mana-infused-metal/);
* [blocks of lead](../block-of-lead/) are turned into [blocks of
  gold](https://minecraft.gamepedia.com/Block_of_Gold).


### Fluid Transposer ingredient
{% include recipe-table.html type='te-1-12-transposer-fill' recipes=page.usage-recipes.transposer-fill %}
