---
category: Configuration
show_image: false
subcategory: Feature types
title: spike
---

**`spike`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates upwards pointing spikes, like the ones found in
[ice plains spikes biomes](https://minecraft.gamepedia.com/Ice_Plains_Spikes).

Spikes are only generated on top of a surface; they are never generated in
midair.


Options
-------

When using this feature type, the following values must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`block`|[Block ID](../../common-formats/block-id/) / array of block IDs|-|The type(s) of block that spikes consist of. When specified as an array, a block type is selected randomly for each generated block.|
|`min-height` (optional)|Number|`7`|The minimum height of a spike, in blocks.|
|`height-variance` (optional)|Number|`4`|The maximum amount of blocks that may be randomly added to the minimum height of a spike.|
|`size-variance` (optional)|Number|`2`|The maximum amount of blocks that may be randomly added to the radius of a spike at the bottom. The minimum radius is equal to `[height] / ([min-height] / 2)`.|
|`position-variance` (optional)|Number|`3`|A random offset in blocks along the Y axis used when placing spikes.|
|`large-spikes` (optional)|Boolean|`true`|Whether some spikes may be generated as 'large' spikes, which are significantly taller.|
|`large-spike-chance` (optional)|Number|`60`|The chance of a spike to be generated as a large spike. Read as follows: one in [chance] spikes are large spikes.|
|`min-large-spike-height-gain` (optional)|Number|`10`|The minimum amount of additional layers that large spikes have compared to regular spikes.|
|`large-spike-height-variance` (optional)|Number|`30`|The maximum amount of blocks that may be randomly added to the minimum height gain of a large spike.|
|`large-spike-filler-size` (optional)|Number|`1`|The radius of the additional layers of a large spike, in blocks.|



Examples
--------

Coming soon...
