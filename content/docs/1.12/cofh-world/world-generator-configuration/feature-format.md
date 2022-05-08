---
category: Configuration
show_image: false
title: Feature format
---

This page describes the [JSON](http://www.json.org/) format that [CoFH
World](../../) uses for describing features to generate in the world. Features
are described inside the `populate` value of [world generation
files](../files/).


Features
--------

Features are described as objects with the following values.

|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`generator`|[Feature type configuration](#feature-type-configuration) / array of feature type configurations|-|The type of feature to generate. When specified as an array, a feature type configuration is chosen randomly each time the feature is generated.|
|`distribution`|String|-|The [distribution type](../distribution-types/) used to distribute the feature in the world. The used distribution type may require additional values to be added to the feature entry.|
|`cluster-count`|Number / [number provider](../common-formats/number-provider/)|-|How many attempts to generate the feature are done in a chunk. Evaluated once per chunk.|
|`chunk-chance` (optional)|Number|`1`|The chance of a chunk containing the feature at all. Read as follows: one in [chance] chunks contain the feature.|
|`in-village` (optional)|Boolean|`true`|Whether the feature may be generated in the same area as a village.|
|`biome` (optional)|Biome restriction|(Any biome)|The biomes in which the feature may be generated.|
|`dimension` (optional)|Dimension restriction|(Any dimension)|The dimensions in which the feature may be generated.|
|`retrogen` (optional)|Boolean|`false`|Whether to generate the feature in previously generated chunks where the feature wasn't already generated (with the same name). This will only work if `RetroactiveGeneration` is set to `true` in CoFH World's configuration file.|
|`enabled` (optional)|Boolean|`true`|Whether to generate the feature at all.|



### Feature type configuration
A feature type configuration specifies and configures the type of feature to
generate. It is an object with the following values. The used [feature
type](../feature-types/) may require additional values to be added.

|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`type` (optional)|String|(Set by [distribution type](../distribution-types/))|The [feature type](../feature-types/) to generate.|
|`material` (optional)|[Block ID](../common-formats/block-id/) / array of block IDs|(Set by [distribution type](../distribution-types/))|The type(s) of block that may be replaced to generate the feature, such as stone for ore blocks.|
|`weight` (optional)|Number|`100`|How likely the feature type configuration is to be selected when it is part of an array of items to randomly choose from. Items with a greater weight have a higher chance of being selected.|


### Biome restriction
A biome restriction specifies the biomes in which a feature may or may not be
generated. It is an object with the following values.


|Name|Type|Description|
|--- |--- |--- |
|`restriction`|String|Whether the given list of biomes should be treated as a blacklist or as a whitelist. Can be either `"blacklist"` or `"whitelist"`.|
|`value`|Array of biome entries|The biomes that the restriction applies to.|


A biome entry describes a way to match one or more biomes. It is an object with
the following values.


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`type`|String|-|The method used to match biomes. May be `"id"`, `"temperature"` or `"dictionary"`.|
|`entry`|String / array of strings|-|The value used to match biomes. Uses different values depending on the value of type:               id: Internally registered IDs of         biomes.                   temperature: Temperature categories         that biomes can be in. Possible temperature         categories are COLD,         MEDIUM, WARM and         OCEAN.                   dictionary: Minecraft Forge biome tags         that biomes may be internally registered with. A         list of possible biome tags can be found         here.|
|`whitelist` (optional)|Boolean|`true`|If `false`, the biome entry is treated as an exception to the blacklist or whitelist it is in.|
|`rarity` (optional)|Number (integer)|`-1`|If greater than `1`, a random chance is added to determining whether a biome matches the entry. One in [rarity] attempts to match a matching biome will go through. This can be used to make a feature generate more rarely in certain biomes.|


A biome entry may also be specified as a single string. In this case, it
specifies a single biome by its ID.

### Dimension restriction
A dimension restriction specifies the dimensions in which a feature may or may
not be generated. It is an object with the following values.


|Name|Type|Description|
|--- |--- |--- |
|`restriction`|String|Whether the given list of dimensions should be treated as a blacklist or as a whitelist. Can be either `"blacklist"` or `"whitelist"`.|
|`value`|Array of numbers|The IDs of the dimensions that the restriction applies to. The vanilla dimension IDs are as follows: `0` for the Overworld, `-1` for the Nether and `1` for the End.|


Examples
--------

Coming soon...


Links
-----

* [IDs of biomes in vanilla Minecraft](http://minecraft.gamepedia.com/Data_values#Biome_IDs)
* [Forge biome tags](https://pastebin.com/0NH383ps)
