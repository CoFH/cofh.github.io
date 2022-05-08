---
category: Configuration
show_image: false
subcategory: Feature types
title: structure
---

**`structure`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates structures loaded from NBT files; the same files
that [structure blocks](https://minecraft.gamepedia.com/Structure_Block) use.
One structure is generated per chunk.


Options
-------

When using this feature type, the following value must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`structure`|String / array of [weighted strings](../../common-formats/weighted-string/)|-|The path to the NBT file of the structure to generate. The path is relative to the file that the feature is specified in. If specified as an array, a file is selected randomly each time the feature is generated.|
|`ignored-block` (optional)|[Block ID](../../common-formats/block-id/) / array of block IDs|(None)|A type of block in the structure that should not be generated. For example, this can be set to air blocks to prevent structures that include air blocks from carving out terrain. If specified as an array, a single block type is selected randomly each time the feature is generated.|
|`ignore-entities` (optional)|Boolean|`false`|If `true`, entities included in the structure file are not generated with the structure.|
|`integrity` (optional)|Number / [number provider](../../common-formats/number-provider/)|`1`|If lower than `1`, the structure is generated with random blocks removed from it. May be any value between `0` and `1`. Lower values will result in more blocks being removed. Evaluated once per structure.|
|`rotation` (optional)|String / array of [weighted strings](../../common-formats/weighted-string/)|(All rotations)|The possible rotations of the generated structure. Possible values are `"NONE"`, `"CLOCKWISE_90"`, `"CLOCKWISE_180"` and `"COUNTERCLOCKWISE_90"`. When specified as an array, a rotation is selected randomly for each generated structure.|
|`mirror` (optional)|String / array of [weighted strings](../../common-formats/weighted-string/)|`"NONE"`|The possible ways in which the generated structure may be mirrored. Possible values are `"NONE"`, `"LEFT_RIGHT"` and `"FRONT_BACK"`. When specified as an array, an item is selected randomly for each generated structure.|



Examples
--------

Coming soon...
