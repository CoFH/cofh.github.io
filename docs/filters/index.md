---
title: Filters
nav: thermal-dynamics
image:
  - alt: Filter
    file: thermal-dynamics/filter-basic.png
  - alt: Hardened filter
    file: thermal-dynamics/filter-hardened.png
  - alt: Reinforced filter
    file: thermal-dynamics/filter-reinforced.png
  - alt: Signalum filter
    file: thermal-dynamics/filter-signalum.png
  - alt: Resonant filter
    file: thermal-dynamics/filter-resonant.png
redirect_from:
  - /docs/thermal-dynamics/attachments/filters/
recipes:
  crafting:
    - filter-basic
    - filter-hardened
    - filter-reinforced
    - filter-signalum
    - filter-resonant
  crafting-upgrading:
    - filter-hardened-upgrade
    - filter-reinforced-upgrade
    - filter-signalum-upgrade
    - filter-resonant-upgrade
---

**Filters** are items that can be installed on [itemduct](/docs/itemduct/) and
[fluiduct](/docs/fluiduct/) connections. They restrict which items or fluids may
pass through them.


Obtaining
--------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}

### Upgrading
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting-upgrading %}


Usage
-----

### Installation
A filter can be installed on an [itemduct](/docs/itemduct/) or
[fluiduct](/docs/fluiduct/) connection by using it on the connection. It can be
removed by using a [wrench](/docs/wrenches/) on it.

### Configuration
An installed filter can be configured by using it. The available options depend
on whether the filter is installed on an [itemduct](/docs/itemduct/) or on a
[fluiduct](/docs/fluiduct/).

A filter's configuration can be saved on a [redprint](/docs/redprint/) to be
copied to other filters, [servos](/docs/servos/) or
[retrievers](/docs/retrievers/).

### Item filtering
When installed on an [itemduct](/docs/itemduct/) connection, it only allows
items that match a configured list to pass through. It has various options that
determine how this list is used to match items. Some of these are only available
at higher [tiers](#tiers).

Blacklist/Whitelist
: Treat the list of items as a blacklist (allow all items except these) or as a
whitelist (only allow these items). The list is used as a blacklist by default.

Metadata
: Match items by their exact metadata / damage value. This is used by default.

NBT
: Match items by their exact NBT data. This is used by default.

Ore Dictionary
: Match items that are considered equivalent, like the various versions of
copper and tin ingots added by different mods. This is ignored by default.

Mod Owner
: Match items that are added by the same mod. This is ignored by default.

A filter can be configured to allow over-sending. By default, an itemduct takes
items that are already moving towards a destination into account when
determining whether more items can be sent there. Using a filter, this can be
disabled for a particular destination.

A filter can also be configured to limit the total stored amount of an item in
the connected block. This option is only available at higher tiers, and its
maximum value depends on the tier. By default, any amount of items is allowed.

### Fluid filtering
When installed on a [fluiduct](/docs/fluiduct/) connection, it only allows
fluids that match a configured list to pass through. It has various options that
determine how this list is used to match items.

Blacklist/Whitelist
: Treat the list of fluids as a blacklist (allow all fluids except these) or as
a whitelist (only allow these fluids). The list is used as a blacklist by
default.

NBT
: Match fluids by their exact NBT data. This is used by default.


Tiers
-----

Filters come in five [tiers](/docs/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Filter slots | Item filter options | Max. total stored items limit |
|---
| Basic | 3 | Blacklist/Whitelist | - |
| Hardened | 6 | Blacklist/Whitelist, Metadata | - |
| Reinforced | 9 | All | 64 |
| Signalum | 12 | All | 128 |
| Resonant | 15 | All | 320 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}
