---
title: Covers
image:
- alt: Stone cover
  file: thermal-dynamics-2/cover-stone.png
- alt: Cobblestone cover
  file: thermal-dynamics-2/cover-cobblestone.png
- alt: Oak wood cover
  file: thermal-dynamics-2/cover-wood-log-oak.png
- alt: Oak wood planks cover
  file: thermal-dynamics-2/cover-wood-planks-oak.png
- alt: Sandstone cover
  file: thermal-dynamics-2/cover-sandstone.png
- alt: Nether brick cover
  file: thermal-dynamics-2/cover-nether-brick.png
- alt: Obsidian cover
  file: thermal-dynamics-2/cover-obsidian.png
- alt: Moss stone cover
  file: thermal-dynamics-2/cover-moss-stone.png
- alt: Bricks cover
  file: thermal-dynamics-2/cover-bricks.png
- alt: Polished granite cover
  file: thermal-dynamics-2/cover-granite-polished.png
- alt: Polished diorite cover
  file: thermal-dynamics-2/cover-diorite-polished.png
- alt: Polished andesite cover
  file: thermal-dynamics-2/cover-andesite-polished.png
- alt: End stone bricks cover
  file: thermal-dynamics-2/cover-end-stone-bricks.png
redirect_from:
- /docs/thermal-dynamics/attachments/covers/
- /docs/covers/
- /docs/thermal-dynamics/covers/
- /docs/thermal-dynamics-2/covers/
recipes:
  crafting:
  - td2-covers
---

**Covers** are items that can be installed on ducts to hide them, making them
look like blocks.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

A cover can be installed on any side of a duct by using it on the duct. It can
be removed by using a [wrench](/docs/1.12/wrenches/) on it.

Installed covers do not affect how ducts work in any way. When a duct goes
through a cover, a hole is made in the cover.


Trivia
------

* [Thermal Dynamics](/docs/1.12/thermal-dynamics-2/) uses a configurable blacklist of
  blocks that players should not be able to make covers with. The command
  `/td_blacklist_cover` can be useful when configuring this blacklist; it
  returns the line to add to the list to disable a held cover.
