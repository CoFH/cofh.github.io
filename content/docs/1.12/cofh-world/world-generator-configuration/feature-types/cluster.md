---
category: Configuration
show_image: false
subcategory: Feature types
title: cluster
---

**`cluster`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates somewhat round deposits of blocks. It is often
used for generating ores.


Options
-------

When using this feature type, the following values must be added to the [feature
type configuration](../../feature-format/#feature-type-configuration).


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
                    higher values do not increase the size any further.-->
                </td>
            </tr>
        </tbody>
    </table>



Examples
--------

Coming soon...
