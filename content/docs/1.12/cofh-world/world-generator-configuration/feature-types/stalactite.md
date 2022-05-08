---
category: Configuration
show_image: false
subcategory: Feature types
title: stalactite
---

**`stalactite`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates downwards pointing spikes.

Stalactites are only generated on ceilings or underground. They are never
generated in midair.

The value `material` of a [feature type
configuration](../../feature-format/#feature-type-configuration) is only used to
determine the position of stalactites. When generating the stalactites
themselves, the option `gen-body` is used instead.


Options
-------

When using this feature type, the following values must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`block`|[Block ID](../../common-formats/block-id/) / array of block IDs|-|The type(s) of block that stalactites consist of. When specified as an array, a block type is selected randomly for each generated block.|
|`gen-body` (optional)|[Block ID](../../common-formats/block-id/) / array of block IDs|Air|The type(s) of block that may be replaced to generate stalactites.|
|`min-height` (optional)|Number|`7`|The minimum height of a stalactite, in blocks.|
|`height-variance` (optional)|Number|`4`|The maximum amount of blocks that may be randomly added to the minimum height of a stalactite.|
|`height-mod` (optional)|Number|`5`|Used to calculate the minimum radius of the base of a stalactite dynamically. The radius is equal to the height of the stalactite divided by this value. Only used if `gen-size` is set to `0`.|
|`gen-size` (optional)|Number|`0`|The minimum radius of the base of a stalactite, in blocks. If set to `0`, the radius is calculated dynamically based on the stalactite's height.|
|`size-variance` (optional)|Number|`2`|The maximum amount of blocks that may be randomly added to the minimum radius of the base of a stalactite.|
|`smooth` (optional)|Boolean|`false`|If `true`, stalactites have a smoother shape from top to bottom. If `false`, they are more narrow towards the bottom, making them more pointy.|
|`fat` (optional)|Boolean|`true`|If `true`, stalactites are wider from top to bottom.|
|`alt-sinc` (optional)|Boolean|`false`|If `true`, the sides of stalactites are shaped more unevenly, making them look more natural. This is more obvious when `smooth` is set to `true`.|



Examples
--------

Coming soon...
