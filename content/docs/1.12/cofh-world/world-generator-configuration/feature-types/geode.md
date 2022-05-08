---
category: Configuration
show_image: false
subcategory: Feature types
title: geode
---

**`geode`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates structures that are similar to
[lakes](../lake/), except completely filled with and surrounded by blocks. They
can also contain a core of different blocks at the center.


Options
-------

When using this feature type, the following values must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`block`|[Block ID](../../common-formats/block-id/) / array of block IDs|-|The block(s) used to generate the content of geodes. When specified as an array, a block type is selected randomly for each generated block.|
|`crust` (optional)|[Block ID](../../common-formats/block-id/) / array of block IDs|Stone|The block(s) used to generate the outermost layer of geodes. When specified as an array, a block type is selected randomly for each generated block.|
|`hollow` (optional)|Boolean|`false`|If `true`, allows a core of different blocks to be generated using `filler`.|
|`filler` (optional)|[Block ID](../../common-formats/block-id/) / array of block IDs|(None)|The blocks(s) used to generate a core of different blocks at the center of geodes. This only works if `hollow` is set to `true`. When specified as an array, a block type is selected randomly for each generated block.|



Examples
--------

Coming soon...
