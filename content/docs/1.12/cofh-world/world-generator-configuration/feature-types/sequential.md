---
category: Configuration
show_image: false
subcategory: Feature types
title: sequential
---

**`sequential`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates multiple features at the same location, one
after the other.


Options
-------

When using this feature type, the following value must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`generators`|Array of [feature type configurations](../../feature-format/#feature-type-configuration) and/or arrays of feature type configurations|-|The features to generate in sequence. Each item in the array is either a [feature type configuration](../../feature-format/#feature-type-configuration) or an array of them. When specified as an array, a feature type configuration is selected randomly each time the feature is generated.|



Examples
--------

Coming soon...
