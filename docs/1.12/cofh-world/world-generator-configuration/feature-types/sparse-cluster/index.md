---
title: sparse-cluster
redirect_from:
- /docs/cofh-world/world-generator-configuration/feature-types/sparse-cluster/
---

**`sparse-cluster`** is one of the [feature types](../) provided by [CoFH
World](../../../). It is nearly equivalent to [`cluster`](../cluster/), but
generates deposits of blocks more rarely when a smaller size is set.


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
                    The type(s) of block that the deposits consist of. When
                    specified as an array, a block type is selected randomly for
                    each generated block.
                </td>
            </tr>
            <tr>
                <td markdown="span">`cluster-size`</td>
                <td>Number</td>
                <td>-</td>
                <td markdown="span">
                    How large the deposits are. This value is not measured in
                    blocks, so some experimenting is needed to obtain the
                    desired result. <!--Seems to have an upper limit of `30`, as
                    higher values do not increase the size any further.--> When
                    lower than `4`, deposits only have a chance to be generated.
                    At `3`, 1 in 3 deposits will actually be generated. At `2`,
                    this is 1 in 6 deposits, and at `1` it is 1 in 12.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
