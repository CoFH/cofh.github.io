---
category: Configuration
show_image: false
subcategory: Distribution types
title: underfluid
---

**`underfluid`** is one of the [distribution types](../) provided by [CoFH
World](../../../). It distributes features at the bottom of bodies of certain
types of fluid. It does so by randomly picking X and Z coordinates and placing
features below the highest fluid block or column of fluid blocks at those
coordinates, if any.

If there are no fluid blocks at randomly chosen X and Z coordinates, it still
counts towards the value `cluster-count` of the [feature
entry](../../feature-format/#features).

When using this distribution type, the feature type
[`cluster`](../../feature-types/cluster/) is used by default, and the value
`material` of [feature type
configurations](../../feature-format/#feature-type-configuration) is set to
[dirt](https://minecraft.gamepedia.com/Dirt) and [grass
blocks](https://minecraft.gamepedia.com/Grass_Block) (and all variations of
these blocks) by default.


Options
-------

When using this distribution type, the following values must be added to the
[feature entry](../../feature-format/#features).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`fluid`|String / array of strings|-|The type(s) of fluid below which features may be placed. Fluid types are referred to by their internally registered name, such as `"water"`, `"lava"` and `"pyrotheum"`.|
|`material` (optional)|[Block ID](../../common-formats/block-id/) / array of block IDs|(Same as default `material` value of [feature type configurations](../../feature-format/#feature-type-configuration), described above)|The type(s) of block that may be replaced with features. A feature will only be generated at randomly chosen X and Z coordinates if the type of the highest block below a fluid at those coordinates is specified here. Otherwise, the feature is skipped, but still counts towards the value `cluster-count` of the [feature entry](../../feature-format/#features).|



Examples
--------

Coming soon...
