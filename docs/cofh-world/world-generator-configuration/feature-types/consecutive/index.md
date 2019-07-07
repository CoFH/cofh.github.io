---
title: consecutive
nav: cofh-world
---

**`consecutive`** is one of the [feature
types](/docs/cofh-world/world-generator-configuration/feature-types/) provided
by [CoFH World](/docs/cofh-world/). It loops through a list of features,
providing the next feature in the list each time a feature is generated. Note
that the list is looped through separately per chunk; if one feature is
generated per chunk, only one feature in the list will be generated.


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
                    and/or arrays of feature type configurations
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The features to generate consecutively. Each item in the
                    array is either a
                    [feature type configuration](/docs/cofh-world/world-generator-configuration/feature-format/#feature-type-configuration)
                    or an array of them. When specified as an array, a feature
                    type configuration is selected randomly each time the
                    feature is generated.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

{% include examples.html group="consecutive" primary=false %}
