---
category: Configuration
show_image: false
subcategory: Feature types
title: decoration
---

**`decoration`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates groups of individual blocks scattered around on
a surface, like small plants and flowers.


Options
-------

When using this feature type, the following values must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`block`|[Block ID](../../common-formats/block-id/) / array of block IDs|-|The type(s) of block to generate in groups. When specified as an array, a block type is selected randomly for each generated block.|
|`cluster-size`|Number|-|The maximum amount of blocks in each generated group.|
|`surface` (optional)|[Block ID](../../common-formats/block-id/) / array of block IDs|Grass block|The type(s) of block that blocks in a group may generate on top of.|
|`see-sky` (optional)|Boolean|`true`|Whether to only generate blocks in places with a direct line of sight to the sky.|
|`check-stay` (optional)|Boolean|`true`|Whether to only generate blocks when they can be sustained by the blocks they are generated on top of. For example, sugar canes can only be sustained by blocks next to water.|
|`stack-height` (optional)|Number / [number provider](../../common-formats/number-provider/)|`1`|How many times to vertically stack each block in a group, like cacti and sugar cane. Evaluated once per bottom block.|
|`x-variance` (optional)|Number / [number provider](../../common-formats/number-provider/)|`8`|The maximum amount of blocks that may be randomly added to the X coordinate of the position of a group to place the blocks in the group. Evaluated once per block.|
|`y-variance` (optional)|Number / [number provider](../../common-formats/number-provider/)|`4`|The maximum amount of blocks that may be randomly added to the Y coordinate of the position of a group to place the blocks in the group. Note that non-zero values may cause blocks to float in the air, or not generate at all depending on the value `surface`. Evaluated once per block.|
|`z-variance` (optional)|Number / [number provider](../../common-formats/number-provider/)|`8`|The maximum amount of blocks that may be randomly added to the Z coordinate of the position of a group to place the blocks in the group. Evaluated once per block.|



Examples
--------

Coming soon...
