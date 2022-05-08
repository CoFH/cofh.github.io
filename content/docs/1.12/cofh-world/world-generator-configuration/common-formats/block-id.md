---
category: Configuration
show_image: false
subcategory: Common formats
title: Block ID
---

A **block ID** is a format used while describing
[features](../../feature-format/) to specify a type of
[block](https://minecraft.gamepedia.com/Block) in the world.


Format
------

A block ID is an object with the following values.


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`name`|String|-|The internal name (ID) of the block, such as `minecraft:stone`. The ID of a block in the world can be seen ingame by looking at it while the [debug screen](https://minecraft.gamepedia.com/Debug_screen) is active. If the block is from the base game, the `minecraft:` prefix is not required.|
|`properties` (optional)|Object|(See description)|The [block states](https://minecraft.gamepedia.com/block_states) of the block, specified as an object in which the keys are the names of the block states. The block states of a block in the world can be seen ingame by looking at it while the [debug screen](https://minecraft.gamepedia.com/Debug_screen) is active.  If `properties` is not specified and the block ID is used to generate blocks, the default block states for the block type are used. If the block ID is used to match existing blocks, block states are ignored while matching blocks.|
|`data-tag` (optional)|Object|`null`|The [NBT data](https://minecraft.gamepedia.com/NBT_format) of the block, specified as JSON. Only used for blocks that have [block entities](https://minecraft.gamepedia.com/Chunk_format#Block_entity_format).|
|`weight` (optional)|Number|`100`|How likely the block ID is to be selected when it is part of an array of block IDs to randomly choose from. Block IDs with a greater weight have a higher chance of being selected.|


A block ID may also be specified as a single string. In that case, it is read as
the `name` value.


Examples
--------

Coming soon...
