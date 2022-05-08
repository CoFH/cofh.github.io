---
category: Configuration
show_image: false
subcategory: Feature types
title: plate
---

**`plate`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates vertical cylinders, similar to
[clay](https://minecraft.gamepedia.com/Clay_(block)) deposits.


Options
-------

When using this feature type, the following values must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`block`|[Block ID](../../common-formats/block-id/) / array of block IDs|-|The type(s) of block that the plates consist of. When specified as an array, a block type is selected randomly for each generated block.|
|`radius`|Number|-|The radius of a plate, in blocks. May contain values up to 32.|
|`height` (optional)|Number / [number provider](../../common-formats/number-provider/)|`1`|The amount of vertical layers to add to a plate both above and below its center. For example, when set to `1`, plates will be 3 blocks tall, and when set to `2`, plates will be 5 blocks tall. When set to `0`, plates will be 1 block tall. May contain values up to 64. Evaluated once per plate.|
|`slim` (optional)|Boolean|`false`|If `true`, the top layer of plates is not generated, allowing plates that are an even number of blocks tall to be generated. Plates are always an odd number of blocks tall by default (see `height`).|
|`shape` (optional)|String|`"CIRCLE"`|The shape of plates as seen from above. Possible values are `"CIRCLE"` and `"SQUARE"`.|



Examples
--------

Coming soon...
