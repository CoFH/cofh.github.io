---
title: structure
redirect_from:
- /docs/cofh-world/world-generator-configuration/feature-types/structure/
---

**`structure`** is one of the [feature
types](/docs/1.12/cofh-world/world-generator-configuration/feature-types/) provided
by [CoFH World](/docs/1.12/cofh-world/). It generates structures loaded from NBT
files; the same files that [structure
blocks](https://minecraft.gamepedia.com/Structure_Block) use. One structure is
generated per chunk.


Options
-------

When using this feature type, the following value must be added to the [feature
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
                <td markdown="span">`structure`</td>
                <td markdown="span">
                    String / array of
                    [weighted strings](/docs/1.12/cofh-world/world-generator-configuration/common-formats/weighted-string/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The path to the NBT file of the structure to generate. The
                    path is relative to the file that the feature is specified
                    in. If specified as an array, a file is selected randomly each
                    time the feature is generated.
                </td>
            </tr>
            <tr>
                <td markdown="span">`ignored-block` (optional)</td>
                <td markdown="span">
                    [Block ID](/docs/1.12/cofh-world/world-generator-configuration/common-formats/block-id/)
                    / array of block IDs
                </td>
                <td markdown="span">(None)</td>
                <td markdown="span">
                    A type of block in the structure that should not be
                    generated. For example, this can be set to air blocks to
                    prevent structures that include air blocks from carving out
                    terrain. If specified as an array, a single block type is
                    selected randomly each time the feature is generated.
                </td>
            </tr>
            <tr>
                <td markdown="span">`ignore-entities` (optional)</td>
                <td markdown="span">Boolean</td>
                <td markdown="span">`false`</td>
                <td markdown="span">
                    If `true`, entities included in the structure file are not
                    generated with the structure.
                </td>
            </tr>
            <tr>
                <td markdown="span">`integrity` (optional)</td>
                <td markdown="span">
                    Number /
                    [number provider](/docs/1.12/cofh-world/world-generator-configuration/common-formats/number-provider/)
                </td>
                <td markdown="span">`1`</td> <!-- actually 2 but that doesn't make a difference -->
                <td markdown="span">
                    If lower than `1`, the structure is generated with random
                    blocks removed from it. May be any value between `0` and
                    `1`. Lower values will result in more blocks being removed.
                    Evaluated once per structure.
                </td>
            </tr>
            <tr>
                <td markdown="span">`rotation` (optional)</td>
                <td markdown="span">
                    String / array of
                    [weighted strings](/docs/1.12/cofh-world/world-generator-configuration/common-formats/weighted-string/)
                </td>
                <td markdown="span">(All rotations)</td>
                <td markdown="span">
                    The possible rotations of the generated structure. Possible
                    values are `"NONE"`, `"CLOCKWISE_90"`, `"CLOCKWISE_180"` and
                    `"COUNTERCLOCKWISE_90"`. When specified as an array, a
                    rotation is selected randomly for each generated structure.
                </td>
            </tr>
            <tr>
                <td markdown="span">`mirror` (optional)</td>
                <td markdown="span">
                    String / array of
                    [weighted strings](/docs/1.12/cofh-world/world-generator-configuration/common-formats/weighted-string/)
                </td>
                <td markdown="span">`"NONE"`</td>
                <td markdown="span">
                    The possible ways in which the generated structure may be
                    mirrored. Possible values are `"NONE"`, `"LEFT_RIGHT"` and
                    `"FRONT_BACK"`. When specified as an array, an item is
                    selected randomly for each generated structure.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
