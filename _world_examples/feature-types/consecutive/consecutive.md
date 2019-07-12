---
link:
  docs: /docs/cofh-world/world-generator-configuration/feature-types/consecutive/
  code:
    embed: https://gist.github.com/sustained/4da2c926a9040b9bfe925f6400eae87e.js
    download: https://gist.github.com/sustained/4da2c926a9040b9bfe925f6400eae87e/archive/1b54e077b442c202943191f571db7a89df54fcdb.zip
type: feature
group: consecutive
title: Consecutive
primary: true
images:
  -
    href: consecutive/primary/one.png
    title: A close up of a group of 4 spikes.
  -
    href: consecutive/primary/two.png
    title: Shows several groups of spikes scattered around from up high.
  -
    href: consecutive/primary/three.png
    title: A single group of spikes from a birds-eye view.
---

We'll make it so that 1 in 64 chunks have a chance of spawning a group of 4 spikes.

The spikes will consist of andesite, diorite, granite and stone.

The world generator will go through the `generators` **consecutively**:

* First it will try to spawn a spike made of stone.
* Secondly it will try andesite.
* etc.

This will happen 4 times (`cluster-count`) for each chunk chosen.

Bear in mind that generation attempts can fail! So it's possible that a stone spike will be generated then an andesite spike will be attempted (but fail) and next a granite spike will be spawned.
