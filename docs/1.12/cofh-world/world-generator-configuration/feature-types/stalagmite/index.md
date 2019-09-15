---
title: stalagmite
nav: cofh-world
redirect_from:
- /docs/cofh-world/world-generator-configuration/feature-types/stalagmite/
---

**`stalagmite`** is one of the [feature
types](/docs/1.12/cofh-world/world-generator-configuration/feature-types/) provided
by [CoFH World](/docs/1.12/cofh-world/). It generates upwards pointing spikes. The
shape of these spikes is different than those generated using
[`spike`](/docs/1.12/cofh-world/world-generator-configuration/feature-types/spike/).

Stalagmites are only generated on the surface or underground. They are never
generated in midair.

The value `material` of a [feature type
configuration](/docs/1.12/cofh-world/world-generator-configuration/feature-format/#feature-type-configuration)
is only used to determine the position of stalagmites. When generating the
stalagmites themselves, the option `gen-body` is used instead.


Options
-------

When using this feature type, the following values must be added to the [feature
type
configuration](/docs/1.12/cofh-world/world-generator-configuration/feature-format/#feature-type-configuration).

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
                <td markdown="span">`block`</td>
                <td markdown="span">
                    [Block ID](/docs/1.12/cofh-world/world-generator-configuration/common-formats/block-id/)
                    / array of block IDs
                </td>
                <td>-</td>
                <td markdown="span">
                    The type(s) of block that stalagmites consist of. When
                    specified as an array, a block type is selected randomly for
                    each generated block.
                </td>
            </tr>
            <tr>
                <td markdown="span">`gen-body` (optional)</td>
                <td markdown="span">
                    [Block ID](/docs/1.12/cofh-world/world-generator-configuration/common-formats/block-id/)
                    / array of block IDs
                </td>
                <td markdown="span">Air</td>
                <td markdown="span">
                    The type(s) of block that may be replaced to generate
                    stalagmites.
                </td>
            </tr>
            <tr>
                <td markdown="span">`min-height` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`7`</td>
                <td markdown="span">
                    The minimum height of a stalagmite, in blocks.
                </td>
            </tr>
            <tr>
                <td markdown="span">`height-variance` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`4`</td>
                <td markdown="span">
                    The maximum amount of blocks that may be randomly added to
                    the minimum height of a stalagmite.
                </td>
            </tr>
            <tr>
                <td markdown="span">`height-mod` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`5`</td>
                <td markdown="span">
                    Used to calculate the minimum radius of the base of a
                    stalagmite dynamically. The radius is equal to the height of
                    the stalagmite divided by this value. Only used if
                    `gen-size` is set to `0`.
                </td>
            </tr>
            <tr>
                <td markdown="span">`gen-size` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`0`</td>
                <td markdown="span">
                    The minimum radius of the base of a stalagmite, in blocks.
                    If set to `0`, the radius is calculated dynamically based on
                    the stalagmite's height.
                </td>
            </tr>
            <tr>
                <td markdown="span">`size-variance` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`2`</td>
                <td markdown="span">
                    The maximum amount of blocks that may be randomly added to
                    the minimum radius of the base of a stalagmite.
                </td>
            </tr>
            <tr>
                <td markdown="span">`smooth` (optional)</td>
                <td markdown="span">Boolean</td>
                <td markdown="span">`false`</td>
                <td markdown="span">
                    If `true`, stalagmites have a smoother shape from bottom to
                    top. If `false`, they are more narrow towards the top,
                    making them more pointy.
                </td>
            </tr>
            <tr>
                <td markdown="span">`fat` (optional)</td>
                <td markdown="span">Boolean</td>
                <td markdown="span">`true`</td>
                <td markdown="span">
                    If `true`, stalagmites are wider from bottom to top.
                </td>
            </tr>
            <tr>
                <td markdown="span">`alt-sinc` (optional)</td>
                <td markdown="span">Boolean</td>
                <td markdown="span">`false`</td>
                <td markdown="span">
                    If `true`, the sides of stalagmites are shaped more
                    unevenly, making them look more natural. This is more
                    obvious when `smooth` is set to `true`.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
