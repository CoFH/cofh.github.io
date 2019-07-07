---
title: decoration
nav: cofh-world
---

**`decoration`** is one of the [feature
types](/docs/cofh-world/world-generator-configuration/feature-types/) provided
by [CoFH World](/docs/cofh-world/). It generates groups of individual blocks
scattered around on a surface, like small plants and flowers.


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
                    The type(s) of block to generate in groups. When specified
                    as an array, a block type is selected randomly for each
                    generated block.
                </td>
            </tr>
            <tr>
                <td markdown="span">`cluster-size`</td>
                <td>Number</td>
                <td>-</td>
                <td>The maximum amount of blocks in each generated group.</td>
            </tr>
            <tr>
                <td markdown="span">`surface` (optional)</td>
                <td markdown="span">
                    [Block ID](/docs/cofh-world/world-generator-configuration/common-formats/block-id/)
                    / array of block IDs
                </td>
                <td>Grass block</td>
                <td>
                    The type(s) of block that blocks in a group may generate on
                    top of.
                </td>
            </tr>
            <tr>
                <td markdown="span">`see-sky` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`true`</td>
                <td>
                    Whether to only generate blocks in places with a direct line
                    of sight to the sky.
                </td>
            </tr>
            <tr>
                <td markdown="span">`check-stay` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`true`</td>
                <td>
                    Whether to only generate blocks when they can be sustained
                    by the blocks they are generated on top of. For example,
                    sugar canes can only be sustained by blocks next to water.
                </td>
            </tr>
            <tr>
                <td markdown="span">`stack-height` (optional)</td>
                <td markdown="span">
                    Number /
                    [number provider](/docs/cofh-world/world-generator-configuration/common-formats/number-provider/)
                </td>
                <td markdown="span">`1`</td>
                <td>
                    How many times to vertically stack each block in a group,
                    like cacti and sugar cane. Evaluated once per bottom block.
                </td>
            </tr>
            <tr>
                <td markdown="span">`x-variance` (optional)</td>
                <td markdown="span">
                    Number /
                    [number provider](/docs/cofh-world/world-generator-configuration/common-formats/number-provider/)
                </td>
                <td markdown="span">`8`</td>
                <td>
                    The maximum amount of blocks that may be randomly added to
                    the X coordinate of the position of a group to place the
                    blocks in the group. Evaluated once per block.
                </td>
            </tr>
            <tr>
                <td markdown="span">`y-variance` (optional)</td>
                <td markdown="span">
                    Number /
                    [number provider](/docs/cofh-world/world-generator-configuration/common-formats/number-provider/)
                </td>
                <td markdown="span">`4`</td>
                <td markdown="span">
                    The maximum amount of blocks that may be randomly added to
                    the Y coordinate of the position of a group to place the
                    blocks in the group. Note that non-zero values may cause
                    blocks to float in the air, or not generate at all depending
                    on the value `surface`. Evaluated once per block.
                </td>
            </tr>
            <tr>
                <td markdown="span">`z-variance` (optional)</td>
                <td markdown="span">
                    Number /
                    [number provider](/docs/cofh-world/world-generator-configuration/common-formats/number-provider/)
                </td>
                <td markdown="span">`8`</td>
                <td>
                    The maximum amount of blocks that may be randomly added to
                    the Z coordinate of the position of a group to place the
                    blocks in the group. Evaluated once per block.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

{% include examples.html group="decoration" primary=false %}
