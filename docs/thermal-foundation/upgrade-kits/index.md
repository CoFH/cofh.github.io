---
title: Upgrade Kits
nav: thermal-foundation
image:
  - alt: Hardened upgrade kit
    file: thermal-foundation/upgrade-kit-hardened.png
  - alt: Reinforced upgrade kit
    file: thermal-foundation/upgrade-kit-reinforced.png
  - alt: Signalum upgrade kit
    file: thermal-foundation/upgrade-kit-signalum.png
  - alt: Resonant upgrade kit
    file: thermal-foundation/upgrade-kit-resonant.png
redirect_from:
  - /docs/thermal-expansion/tiers-and-augments/upgrade-kits/
  - /docs/thermal-expansion/tiers/upgrade-kits/
  - /docs/upgrade-kits/
recipes:
  crafting:
    - upgrade-kit-hardened
    - upgrade-kit-reinforced
    - upgrade-kit-signalum
    - upgrade-kit-resonant
usage-recipes:
  crafting:
    - conversion-kit-reinforced
    - conversion-kit-signalum-1
    - conversion-kit-signalum-2
    - conversion-kit-resonant-1
    - conversion-kit-resonant-2
    - conversion-kit-resonant-3
---

**Upgrade kits** are items used to incrementally upgrade blocks to higher
[tiers](/docs/tiers/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Upgrading blocks
When used on an [upgradable block](/docs/tiers/#upgrading), an upgrade kit
upgrades the block by one [tier](/docs/tiers/). This only works on blocks that
are at the immediately preceding tier.

### Crafting ingredients
Upgrade kits can be combined into [conversion kits](/docs/conversion-kits/),
which fully upgrade blocks to a certain [tier](/docs/tiers/) regardless of their
current tier.

{% include recipe-table.html type='crafting' recipes=page.usage-recipes.crafting %}
