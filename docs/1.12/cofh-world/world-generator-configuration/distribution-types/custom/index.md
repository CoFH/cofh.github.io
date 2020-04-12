---
title: custom
redirect_from:
- /docs/cofh-world/world-generator-configuration/distribution-types/custom/
---

**`custom`** is one of the [distribution types](../) provided by [CoFH
World](../../../). It distributes features at user-specified coordinates in each
chunk.

When using this distribution type, the feature type
[`cluster`](../../feature-types/cluster/) is used by default, and the value
`material` of [feature type
configurations](../../feature-format/#feature-type-configuration) is set to
[stone](https://minecraft.gamepedia.com/Stone) (and all of its variations) by
default.


Options
-------

When using this distribution type, the following values must be added to the
[feature entry](../../feature-format/#features).

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
                <td markdown="span">`x-offset`</td>
                <td markdown="span">
                    Number / [number provider](../../common-formats/number-provider/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The X coordinate at which to place features, relative to the
                    center of each chunk. Evaluated once per feature.
                </td>
            </tr>
            <tr>
                <td markdown="span">`y-offset`</td>
                <td markdown="span">
                    Number / [number provider](../../common-formats/number-provider/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The Y coordinate at which to place features. Evaluated once
                    per feature.
                </td>
            </tr>
            <tr>
                <td markdown="span">`z-offset`</td>
                <td markdown="span">
                    Number / [number provider](../../common-formats/number-provider/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The Z coordinate at which to place features, relative to the
                    center of each chunk. Evaluated once per feature.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
