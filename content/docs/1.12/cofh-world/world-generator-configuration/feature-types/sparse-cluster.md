---
category: Configuration
show_image: false
subcategory: Feature types
title: sparse-cluster
---

**`sparse-cluster`** is one of the [feature types](../) provided by [CoFH
World](../../../). It is nearly equivalent to [`cluster`](../cluster/), but
generates deposits of blocks more rarely when a smaller size is set.


Options
-------

When using this feature type, the following values must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`block`|[Block ID](../../common-formats/block-id/) / array of block IDs|-|The type(s) of block that the deposits consist of. When specified as an array, a block type is selected randomly for each generated block.|
|`cluster-size`|Number|-|How large the deposits are. This value is not measured in blocks, so some experimenting is needed to obtain the desired result.  When lower than `4`, deposits only have a chance to be generated. At `3`, 1 in 3 deposits will actually be generated. At `2`, this is 1 in 6 deposits, and at `1` it is 1 in 12.|



Examples
--------

Coming soon...
