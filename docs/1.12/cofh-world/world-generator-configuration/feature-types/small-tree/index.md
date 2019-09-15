---
title: small-tree
redirect_from:
- /docs/cofh-world/world-generator-configuration/feature-types/small-tree/
---

**`small-tree`** is one of the [feature
types](/docs/1.12/cofh-world/world-generator-configuration/feature-types/) provided
by [CoFH World](/docs/1.12/cofh-world/). It generates small oak-shaped trees.


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
                    The block(s) used to generate the trunks of trees. When
                    specified as an array, a block type is selected randomly for
                    each generated block.
                </td>
            </tr>
            <tr>
                <td markdown="span">`surface` (optional)</td>
                <td markdown="span">
                    [Block ID](/docs/1.12/cofh-world/world-generator-configuration/common-formats/block-id/)
                    / array of block IDs
                </td>
                <td>(Any block)</td>
                <td>
                    The block(s) that trees may be generated on top of. If the
                    given value is invalid, this is set to grass blocks and
                    dirt.
                </td>
            </tr>
            <tr>
                <td markdown="span">`leaves` (optional)</td>
                <td markdown="span">
                    [Block ID](/docs/1.12/cofh-world/world-generator-configuration/common-formats/block-id/)
                    / array of block IDs
                </td>
                <td>(None)</td>
                <td>
                    The block(s) used to generate the leaves of trees. When
                    specified as an array, a block type is selected randomly for
                    each generated block.
                </td>
            </tr>
            <tr>
                <td markdown="span">`min-height` (optional)</td>
                <td>Number</td>
                <td markdown="span">`5`</td>
                <td>The minimum height of trees, in blocks.</td>
            </tr>
            <tr>
                <td markdown="span">`height-variance` (optional)</td>
                <td>Number</td>
                <td markdown="span">`3`</td>
                <td>
                    The maximum amount of blocks that may be randomly added to
                    the height of trees.
                </td>
            </tr>
            <tr>
                <td markdown="span">`leaf-variance` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`true`</td>
                <td>
                    Whether or not blocks may be randomly removed from the
                    corners of the leaves of trees, giving them a more natural
                    look.
                </td>
            </tr>
            <tr>
                <td markdown="span">`tree-checks` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`true`</td>
                <td>
                    Whether to verify that trees can properly 'grow' before
                    generating them somewhere.
                </td>
            </tr>
            <tr>
                <td markdown="span">`relaxed-growth` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`false`</td>
                <td>
                    Whether trees may be generated with blocks adjacent to the
                    bottom.
                </td>
            </tr>
            <tr>
                <td markdown="span">`water-loving` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`false`</td>
                <td>Whether trees may be generated in water, up to the leaves.</td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
