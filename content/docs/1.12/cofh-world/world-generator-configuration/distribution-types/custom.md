---
category: Configuration
show_image: false
subcategory: Distribution types
title: custom
---

**`custom`** is one of the [distribution types](../) provided by [CoFH
World](../../../). It distributes features at user-specified coordinates in each
chunk.

When using this distribution type, the feature type
[`cluster`](../../feature-types/cluster/) is used by default, and the value
`material` of [feature type
configurations](../../feature-format/#feature-type-configuration) is set to
[stone](https://minecraft.gamepedia.com/Stone) (and all of its variations) by
default.


Options
-------

When using this distribution type, the following values must be added to the
[feature entry](../../feature-format/#features).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`x-offset`|Number / [number provider](../../common-formats/number-provider/)|-|The X coordinate at which to place features, relative to the center of each chunk. Evaluated once per feature.|
|`y-offset`|Number / [number provider](../../common-formats/number-provider/)|-|The Y coordinate at which to place features. Evaluated once per feature.|
|`z-offset`|Number / [number provider](../../common-formats/number-provider/)|-|The Z coordinate at which to place features, relative to the center of each chunk. Evaluated once per feature.|



Examples
--------

Coming soon...
