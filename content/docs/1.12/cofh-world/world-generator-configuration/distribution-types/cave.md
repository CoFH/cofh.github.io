---
category: Configuration
show_image: false
subcategory: Distribution types
title: cave
---

**`cave`** is one of the [distribution types](../) provided by [CoFH
World](../../../). It distributes features in the floors or ceilings of caves.
It does so by randomly picking X and Z coordinates and a Y coordinate below
ground, finding the nearest cave (if any), and placing features in the cave's
floor or ceiling at those X and Z coordinates.

If a cave cannot be found at randomly chosen coordinates, it still counts
towards the value `cluster-count` of the [feature
entry](../../feature-format/#features).

When using this distribution type, the feature type
[`cluster`](../../feature-types/cluster/) is used by default, and the value
`material` of [feature type
configurations](../../feature-format/#feature-type-configuration) is set to
[stone](https://minecraft.gamepedia.com/Stone) (and all of its variations) by
default.


Options
-------

When using this distribution type, the following values may be added to the
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
                <td markdown="span">`ceiling` (optional)</td>
                <td markdown="span">Boolean</td>
                <td markdown="span">`false`</td>
                <td markdown="span">
                    If `false`, features are distributed in floors of caves. If
                    `true`, they are distributed in ceilings.
                </td>
            </tr>
            <tr>
                <td markdown="span">`ground-level` (optional)</td>
                <td markdown="span">
                    Number / [number provider](../../common-formats/number-provider/)
                </td>
                <td markdown="span">(Taken from world)</td>
                <td markdown="span">
                    The altitude below which to look for caves to distribute
                    features in. Evaluated once per feature.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
