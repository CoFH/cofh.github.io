---
title: Upgrade Kits
image:
- alt: Hardened upgrade kit
  file: thermal-foundation-2/upgrade-kit-hardened.png
- alt: Reinforced upgrade kit
  file: thermal-foundation-2/upgrade-kit-reinforced.png
- alt: Signalum upgrade kit
  file: thermal-foundation-2/upgrade-kit-signalum.png
- alt: Resonant upgrade kit
  file: thermal-foundation-2/upgrade-kit-resonant.png
redirect_from:
- /docs/thermal-expansion/tiers-and-augments/upgrade-kits/
- /docs/thermal-expansion/tiers/upgrade-kits/
- /docs/upgrade-kits/
- /docs/thermal-foundation/upgrade-kits/
- /docs/thermal-foundation-2/upgrade-kits/
- /docs/1.12/thermal-foundation-2/upgrade-kits/
recipes:
  crafting:
  - tf-1-12-upgrade-kit-hardened
  - tf-1-12-upgrade-kit-reinforced
  - tf-1-12-upgrade-kit-signalum
  - tf-1-12-upgrade-kit-resonant
usage-recipes:
  crafting:
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
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


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

{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}
