---
title: Commands (CoFH Core)
nav: cofh-core
redirect_from:
  - /mods/cofh-core/commands.html
  - /docs/cofh-core/features/commands/
  - /docs/cofh-core/commands/
---

[CoFH Core](/docs/cofh-core/) includes various **commands** that can be useful
to server operators and developers.


Summary
-------

All of CoFH Core's commands must be prefixed with `/cofh`, followed by a space.

{::options parse_block_html="true" /}

<div class="uk-overflow-container">
| Command | Description | Permission level |
|---
| [version](#version) | Displays the installed version of CoFH Core. | -1 |
| [help](#help) | Displays information about CoFH Core's commands. | -1 |
| [syntax](#syntax) | Displays the syntax of CoFH Core's commands. | -1 |
| [friend](#friend) | Allows management of a player's [friend list](/docs/friend-list/). | -1 |
| [hand](#hand) | Displays information about held items. | 0 |
| [tps](#tps) | Displays the server TPS (ticks per second). | 0 |
| [enchant](#enchant) | Applies enchantments to held items. | 2 |
| [killall](#killall) | Removes all loaded entities of a certain type from the server. | 2 |
| [tpx](#tpx) | Advanced teleport command that allows teleporting to other dimensions. | 2 |
| [clearblocks](#clearblocks) | Removes blocks of certain types in an area. | 3 |
| [countblocks](#countblocks) | Displays the amounts of blocks of certain types in an area. | 3 |
| [replaceblocks](#replaceblocks) | Replaces blocks of certain types with another block type in an area. | 3 |
| [unloadchunk](#unloadchunk) | Force-unloads the chunk that the command user is looking at. | 4 |
{:.uk-table .uk-table-striped}
</div>


List of commands
----------------

This section describes every command in detail.

### version
Displays the installed version of CoFH Core.

    /cofh version

---

### help
Displays information about a CoFH Core command.

    /cofh help [command | page]

command
: The name of the command to display information about. If unspecified, displays
a clickable list of all available commands.

page
: The page of commands to display, when displaying a list of all available
commands

---

### syntax
Displays the syntax of a CoFH Core command.

    /cofh syntax [command | page]

command
: The name of the command to display the syntax of. If unspecified, displays a
clickable list of all available commands.

page
: The page of commands to display, when displaying a list of all available
commands.

---

### friend
Allows management of the command user's [friend
list](/docs/friend-list/). Can be done by either opening the friend
list GUI or by adding/removing friends directly.

    /cofh friend {gui | list | add <player> | remove <player>}

player
: The username of the player to add to or remove from the friend list.

---

### hand
Displays various kinds of information about a player's held item. If the player
is holding items in both their main hand and their off-hand, information is
displayed about the item in their main hand.

    /cofh hand [player] [infoType] [infoType] ...

player
: The username of the player to show information of their held item for. If
unspecified, the information of the command user's held item is displayed. nice
nice

infoType
: The type(s) of information to display about the item. If unspecified, only the
name of the item is displayed.

The following types of information are supported:

* `name` / `generic`: the name of the item. Can be hovered on in chat to display
  the item's tooltip.
* `id`: the internal name (ID) of the item.
* `size` / `amount` / `count`: the amount of items in the stack, if applicable.
* `metadata` / `damage` / `alt`: the metadata or damage value of the item.
* `modifiers`: the modifiers of the item (e.g. Attack Damage).
* `enchants` / `enchant` / `ench`: the enchantments on the item.
* `action` / `use`: the action and use duration of the item, for items like bows
  and food.
* `lore` / `flavortext`: the display name and lore of the item, if set.
* `oredict` / `orenames` / `orename` / `ores` / `ore`: the registered Ore
  Dictionary names of the item.
* `nbt` / `tag` / `stacktag` / `compoundtag`: the NBT data of the item stack.
* `tostring` / `string` / `text`: a textual representation of the item stack
  Java object.

---

### tps
Displays the server's TPS (ticks per second). This is commonly used to measure
how smoothly the server is running, or if the server is suffering from heavy
load. The optimal rate is 20 ticks per second.

    /cofh tps {o | a | <dimension>}

dimension
: The ID of the dimension to display the TPS rate for.

If no arguments are supplied, the overall tick time and the tick time per
dimension will be shown. Using `o`, only the overall tick time will be
displayed. Using `a`, the amount of loaded worlds, chunks, entities and tile
entities will be shown. Using a dimension ID, the amount of loaded chunks,
entities and tile entities will be shown for that dimension.

---

### enchant
Applies enchantments to held items. If the player is holding items in both their
main hand and their off-hand, enchantments are applied to the item in their main
hand.

    /cofh enchant [player] <enchantmentID> [level]

player
: The username of the player whose held item is to be enchanted. If unspecified,
the command user will be the target.

enchantmentID
: The ID of the enchantment to apply. A list of vanilla enchantment IDs can be
found [here](http://minecraft.gamepedia.com/Data_values#Enchantment_IDs).

level
: The level of the enchantment to apply.

---

### killall
Removes all loaded entities of a certain type from the server, excluding
players.

    /cofh killall [type]

type
: The name or part of the name of the entity type to remove from the server. If
unspecified, all hostile mobs will be removed. Can be set to `*` to remove *all*
loaded entities.

When the given `type` is `item`, only [item
entities](https://minecraft.gamepedia.com/Item_(entity)) are removed, even if
there are other entities whose type contains `item`.

---

### tpx
An advanced teleportation command that allows teleporting to other dimensions.

    {% raw %}/cofh tpx [player] {{<playerTo> | <dimension>} | <x> <y> <z> [dimension]}{% endraw %}

player
: The username of the player to teleport. If unspecified, the command user will
be teleported.

playerTo
: The username of the player to teleport to.

dimension
: The ID of the dimension to teleport to. If unspecified when using coordinates,
the player will be teleported within the dimension they are in.

x, y, z
: The coordinates to teleport to.

If a player is teleported to a dimension without using coordinates, they will be
teleported to the dimension's spawn point.

---

### clearblocks
Removes blocks of certain types in an area.

    /cofh clearblocks {<player> <xRadius> <yRadius> <zRadius> | <xStart> <yStart> <zStart> <xEnd> <yEnd> <zEnd>} [block[#meta]] [block[#meta]] ...

player
: The username of the player to use as an origin of the area to remove blocks
from.

xRadius, yRadius, zRadius
: The radius in blocks along the respective axes of the area to remove blocks
from, when using a player as an origin.

xStart, yStart, zStart, xEnd, yEnd, zEnd
: The coordinates of the area to remove blocks from, when not using an
origin.

block
: The internal name (ID) of a block to remove. For example, `minecraft:stone`
for stone, and `ThermalFoundation:Ore` for Thermal Foundation ore blocks. If the
block is from Minecraft itself, the `minecraft:` prefix is optional.

meta
: The metadata value of a block.

It is also possible to match blocks using more generic terms:

* `*fluid` matches any fluid blocks.
* `*tree` matches any kind of wood or leaves.
* `*repl` matches any block that can be replaced when placing blocks, like tall
  grass.
* `*stone` matches any block that has the `rock` material.
* `*sand` matches any block that has the `sand` material.
* `*dirt` matches any block that has the `ground`, `grass`, `clay`, `snow`,
  `craftedSnow`, `ice` or `packedIce` material.
* `*plant` matches any block that has the `plants`, `vine` or `leaves` material.
* `*fire` matches any block that has the `fire` or `lava` material, and any
  block that is currently on fire.

---

### countblocks
Displays the amounts of blocks of certain types in an area. Syntax is very
similar to `clearblocks`.

    /cofh countblocks {<player> <xRadius> <yRadius> <zRadius> | <xStart> <yStart> <zStart> <xEnd> <yEnd> <zEnd>} [block[#meta]] [block[#meta]] ...

All arguments are the same as the ones `clearblocks` has.

---

### replaceblocks
Replaces blocks of certain types with another block type in an area. Very
similar to `clearblocks`.

    /cofh replaceblocks {<player> <xRadius> <yRadius> <zRadius> | <xStart> <yStart> <zStart> <xEnd> <yEnd> <zEnd>} <replaceBlock[#meta]> [block[#meta]] [block[#meta]] ...

replaceBlock
: The internal name (ID) of the block to replace blocks with.

All other arguments are the same as the ones `clearblocks` has.

---

### unloadchunk
Force-unloads the chunk that the command user is looking at.

    /cofh unloadchunk
