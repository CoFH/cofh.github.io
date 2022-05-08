---
category: Configuration
show_image: false
subcategory: Distribution types
title: uniform
---

**`uniform`** is one of the [distribution types](../) provided by [CoFH
World](../../../). It distributes features evenly between a minimum and maximum
altitude. Most [ores](https://minecraft.gamepedia.com/Ore) are distributed like
this.

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
|`min-height`|Number / [number provider](../../common-formats/number-provider/)|-|The minimum altitude to place features at. Evaluated once per chunk.|
|`max-height`|Number / [number provider](../../common-formats/number-provider/)|-|The maximum altitude to place features at. Evaulated once per chunk.|



Examples
--------

Coming soon...
