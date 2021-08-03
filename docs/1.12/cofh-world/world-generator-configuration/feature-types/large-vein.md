---
category: Configuration
show-image: false
subcategory: Feature types
title: large-vein
---

**`large-vein`** is one of the [feature types](../) provided by [CoFH
World](../../../). It generates deposits of blocks as a group of branches that
start from a center point. These types of deposits can get very large.

A deposit of blocks generated using `large-vein` consists of 'main branches' and
'sub-branches'. Main branches start from the center point of the deposit.
Sub-branches have a 1 in 3 chance of being generated from each block in a main
branch. Both types of branches are generated as strings of blocks that 'grow' in
random directions.


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
                    The maximum amount of main branches that generated deposits
                    consist of.<br />
                    <br />
                    `cluster-size` also determines the maximum lengths of
                    branches. Each main branch consists of up to
                    `1 + ([cluster-size] / 30)` blocks, and each sub-branch
                    consists of up to `1 + ([max. main branch length] / 5)`
                    blocks.
                </td>
            </tr>
            <tr>
                <td markdown="span">`sparse` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`true`</td>
                <td markdown="span">
                    If `true`, the total amount of main branches in deposits and
                    the amount of blocks in a main branch is reduced by 1 for
                    each block generated as part of a sub-branch. This causes
                    less main branches to be generated and makes them shorter,
                    while sub-branches keep the same maximum length.
                </td>
            </tr>
            <tr>
                <td markdown="span">`spindly` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`false`</td>
                <td markdown="span">
                    If `true`, the amount of main branches in deposits is
                    reduced by 1 for each block generated as part of a main
                    branch. This causes less main branches to be generated,
                    though they keep the same maximum length.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
