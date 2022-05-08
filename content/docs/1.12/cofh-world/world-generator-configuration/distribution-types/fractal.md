---
category: Configuration
show_image: false
subcategory: Distribution types
title: fractal
---

**`fractal`** is one of the [distribution types](../) provided by [CoFH
World](../../../). It distributes all features to generate in a chunk together
in a box-shaped area. The size and altitude of this area can be configured.

Large enough areas can reach into many other chunks, which can cause problems
with cascading world generation. These problems can be prevented using the value
`chunk-chance` in the [feature entry](../../feature-format/#features).

When using this distribution type, the feature type
[`large-vein`](../../feature-types/large-vein/) is used by default, and the
value `material` of [feature type
configurations](../../feature-format/#feature-type-configuration) is set to
[stone](https://minecraft.gamepedia.com/Stone) (and all of its variations) by
default.


Options
-------

When using this distribution type, the following values must be added to the
[feature entry](../../feature-format/#features).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`min-height`|Number / [number provider](../../common-formats/number-provider/)|-|The altitude of the bottom of the area to distribute a chunk's features in. Evaluated once per chunk.|
|`vein-height`|Number / [number provider](../../common-formats/number-provider/)|-|The height of the area to distribute a chunk's features in, in blocks. Evaluated once per chunk.|
|`vein-diameter`|Number / [number provider](../../common-formats/number-provider/)|-|The width of the area to distribute a chunk's features in, in blocks along the X and Z axes. Evaulated once per chunk.|
|`vertical-density`|Number / [number provider](../../common-formats/number-provider/)|-|Determines how close together features should be vertically in the area to distribute a chunk's features in. May be any value between `0` and `100`. Evaluated once per chunk.|
|`horizontal-density`|Number / [number provider](../../common-formats/number-provider/)|-|Determines how close together features should be horizontally (along the X and Z axes) in the area to distribute a chunk's features in. May be any value between `0` and `100`. Evaluated once per chunk.|



Examples
--------

Coming soon...
