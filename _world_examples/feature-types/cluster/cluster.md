---
link:
  docs: /docs/cofh-world/world-generator-configuration/feature-types/cluster/
  code:
    embed: https://gist.github.com/sustained/b32fe2255dc566700e93f8653aafe8cc.js
    download: https://gist.github.com/sustained/b32fe2255dc566700e93f8653aafe8cc/archive/2098dee6eaa663bdc6b5132caf51e034784656fc.zip
type: feature
group: cluster
title: "Cluster: Iron Ore Clusters"
primary: true
images:
  -
    href: cluster/primary/one.png
    title: An individual cluster of iron ore.
  -
    href: cluster/primary/two.png
    title: A view from below of a 5x5 chunk area with everything stripped except the iron ore.
  -
    href: cluster/primary/three.png
    title: A view from above of a 5x5 chunk area with everything stripped except the iron ore (which is highlighted).
---

Next we'll spawn some clusters of iron ore.

- Our clusters have a `cluster-size` of 8 (note that this is not equivalent to number of blocks).
- They will be spawned between Y=0 and Y=64 (see: `min-height`, `max-height`).
- One in eight chunks will spawn this feature (see: `chunk-chance`).
- For each of those chunks, the generator will attempt to spawn our feature eight times (see: `cluster-count`).
