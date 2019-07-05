---
link:
  # An absolute internal link to the corresponding documentation page.
  docs: /foo/bar/baz/
  # An absolute (internal or external) link to the example JSON file.
  file: https://gist.github/user/f83og0247gh078h0327hgs30972th087
# Can be either distribution or feature.
type: feature
# The group is important since we can't group things by directory/Jekyll doesn't
# support "sub-collections". The group allows us to use the groupBy Liquid filter
# on the examples collection. TL;DR: EVERY example for each INDIVIDUAL 
# distribution and feature type all belong to the same group.
group: boulder
# Self-explanatory.
title: My lovely title.
# Can be either true or false. If true, this is regarded as the primary example 
# which for now just means that it shows up on the big examples page. Otherwise
# it will show up on the actual documentation page for the feature/distribution type.
primary: true | false
# Self-explanatory. Note that for now the images must be in assetse/examples/ and
# external images are not supported.
images:
  -
    href: example1.png
    title: I am the first example.
  -
    href: example2.png
    title: I am the second title.
  -
    href: example3.png
    title: I am the third title.
---

The description goes here. You can use arbitrary markdown, should you desire.
