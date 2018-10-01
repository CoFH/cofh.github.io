---
title: geode
nav: cofh-world
---

**`geode`** is one of the [feature
types](/docs/cofh-world/world-generator-configuration/feature-types/) provided
by [CoFH World](/docs/cofh-world/). It generates structures that are similar to
[lakes](/docs/cofh-world/world-generator-configuration/feature-types/lake/),
except completely filled with and surrounded by blocks. They can also contain a
core of different blocks at the center.

The configured primary block(s) to generate the feature with is used to generate
the content of geodes.


Options
-------

When using this feature type, the following values may be added to the [feature
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
                <td markdown="span">`crust` (optional)</td>
                <td markdown="span">
                    [Block ID](/docs/cofh-world/world-generator-configuration/common-formats/block-id/)
                    / array of block IDs
                </td>
                <td markdown="span">Stone</td>
                <td markdown="span">
                    The block(s) used to generate the outermost layer of geodes.
                    When specified as an array, a block type is selected
                    randomly for each generated block.
                </td>
            </tr>
            <tr>
                <td markdown="span">`hollow` (optional)</td>
                <td markdown="span">Boolean</td>
                <td markdown="span">`false`</td>
                <td markdown="span">
                    If `true`, allows a core of different blocks to be
                    generated using `filler`.
                </td>
            </tr>
            <tr>
                <td markdown="span">`filler` (optional)</td>
                <td markdown="span">
                    [Block ID](/docs/cofh-world/world-generator-configuration/common-formats/block-id/)
                    / array of block IDs
                </td>
                <td markdown="span">(None)</td>
                <td markdown="span">
                    The blocks(s) used to generate a core of different blocks
                    at the center of geodes. This only works if `hollow` is set
                    to `true`. When specified as an array, a block type is
                    selected randomly for each generated block.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
