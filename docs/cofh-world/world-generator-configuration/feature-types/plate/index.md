---
title: plate
nav: cofh-world
---

**`plate`** is one of the [feature
types](/docs/cofh-world/world-generator-configuration/feature-types/) provided
by [CoFH World](/docs/cofh-world/). It generates vertical cylinders, similar to
[clay](https://minecraft.gamepedia.com/Clay_(block)) deposits.


Options
-------

When using this feature type, the following values must be added to the [feature
type
configuration](/docs/cofh-world/world-generator-configuration/feature-format/#feature-type-configuration).

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
                    [Block ID](/docs/cofh-world/world-generator-configuration/common-formats/block-id/)
                    / array of block IDs
                </td>
                <td>-</td>
                <td markdown="span">
                    The type(s) of block that the plates consist of. When
                    specified as an array, a block type is selected randomly for
                    each generated block.
                </td>
            </tr>
            <tr>
                <td markdown="span">`radius`</td>
                <td markdown="span">Number</td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The radius of a plate, in blocks. May contain values up to
                    32.
                </td>
            </tr>
            <tr>
                <td markdown="span">`height` (optional)</td>
                <td markdown="span">
                    Number /
                    [number provider](/docs/cofh-world/world-generator-configuration/common-formats/number-provider/)
                </td>
                <td markdown="span">`1`</td>
                <td markdown="span">
                    The amount of vertical layers to add to a plate both above
                    and below its center. For example, when set to `1`, plates
                    will be 3 blocks tall, and when set to `2`, plates will be
                    5 blocks tall. When set to `0`, plates will be 1 block tall.
                    May contain values up to 64. Evaluated once per plate.
                </td>
            </tr>
            <tr>
                <td markdown="span">`slim` (optional)</td>
                <td markdown="span">Boolean</td>
                <td markdown="span">`false`</td>
                <td markdown="span">
                    If `true`, the top layer of plates is not generated,
                    allowing plates that are an even number of blocks tall to be
                    generated. Plates are always an odd number of blocks tall by
                    default (see `height`).
                </td>
            </tr>
            <tr>
                <td markdown="span">`shape` (optional)</td>
                <td markdown="span">String</td>
                <td markdown="span">`"CIRCLE"`</td>
                <td markdown="span">
                    The shape of plates as seen from above. Possible values are
                    `"CIRCLE"` and `"SQUARE"`.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

{% include examples.html group="plate" primary=true %}
{% include examples.html group="plate" primary=false %}
