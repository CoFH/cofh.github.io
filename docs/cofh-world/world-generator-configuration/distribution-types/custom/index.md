---
title: custom
nav: cofh-world
---

**`custom`** is one of the [distribution
types](/docs/cofh-world/world-generator-configuration/distribution-types/)
provided by [CoFH World](/docs/cofh-world/). It distributes features at
user-specified coordinates in each chunk.

When using this distribution type, the feature type
[`cluster`](/docs/cofh-world/world-generator-configuration/feature-types/cluster/)
is used by default, and the value `material` of [feature type
configurations](/docs/cofh-world/world-generator-configuration/feature-format/#feature-type-configuration)
is set to [stone](https://minecraft.gamepedia.com/Stone) (and all of its
variations) by default.


Options
-------

When using this distribution type, the following values must be added to the
[feature
entry](/docs/cofh-world/world-generator-configuration/feature-format/#features).

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
                <td markdown="span">Number</td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The X coordinate at which to place features, relative to the
                    center of each chunk.
                </td>
            </tr>
            <tr>
                <td markdown="span">`y-offset`</td>
                <td markdown="span">Number</td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The Y coordinate at which to place features.
                </td>
            </tr>
            <tr>
                <td markdown="span">`z-offset`</td>
                <td markdown="span">Number</td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The Z coordinate at which to place features, relative to the
                    center of each chunk.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
