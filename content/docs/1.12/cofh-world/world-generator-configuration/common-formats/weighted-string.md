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


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|`name`|String|-|The string itself.|
|`weight` (optional)|Number|`100`|How likely the string is to be selected when it is part of an array of strings to randomly choose from. Strings with a greater weight have a higher chance of being selected.|


A weighted string may also be specified as just a string. In that case, the
string is given the default weight.


Examples
--------

Coming soon...
