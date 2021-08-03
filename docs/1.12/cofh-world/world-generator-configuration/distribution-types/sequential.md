---
category: Configuration
show-image: false
subcategory: Distribution types
title: sequential
---

**`sequential`** is one of the [distribution types](../) provided by [CoFH
World](../../../). It distributes the same features multiple times in the same
chunk, using one distribution after the other.


Options
-------

When using this distribution type, the following value must be added to the
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
                <td markdown="span">`features`</td>
                <td markdown="span">
                    Array of [feature entry](../../feature-format/#features)-like
                    objects
                </td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The distributions to distribute features with in sequence.
                    The objects in the array are mostly equal to
                    [feature entries](../../feature-format/#features),
                    except the values `generator` and `enabled` cannot be
                    specified. These can only be set in the base feature entry.
                </td>
            </tr>
        </tbody>
    </table>
</div>


Examples
--------

Coming soon...
