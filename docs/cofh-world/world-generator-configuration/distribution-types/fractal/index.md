---
title: fractal
nav: cofh-world
---

**`fractal`** is one of the [distribution
types](/docs/cofh-world/world-generator-configuration/distribution-types/)
provided by [CoFH World](/docs/cofh-world/). It distributes all features to
generate in a chunk together in a box-shaped area. The size and altitude of this
area can be configured.

Large enough areas can reach into many other chunks, which can cause problems
with cascading world generation. These problems can be prevented using the value
`chunk-chance` in the [feature
entry](/docs/cofh-world/world-generator-configuration/feature-format/#features).

When using this distribution type, the feature type
[`large-vein`](/docs/cofh-world/world-generator-configuration/feature-types/large-vein/)
is used by default, and the value `material` of [feature type
configurations](/docs/cofh-world/world-generator-configuration/feature-format/#feature-type-configuration)
is set to [stone](https://minecraft.gamepedia.com/Stone) (and all of its
variations) by default.


Options
-------

When using this distribution type, the following values must be added to the
[feature
entry](/docs/cofh-world/world-generator-configuration/feature-format/#features).

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
                <td markdown="span">`min-height`</td>
                <td markdown="span">
                    Number /
                    [number provider](/docs/cofh-world/world-generator-configuration/common-formats/number-provider/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The altitude of the bottom of the area to distribute a
                    chunk's features in. Evaluated once per chunk.
                </td>
            </tr>
            <tr>
                <td markdown="span">`vein-height`</td>
                <td markdown="span">
                    Number /
                    [number provider](/docs/cofh-world/world-generator-configuration/common-formats/number-provider/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The height of the area to distribute a chunk's features in,
                    in blocks. Evaluated once per chunk.
                </td>
            </tr>
            <tr>
                <td markdown="span">`vein-diameter`</td>
                <td markdown="span">
                    Number /
                    [number provider](/docs/cofh-world/world-generator-configuration/common-formats/number-provider/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The width of the area to distribute a chunk's features in,
                    in blocks along the X and Z axes. Evaulated once per chunk.
                </td>
            </tr>
            <tr>
                <td markdown="span">`vertical-density`</td>
                <td markdown="span">
                    Number /
                    [number provider](/docs/cofh-world/world-generator-configuration/common-formats/number-provider/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    Determines how close together features should be vertically
                    in the area to distribute a chunk's features in. May be any
                    value between `0` and `100`. Evaluated once per chunk.
                </td>
            </tr>
            <tr>
                <td markdown="span">`horizontal-density`</td>
                <td markdown="span">
                    Number /
                    [number provider](/docs/cofh-world/world-generator-configuration/common-formats/number-provider/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    Determines how close together features should be
                    horizontally (along the X and Z axes) in the area to
                    distribute a chunk's features in. May be any value between
                    `0` and `100`. Evaluated once per chunk.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
