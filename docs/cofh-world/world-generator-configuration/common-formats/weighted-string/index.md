---
title: Weighted string
nav: cofh-world
---

A **weighted string** is a format used while describing
[features](/docs/cofh-world/world-generator-configuration/feature-format/) to
specify a string along with its chance of being randomly selected from a list of
strings.


Format
------

A weighted string is an object with the following values.

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
                <td markdown="span">`name`</td>
                <td markdown="span">String</td>
                <td markdown="span">-</td>
                <td markdown="span">
                    The string itself.
                </td>
            </tr>
            <tr>
                <td markdown="span">`weight` (optional)</td>
                <td markdown="span">Number</td>
                <td markdown="span">`100`</td>
                <td markdown="span">
                    How likely the string is to be selected when it is part of
                    an array of strings to randomly choose from. Strings with a
                    greater weight have a higher chance of being selected.
                </td>
            </tr>
        </tbody>
    </table>
</div>

A weighted string may also be specified as just a string. In that case, the
string is given the default weight.


Examples
--------

{% include examples.html group="weighted-string" primary=true %}
{% include examples.html group="weighted-string" primary=false %}
