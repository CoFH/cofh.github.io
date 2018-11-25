---
title: Number provider
nav: cofh-world
_TODO:
  - replace "Number" with "Number provider" for options that can use them
---

A **number provider** is a format used while describing
[features](/docs/cofh-world/world-generator-configuration/feature-format/)
specify a source of numbers. It can often be used in places where a regular
number can be specified. They can return the same or a different number each
time the world generator asks them for one.

As an example, the world generator can ask a number provider for a number when
determining how large a deposit of blocks should be. This could be a constant
value, a random value each time, or a value that gets higher or lower based on
the altitude of the deposit.

There are six types of number providers: constants, two types of random number
generators, world values, operations and bounded values. Most types allow for
nesting as other number providers may be used to configure them.


Constant
--------

A constant number provider provides the same value each time. It is equivalent
to simply specifying a number. It is an object with the following value.

<div class="uk-overflow-container">
    <table class="uk-table uk-table-striped uk-text-small">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td markdown="span">`value`</td>
                <td markdown="span">Number</td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The number to provide.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Random (minimum/maximum)
------------------------

This type of number provider generates random numbers between a minimum and a
maximum value, where each possible result is equally likely. It is an object
with the following values.

<div class="uk-overflow-container">
    <table class="uk-table uk-table-striped uk-text-small">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td markdown="span">`min`</td>
                <td markdown="span">Number / number provider</td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The lower limit of the randomly generated numbers.
                </td>
            </tr>
            <tr>
                <td markdown="span">`max`</td>
                <td markdown="span">Number / number provider</td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The upper limit of the randomly generated numbers.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Random (variance)
-----------------

This type of number provider generates random numbers spread around the number
`0`, based on a number called `variance`. It does so by generating two random
numbers between `0` (inclusive) and `variance` (exclusive) and subtracting the
first from the second. Due to this method, numbers closer to `0` are more likely
to be generated.

This number provider is an object with the following value.

<div class="uk-overflow-container">
    <table class="uk-table uk-table-striped uk-text-small">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td markdown="span">`variance`</td>
                <td markdown="span">Number / number provider</td>
                <td markdown="span">-</td>
                <td markdown="span">
                    Used as both the upper and lower limit of the randomly
                    generated numbers. For example, when set to `3`, numbers
                    between `-3` and `3` (not including those two) may be
                    generated.
                </td>
            </tr>
        </tbody>
    </table>
</div>


World value
-----------

A world value number provider returns values from the world that features are
being generated in. It is an object with the following value.

<div class="uk-overflow-container">
    <table class="uk-table uk-table-striped uk-text-small">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td markdown="span">`world-data`</td>
                <td markdown="span">String</td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The name of the world value to provide.
                </td>
            </tr>
        </tbody>
    </table>
</div>

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

An operation number provider performs an operation using two given values (which
may themselves be number providers). It can perform various types of operations
such as addition and multiplication. It is an object with the following values.

* `value-a`
* `value-b`
* `operation`
  * `ADD`
  * `SUBTRACT`
  * `MULTIPLY`
  * `DIVIDE`
  * `MODULO`
  * `MINIMUM`
  * `MAXIMUM`


Bounded
-------

A bounded number provider applies a minimum and maximum value to a given value
(which may itself be a number provider), increasing it when it is too low and
decreasing it when it is too high.

* `value`
* `min`
* `max`


Examples
--------

Coming soon...
