---
title: uniform
redirect_from:
- /docs/cofh-world/world-generator-configuration/distribution-types/uniform/
---

**`uniform`** is one of the [distribution types](../) provided by [CoFH
World](../../../). It distributes features evenly between a minimum and maximum
altitude. Most [ores](https://minecraft.wiki/w/Ore) are distributed like
this.

When using this distribution type, the feature type
[`cluster`](../../feature-types/cluster/) is used by default, and the value
`material` of [feature type
configurations](../../feature-format/#feature-type-configuration) is set to
[stone](https://minecraft.wiki/w/Stone) (and all of its variations) by
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
                <td markdown="span">`min-height`</td>
                <td markdown="span">
                    Number / [number provider](../../common-formats/number-provider/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The minimum altitude to place features at. Evaluated once
                    per chunk.
                </td>
            </tr>
            <tr>
                <td markdown="span">`max-height`</td>
                <td markdown="span">
                    Number / [number provider](../../common-formats/number-provider/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The maximum altitude to place features at. Evaulated once
                    per chunk.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
