---
category: Configuration
show_image: false
subcategory: Feature types
title: cluster
---

**`cluster`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates somewhat round deposits of blocks. It is often
used for generating ores.


Options
-------

When using this feature type, the following values must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`block`|[Block ID](../../common-formats/block-id/) / array of block IDs|-|The type(s) of block that the deposits consist of. When specified as an array, a block type is selected randomly for each generated block.|
|`cluster-size`|Number|-|How large the deposits are. This value is not measured in blocks, so some experimenting is needed to obtain the desired result.|




Examples
--------

Coming soon...
