---
category: Configuration
show_image: false
subcategory: Feature types
title: spout
---

**`spout`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates columns of blocks of a certain height. The
columns are generated from the bottom up, starting from the coordinates where
the features are placed. This can be used to generate 'spouts' of fluid that
emerge from underground.


Options
-------

When using this feature type, the following values must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`block`|[Block ID](../../common-formats/block-id/) / array of block IDs|-|The type(s) of block that the spouts consist of. When specified as an array, a block type is selected randomly for each generated block.|
|`radius`|Number / [number provider](../../common-formats/number-provider/)|-|The radius of a spout, in blocks. A radius of `0` will cause spouts of one block wide to be generated. May contain values up to 8. Evaluated once per layer in each spout.|
|`height`|Number / [number provider](../../common-formats/number-provider/)|-|The height of a spout, in blocks. Evaluated once per spout.|
|`shape` (optional)|String|`"CIRCLE"`|The shape of spouts as seen from above. Possible values are `"CIRCLE"` and `"SQUARE"`.|



Examples
--------

Coming soon...
