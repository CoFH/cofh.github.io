---
category: Configuration
show_image: false
subcategory: Common formats
title: Number provider
---

A **number provider** is a format used while describing
[features](../../feature-format/) to specify a source of numbers. It can often
be used in places where a regular number can be specified. They can return the
same or a different number each time the world generator asks them for one.

There are six types of number providers: constants, two types of random number
generators, world values, operations and bounded values. Most types allow for
nesting as other number providers may be used to configure them.


Constant
--------

A constant number provider provides the same value each time. It is equivalent
to simply specifying a number. It is an object with the following value.


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`value`|Number|-|The number to provide.|


Random (minimum/maximum)
------------------------

This type of number provider generates random numbers between a minimum and a
maximum value, where each possible result is equally likely. It is an object
with the following values.


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`min`|Number / number provider|-|The lower limit of the randomly generated numbers.|
|`max`|Number / number provider|-|The upper limit of the randomly generated numbers.|



Random (variance)
-----------------

This type of number provider generates random numbers spread around the number
`0`, based on a number called `variance`. It does so by generating two random
numbers between `0` (inclusive) and `variance` (exclusive) and subtracting the
first from the second. Due to this method, numbers closer to `0` are more likely
to be generated.

This number provider is an object with the following value.


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`variance`|Number / number provider|-|Used as both the upper and lower limit of the randomly generated numbers. For example, when set to `3`, numbers between `-3` and `3` (not including those two) may be generated.|



World value
-----------

A world value number provider returns values from the world that features are
being generated in. It is an object with the following value.


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`world-data`|String|-|The name of the world value to provide.|


The following world values are available:

`WORLD_HEIGHT`
: The total height of the world, in blocks.

`SEA_LEVEL`
: The altitude seen as "sea level" in the world.

`GROUND_LEVEL`
: The altitude seen as the "average ground level" in the world.

`RAIN_HEIGHT`
: The altitude at which rainfall becomes snowfall at the current X and Z
coordinates of the world generator.

`HIGHEST_BLOCK`
: The altitude of the highest block at the current X and Z coordinates of the
world generator.

`SURFACE_BLOCK`
: The altitude of the highest block at the current X and Z coordinates of the
world generator, ignoring plants and trees.

`HEIGHT_MAP`
: The altitude of the highest block at the current X and Z coordinates of the
world generator, according to the chunk's [height
map](https://minecraft.gamepedia.com/Chunk_format) which is used for calculating
light.

`LOWEST_CHUNK_HORIZON`
: The altitude of the lowest block with a direct line of sight to the sky in the
chunk at the current X and Z coordinates of the world generator.

`SPAWN_X`
: The X coordinate of the world's spawn point.

`SPAWN_Y`
: The Y coordinate of the world's spawn point.

`SPAWN_Z`
: The Z coordinate of the world's spawn point.

`CURRENT_X`
: The current X coordinate of the world generator.

`CURRENT_Y`
: The current Y coordinate of the world generator.

`CURRENT_Z`
: The current Z coordinate of the world generator.


Operation
---------

An operation number provider performs an operation using two given values. It
can perform various types of operations such as addition and multiplication. It
is an object with the following values.


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`value-a`|Number / number provider|-|The first value in the operation.|
|`value-b`|Number / number provider|-|The second value in the operation.|
|`operation`|String|-|The type of operation to perform.|


The following operation types are available:

`ADD`
: Add the second value to the first value.

`SUBTRACT`
: Subtract the second value from the first value.

`MULTIPLY`
: Multiply the first value by the second value.

`DIVIDE`
: Divide the first value by the second value.

`MODULO`
: Return the remainder of dividing the first value by the second value.

`MINIMUM`
: Return the lesser value of the two.

`MAXIMUM`
: Return the greater value of the two.


Bounded
-------

A bounded number provider applies a minimum and maximum value to a given value,
increasing it when it is too low and decreasing it when it is too high. It is an
object with the following values.


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`value`|Number / number provider|-|The value to apply a minimum and maximum value to.|
|`min`|Number / number provider|-|The minimum value.|
|`max`|Number / number provider|-|The maximum value.|



Examples
--------

Coming soon...
