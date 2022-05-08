---
category: Configuration
show_image: false
subcategory: Distribution types
title: cave
---

**`cave`** is one of the [distribution types](../) provided by [CoFH
World](../../../). It distributes features in the floors or ceilings of caves.
It does so by randomly picking X and Z coordinates and a Y coordinate below
ground, finding the nearest cave (if any), and placing features in the cave's
floor or ceiling at those X and Z coordinates.

If a cave cannot be found at randomly chosen coordinates, it still counts
towards the value `cluster-count` of the [feature
entry](../../feature-format/#features).

When using this distribution type, the feature type
[`cluster`](../../feature-types/cluster/) is used by default, and the value
`material` of [feature type
configurations](../../feature-format/#feature-type-configuration) is set to
[stone](https://minecraft.gamepedia.com/Stone) (and all of its variations) by
default.


Options
-------

When using this distribution type, the following values may be added to the
[feature entry](../../feature-format/#features).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`ceiling` (optional)|Boolean|`false`|If `false`, features are distributed in floors of caves. If `true`, they are distributed in ceilings.|
|`ground-level` (optional)|Number / [number provider](../../common-formats/number-provider/)|(Taken from world)|The altitude below which to look for caves to distribute features in. Evaluated once per feature.|



Examples
--------

Coming soon...
