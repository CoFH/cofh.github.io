---
title: Forge Lexicon
nav: thermal-foundation-2
redirect_from:
- /docs/thermal-foundation/other/forge-lexicon/
- /docs/thermal-foundation/items/forge-lexicon/
- /docs/thermal-foundation/items/tools/forge-lexicon/
- /docs/forge-lexicon/
- /docs/thermal-foundation/forge-lexicon/
- /docs/thermal-foundation-2/forge-lexicon/
image:
- alt: Forge Lexicon
  file: thermal-foundation-2/forge-lexicon.png
recipes:
  crafting:
  - tf2-forge-lexicon
usage-recipes:
  crafting:
  - te5-device-lexicon
---

> Also known as a Thesoreus.


A **Forge Lexicon** is an item that converts items into other items that are
considered equivalent. Examples of equivalent items are the various versions of
copper and tin ingots added by different mods.


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}


Usage
-----

### Modes
A Forge Lexicon can be in one of two modes: 'knowledge' and 'transmutation'. It
is initially in knowledge mode. The mode can be switched by pressing "Cycle Item
Mode" (V by default).

### Knowledge
When a Forge Lexicon is used while in knowledge mode, an interface is opened
that allows the user to study the available groups of equivalent items, and to
set which items in these groups they prefer. These preferences are used when the
Lexicon is in transmutation mode.

![Forge Lexicon Knowledge GUI](/assets/images/thermal-foundation-2/forge-lexicon-gui-knowledge.png){:style="height: 250px"}

### Transmutation
A Forge Lexicon in transmutation mode in a user's inventory converts any
interchangeable items that are picked up into the user's preferred equivalents.
If the user has not set a preferred equivalent for an item, it is converted into
the first of its available equivalents.

When a Forge Lexicon is used while in transmutation mode, an interface is opened
that allows the user to convert items into their equivalents by hand.

![Forge Lexicon Transmutation GUI](/assets/images/thermal-foundation-2/forge-lexicon-gui-transmutation.png){:style="height: 250px"}

### Crafting ingredient
{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}


Trivia
------

* Forge Lexicons are named after the Minecraft Forge modding API, which provides
  a system to register interchangeable items for compatibility between mods.
