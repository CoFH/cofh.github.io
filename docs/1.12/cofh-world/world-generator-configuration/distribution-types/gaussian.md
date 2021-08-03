---
category: Configuration
show-image: false
subcategory: Distribution types
title: gaussian
---

**`gaussian`** is one of the [distribution types](../) provided by [CoFH
World](../../../). It distributes features spread around a certain altitude. The
features are the most common at that altitude and gradually become less common
further away from it. [Lapis lazuli
ore](https://minecraft.gamepedia.com/Lapis_Lazuli_Ore) is distributed like this.

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
                <td markdown="span">`center-height`</td>
                <td markdown="span">
                    Number / [number provider](../../common-formats/number-provider/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The altitude to place features around. Evaluated once per
                    feature.
                </td>
            </tr>
            <tr>
                <td markdown="span">`spread`</td>
                <td markdown="span">
                    Number / [number provider](../../common-formats/number-provider/)
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The maximum distance from the center altitude at which
                    features may be placed, in blocks. Evaluated once per
                    feature.
                </td>
            </tr>
            <tr>
                <td markdown="span">`smoothness` (optional)</td>
                <td markdown="span">
                    Number / [number provider](../../common-formats/number-provider/)
                </td>
                <td markdown="span">`2`</td>
                <td markdown="span">
                    Determines how smoothly the amount of features declines when
                    further from the center altitude. Must be greater than zero.
                    The default value makes the decline roughly linear. Higher
                    values may cause small amounts of features to be placed
                    beyond the configured altitudes. Evaluated once per feature.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
