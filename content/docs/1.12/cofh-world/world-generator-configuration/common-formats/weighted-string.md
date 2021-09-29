---
category: Configuration
show_image: false
subcategory: Common formats
title: Weighted string
---

A **weighted string** is a format used while describing
[features](../../feature-format/) to specify a string along with its chance of
being randomly selected from a list of strings.


Format
------

A weighted string is an object with the following values.


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


A weighted string may also be specified as just a string. In that case, the
string is given the default weight.


Examples
--------

Coming soon...
