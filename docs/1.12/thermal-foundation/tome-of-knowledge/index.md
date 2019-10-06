---
title: Tome of Knowledge
redirect_from:
- /docs/tome-of-knowledge/
- /docs/thermal-foundation/tome-of-knowledge/
- /docs/thermal-foundation-2/tome-of-knowledge/
- /docs/1.12/thermal-foundation-2/tome-of-knowledge/
image:
- alt: Tome of knowledge
  file: thermal-foundation-2/tome-of-knowledge.png
recipes:
  crafting:
  - tf2-tome-of-knowledge
usage-recipes:
  crafting:
  - te5-device-xp-collector
---

A **tome of knowledge** is an item that stores
[experience](https://minecraft.gamepedia.com/Experience).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Experience storage
A tome of knowledge can hold up to 10,000 [experience
points](https://minecraft.gamepedia.com/Experience).

When used, a tome of knowledge takes one level worth of experience from the user
and stores it. When used while sneaking, it returns one level worth of stored
experience to the user.

A tome of knowledge is able to automatically store any experience gained by its
user. This can be enabled and disabled by pressing "Cycle Item Mode" (V by
default).

### Essence of Knowledge
A tome of knowledge converts [experience
points](https://minecraft.gamepedia.com/Experience) into [essence of
knowledge](/docs/1.12/thermal-foundation/essence-of-knowledge/) and vice versa. Each experience point is
worth 20 mB of essence of knowledge.

A tome of knowledge can be filled with essence of knowledge, converting it into
experience points. Essence of knowledge can also be drained from it, converting
experience points into the fluid. The item can filled or drained manually by
using it on blocks that store fluids, or automatically using [fluid
transposers](/docs/1.12/thermal-expansion/fluid-transposer/) or similar.

A tome of knowledge can also be filled with [Industrial
Foregoing](https://www.curseforge.com/minecraft/mc-mods/industrial-foregoing)'s
essence (`essence`) [OpenBlocks](https://www.openmods.info/)'s liquid XP
(`xpjuice`).

### Enchantments
A tome of knowledge can be enchanted with [Holding](/docs/1.12/cofh-core/holding/) to increase
its capacity.

| Holding level | Capacity multiplier |
|---
| I | × 1.5 |
| II | × 2 |
| III | × 2.5 |
| IV | × 3 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}
