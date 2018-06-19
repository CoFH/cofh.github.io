---
title: large-vein
nav: cofh-world
---

**`large-vein`** is one of the [feature
types](/docs/cofh-world/world-generator-configuration/feature-types/) provided
by [CoFH World](/docs/cofh-world/). It generates somewhat round deposits of
blocks, much like
[`cluster`](/docs/cofh-world/world-generator-configuration/feature-types/cluster/).
However, these deposits may be much larger and more spread out than those
generated with `cluster`.

<!-- TODO: not exactly blobs. it actually generates in branches, but they tend
to be thick so it turns out as a blob anyway, and this can now be changed using
`spindly`. -->


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
                <td>
                    How large the deposits are. This value is not measured in
                    blocks, so some experimenting is needed to obtain the
                    desired result.
                </td>
            </tr>
            <tr>
                <td markdown="span">`sparse` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`true`</td>
                <td markdown="span">
                    If `true`, generated deposits are smaller and more spread
                    out, looking somewhat like neurons. If `false`, the deposits
                    are much larger and denser, and look more like those
                    generated with `cluster`.
                </td>
            </tr>
            <tr>
                <td markdown="span">`spindly` (optional)</td>
                <td>Boolean</td>
                <td markdown="span">`false`</td>
                <td markdown="span">
                    TODO
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
