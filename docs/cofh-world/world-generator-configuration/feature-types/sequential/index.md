---
title: sequential (feature type)
nav: cofh-world
---

**`sequential`** is one of the [feature
types](/docs/cofh-world/world-generator-configuration/feature-types/) provided
by [CoFH World](/docs/cofh-world/). It generates multiple features at the same
location, one after the other.

When using this feature type, the value `block` does not need to be specified in
the base [feature type
configuration](/docs/cofh-world/world-generator-configuration/feature-format/#feature-type-configuration).


Options
-------

When using this feature type, the following value must be added to the [feature
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
                <td markdown="span">`generators`</td>
                <td markdown="span">
                    Array of
                    [feature type configurations](/docs/cofh-world/world-generator-configuration/feature-format/#feature-type-configuration)
                    and/or
                    [weighted arrays](/docs/cofh-world/world-generator-configuration/common-formats/weighted-array/)
                    of feature type configurations
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The features to generate in sequence. Each item in the
                    array is either a
                    [feature type configuration](/docs/cofh-world/world-generator-configuration/feature-format/#feature-type-configuration)
                    or a
                    [weighted array](/docs/cofh-world/world-generator-configuration/common-formats/weighted-array/)
                    of them. When specified as a weighted array, one of the
                    feature type configurations is chosen randomly each time the
                    feature is generated.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
