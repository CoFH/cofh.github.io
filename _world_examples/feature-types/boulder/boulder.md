---
link:
  docs: /docs/cofh-world/world-generator-configuration/feature-types/boulder/
  code:
    embed: https://gist.github.com/sustained/7d73ebefa0ef7f9c64be08fd05bece78.js
    download: https://gist.github.com/sustained/7d73ebefa0ef7f9c64be08fd05bece78/archive/6ca1d4a6c2a8057fd4106cd205fe90882c8b08b4.zip
type: feature
group: boulder
title: Boulder
primary: true
images:
  -
    href: boulder/primary/one.png
    title: A close-up of an individual boulder.
  -
    href: boulder/primary/two.png
    title: A wide shot of many boulders littered across the landscape.
  -
    href: boulder/primary/three.png
    title: A birdseye-view of many boulders.
---

Let's spawn some boulders made of cobblestone and mossy cobblestone (see: `block`) upon the surface of the world.

- Our boulders have a `diameter` of 3 and a `size-variance` of 2 (which is the default).
- One in four chunks will spawn this feature (see: `chunk-chance`).
- For each of those chunks, the generator will attempt to spawn our feature once (see: `cluster-count`).
- Each cluster is comprised of a single boulder (see: `count`).