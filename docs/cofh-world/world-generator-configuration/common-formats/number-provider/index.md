---
title: Number provider
nav: cofh-world
---

### Uniform Range
This format describes a range for the parameter to choose from.

Parameters with a range will select a random value between the `min` and `max`
values specified. This random value is chosen once per chunk. For example, if
you set the `max-height` parameter with a `min` of 20 and a `max` of 60, then
the height distribution will vary between 20 and 60 for different chunks. This
can also be useful to vary the size of ore deposits, and the number of veins in
a chunk.

Syntax example:
`"min-height": {min:20, max:60},`
