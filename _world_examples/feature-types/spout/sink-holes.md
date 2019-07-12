---
link:
  docs: /docs/cofh-world/world-generator-configuration/feature-types/spout/
type: feature
group: spout
title: Sinkholes
primary: false
images:
  -
    href: spout/sinkholes/one.png
    title: A sinkhole extending down to a ravine, viewed from above the ground.
  -
    href: spout/sinkholes/two.png
    title: The same sinkhole as viewed from the side in spectator mode.
  -
    href: spout/sinkholes/three.png
    title: Several sinkholes reaching into different caves and ravines from the side in spectator mode.
---

This is an example of spawning sinkholes which reach down into caves/ravines and other underground open areas.

```json
{
  "populate": {
    "spout_example": {
      "distribution": "cave",
      "generator": {
        "type": "spout",
        "block": "minecraft:air",
        "radius": 3,
        "height": {
          "value-a": {
            "value-a": {
              "world-data": "SURFACE_BLOCK"
            },
            "value-b": {
              "world-data": "CURRENT_Y"
            },
            "operation": "SUBTRACT"
          },
          "value-b": 20,
          "operation": "ADD"
        },
        "material": [
          "minecraft:dirt",
          "minecraft:sand",
          "minecraft:stone",
          "minecraft:sandstone",
          "minecraft:gravel",
          "minecraft:grass",
          "minecraft:log",
          "minecraft:leaves"
        ]
      },
      "cluster-count": 1,
      "chunk-chance": 8
    }
  }
}
```
