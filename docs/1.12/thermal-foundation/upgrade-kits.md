---
category: Items
subjects:
- tf-1-12-upgrade-kit-signalum
image:
- alt: Hardened upgrade kit
  file: thermal-foundation/upgrade-kit-hardened.png
- alt: Reinforced upgrade kit
  file: thermal-foundation/upgrade-kit-reinforced.png
- alt: Signalum upgrade kit
  file: thermal-foundation/upgrade-kit-signalum.png
- alt: Resonant upgrade kit
  file: thermal-foundation/upgrade-kit-resonant.png
recipes:
  crafting-shaped:
  - tf-1-12-upgrade-kit-hardened
  - tf-1-12-upgrade-kit-reinforced
  - tf-1-12-upgrade-kit-signalum
  - tf-1-12-upgrade-kit-resonant
subcategory: Utilities
title: Upgrade Kits
usage-recipes:
  crafting-shapeless:
  - tf-1-12-conversion-kit-reinforced
  - tf-1-12-conversion-kit-signalum-1
  - tf-1-12-conversion-kit-signalum-2
  - tf-1-12-conversion-kit-resonant-1
  - tf-1-12-conversion-kit-resonant-2
  - tf-1-12-conversion-kit-resonant-3
---

**Upgrade kits** are items used to incrementally upgrade blocks to higher
[tiers](../tiers/).


Obtaining
---------

### Crafting
{% include docs/recipe/table/table.html recipe-type='crafting-shaped' recipe-ids=page.recipes.crafting-shaped %}


Usage
-----

### Upgrading blocks
When used on an [upgradable block](../tiers/#upgrading), an upgrade kit
upgrades the block by one [tier](../tiers/). This only works on blocks that
are at the immediately preceding tier.

### Crafting ingredients
Upgrade kits can be combined into [conversion kits](../conversion-kits/),
which fully upgrade blocks to a certain [tier](../tiers/) regardless of their
current tier.

{% include docs/recipe/table/table.html recipe-type='crafting-shapeless' recipe-ids=page.usage-recipes.crafting-shapeless %}
