---
title: decoration (feature type)
nav: cofh-world
---

**`decoration`** is one of the [feature
types](/docs/cofh-world/world-generator-configuration/feature-types/) provided
by [CoFH World](/docs/cofh-world/). It generates groups of individual blocks
scattered around on a surface, like small plants and flowers. It is meant to be
used with the [`decoration` distribution
type](/docs/cofh-world/world-generator-configuration/distribution-types/decoration/).


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
                <td>The block(s) that blocks in a group may generate on top of.</td>
            </tr>
            <tr>
                <td markdown="span">`see-sky` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`true`</td>
                <td>
                    Whether to only generate in places with a direct line of
                    sight to the sky.
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
                <td>Number</td>
                <td markdown="span">`1`</td>
                <td>
                    How many times to vertically stack each block in a group,
                    like cacti and sugar cane.
                </td>
            </tr>
            <tr>
                <td markdown="span">`x-variance` (optional)</td>
                <td>Number</td>
                <td markdown="span">`8`</td>
                <td>How spread out a group of blocks may be, in blocks along the X axis.</td>
            </tr>
            <tr>
                <td markdown="span">`y-variance` (optional)</td>
                <td>Number</td>
                <td markdown="span">`4`</td>
                <td>Ditto, except along the Y axis.</td>
            </tr>
            <tr>
                <td markdown="span">`z-variance` (optional)</td>
                <td>Number</td>
                <td markdown="span">`8`</td>
                <td>Ditto, except along the Z axis.</td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
