---
category: Configuration
show-image: false
subcategory: Feature types
title: spout
---

**`spout`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates columns of blocks of a certain height. The
columns are generated from the bottom up, starting from the coordinates where
the features are placed. This can be used to generate 'spouts' of fluid that
emerge from underground.


Options
-------

When using this feature type, the following values must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).

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
                    [Block ID](../../common-formats/block-id/)
                    / array of block IDs
                </td>
                <td>-</td>
                <td markdown="span">
                    The type(s) of block that the spouts consist of. When
                    specified as an array, a block type is selected randomly for
                    each generated block.
                </td>
            </tr>
            <tr>
                <td markdown="span">`radius`</td>
                <td markdown="span">
                    Number / [number provider](../../common-formats/number-provider/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The radius of a spout, in blocks. A radius of `0` will cause
                    spouts of one block wide to be generated. May contain values
                    up to 8. Evaluated once per layer in each spout.
                </td>
            </tr>
            <tr>
                <td markdown="span">`height`</td>
                <td markdown="span">
                    Number / [number provider](../../common-formats/number-provider/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The height of a spout, in blocks. Evaluated once per spout.
                </td>
            </tr>
            <tr>
                <td markdown="span">`shape` (optional)</td>
                <td markdown="span">String</td>
                <td markdown="span">`"CIRCLE"`</td>
                <td markdown="span">
                    The shape of spouts as seen from above. Possible values are
                    `"CIRCLE"` and `"SQUARE"`.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
