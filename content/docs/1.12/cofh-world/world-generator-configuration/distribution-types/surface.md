---
category: Configuration
show_image: false
subcategory: Distribution types
title: surface
---

**`surface`** is one of the [distribution types](../) provided by [CoFH
World](../../../). It distributes features on the surface. It does so by
randomly picking X and Z coordinates and placing features on top of the highest
blocks at those coordinates.

When using this distribution type, the feature type
[`cluster`](../../feature-types/cluster/) is used by default, and the value
`material` of [feature type
configurations](../../feature-format/#feature-type-configuration) is set to
[stone](https://minecraft.gamepedia.com/Stone),
[dirt](https://minecraft.gamepedia.com/Dirt), [grass
blocks](https://minecraft.gamepedia.com/Grass_Block),
[sand](https://minecraft.gamepedia.com/Sand),
[gravel](https://minecraft.gamepedia.com/Gravel),
[snow](https://minecraft.gamepedia.com/Snow_Block),
[air](https://minecraft.gamepedia.com/Air) and
[water](https://minecraft.gamepedia.com/Water) (and all variations of these
blocks) by default. Note that air is included because air blocks must be
replaced when generating features on the surface.


Options
-------

When using this distribution type, the following values may be added to the
[feature entry](../../feature-format/#features).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`material` (optional)|[Block ID](../../common-formats/block-id/) / array of block IDs|(Same as default `material` value of [feature type configurations](../../feature-format/#feature-type-configuration), described above)|The type(s) of block that features may be placed on top of. A feature will only be generated at randomly chosen X and Z coordinates if the type of the highest block at those coordinates is specified here. Otherwise, the feature is skipped, but still counts towards the value `cluster-count` of the [feature entry](../../feature-format/#features).|
|`follow-terrain` (optional)|Boolean|`false`|If `false`, only 'terrain' blocks count when finding the highest block at randomly chosen X and Z coordinates. Blocks that make up trees, as well as 'replaceable' blocks such as small plants and fluids, are ignored. If `true`, any block counts when finding the highest block.  (Yes, the effects of `true` and `false` are the wrong way around. It's kept this way for now to not break existing configurations.)|



Examples
--------

Coming soon...
