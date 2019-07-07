---
title: Examples (CoFH World)
nav: cofh-world
---

{% include notice.html notice="This page is a work-in-progress. Hard hats are recommended." %}

Here you will find one simple example for each [feature](world-generator-configuration/feature-types/) and [distribution type](world-generator-configuration/distribution-types/).

Every example includes:

- a brief description
- a link to the documentation
- a link to an example JSON file
- a gallery of images

The actual feature and distribution type pages themselves, however, include many many more examples; this page is intended only to provide you with an overview.

{% assign features = site.world_examples
  | where: "type", "feature"
  | where: "primary", true
%}

{% assign distributions = site.world_examples
  | where: "type", "distribution"
  | where: "primary", true
%}

## Feature Type Examples

{% for example in features %}

### {{ example.title }}

  {% include example.md
  type=example.type
  link=example.link
  title=example.title
  images=example.images
  primary=example.primary
  content=example.content %}

{% endfor %}

--------

## Distribution Type Examples

{% for example in distributions %}

  {% include example.md
    type=example.type
    link=example.link
    title=example.title
    images=example.images
    content=example.content %}

{% endfor %}

--------

## Contributing Examples

If you feel that you have examples of generation which aren't covered by this guide which you'd like to contribute then please [open an issue](#).
