---
category: Configuration
show_image: false
subcategory: Feature types
title: stalagmite
---

**`stalagmite`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates upwards pointing spikes. The shape of these
spikes is different than those generated using [`spike`](../spike/).

Stalagmites are only generated on the surface or underground. They are never
generated in midair.

The value `material` of a [feature type
configuration](../../feature-format/#feature-type-configuration) is only used to
determine the position of stalagmites. When generating the stalagmites
themselves, the option `gen-body` is used instead.


Options
-------

When using this feature type, the following values must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`block`|[Block ID](../../common-formats/block-id/) / array of block IDs|-|The type(s) of block that stalagmites consist of. When specified as an array, a block type is selected randomly for each generated block.|
|`gen-body` (optional)|[Block ID](../../common-formats/block-id/) / array of block IDs|Air|The type(s) of block that may be replaced to generate stalagmites.|
|`min-height` (optional)|Number|`7`|The minimum height of a stalagmite, in blocks.|
|`height-variance` (optional)|Number|`4`|The maximum amount of blocks that may be randomly added to the minimum height of a stalagmite.|
|`height-mod` (optional)|Number|`5`|Used to calculate the minimum radius of the base of a stalagmite dynamically. The radius is equal to the height of the stalagmite divided by this value. Only used if `gen-size` is set to `0`.|
|`gen-size` (optional)|Number|`0`|The minimum radius of the base of a stalagmite, in blocks. If set to `0`, the radius is calculated dynamically based on the stalagmite's height.|
|`size-variance` (optional)|Number|`2`|The maximum amount of blocks that may be randomly added to the minimum radius of the base of a stalagmite.|
|`smooth` (optional)|Boolean|`false`|If `true`, stalagmites have a smoother shape from bottom to top. If `false`, they are more narrow towards the top, making them more pointy.|
|`fat` (optional)|Boolean|`true`|If `true`, stalagmites are wider from bottom to top.|
|`alt-sinc` (optional)|Boolean|`false`|If `true`, the sides of stalagmites are shaped more unevenly, making them look more natural. This is more obvious when `smooth` is set to `true`.|



Examples
--------

Coming soon...
