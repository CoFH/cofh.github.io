---
category: Configuration
show_image: false
subcategory: Feature types
title: small-tree
---

**`small-tree`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates small oak-shaped trees.


Options
-------

When using this feature type, the following values must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`block`|[Block ID](../../common-formats/block-id/) / array of block IDs|-|The block(s) used to generate the trunks of trees. When specified as an array, a block type is selected randomly for each generated block.|
|`surface` (optional)|[Block ID](../../common-formats/block-id/) / array of block IDs|(Any block)|The block(s) that trees may be generated on top of. If the given value is invalid, this is set to grass blocks and dirt.|
|`leaves` (optional)|[Block ID](../../common-formats/block-id/) / array of block IDs|(None)|The block(s) used to generate the leaves of trees. When specified as an array, a block type is selected randomly for each generated block.|
|`min-height` (optional)|Number|`5`|The minimum height of trees, in blocks.|
|`height-variance` (optional)|Number|`3`|The maximum amount of blocks that may be randomly added to the height of trees.|
|`leaf-variance` (optional)|Boolean|`true`|Whether or not blocks may be randomly removed from the corners of the leaves of trees, giving them a more natural look.|
|`tree-checks` (optional)|Boolean|`true`|Whether to verify that trees can properly 'grow' before generating them somewhere.|
|`relaxed-growth` (optional)|Boolean|`false`|Whether trees may be generated with blocks adjacent to the bottom.|
|`water-loving` (optional)|Boolean|`false`|Whether trees may be generated in water, up to the leaves.|



Examples
--------

Coming soon...
