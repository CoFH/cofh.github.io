---
title: Igneous Extruder
redirect_from:
- /thermal-expansion/machines/igneous-extruder/
- /docs/thermal-expansion/machines/igneous-extruder/
- /docs/augment-granitic-subduction/
- /docs/augment-dioritic-subduction/
- /docs/augment-andesitic-subduction/
- /docs/igneous-extruder/
- /docs/thermal-expansion/igneous-extruder/
- /docs/thermal-expansion-5/igneous-extruder/
- /docs/1.12/thermal-expansion-5/igneous-extruder/
recipes:
  crafting:
  - te-1-12-machine-extruder
augments:
- machine-power
- machine-extruder-no-water
- machine-extruder-sedimentary
recipe-list:
- cobblestone
- stone
- obsidian
- granite
- diorite
- andesite
---

![Igneous extruder](/assets/images/thermal-expansion-5/igneous-extruder.png){:style="height: 128px"}

> Minecraft physics are fun!


An **igneous extruder**, or **extruder** for short, is a
[machine](../machines/) that mixes hot and cold fluids to create items.


Obtaining
---------

A placed igneous extruder can be instantly picked up by dismantling it with a
[wrench](../../wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
An igneous extruder is initially at the lowest [tier](#tiers) (basic). It can be
upgraded to higher tiers using [upgrade kits](../../thermal-foundation/upgrade-kits/) and
[conversion kits](../../thermal-foundation/conversion-kits/).


Usage
-----

### Placement
When placed, an igneous extruder faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](../../wrenches/).

### Processing
An igneous extruder can be configured to mix a certain pair of fluids into a
certain item following one of its available [recipes](#recipes).

When an igneous extruder's input tanks are filled with at least 1,000 mB of the
fluids corresponding to the configured recipe, the machine will start consuming
[Redstone Flux](../../../redstone-flux/) to produce the recipe's output item. Every
produced item requires certain amounts of energy and the two fluids. When enough
energy has been consumed for an item, the input is consumed and the output is
placed in the output slot.

The speed at which an igneous extruder produces items depends on how much energy
it can use per tick. This in turn depends on how much power is being supplied,
and on the machine's maximum power usage. A basic extruder has a maximum power
usage of 20 RF/t. This can be increased by upgrading the machine to a higher
[tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Fluids and items can enter and exit an igneous extruder through its sides. Every
side of an extruder may correspond to its input tanks, its output slot, or both
at the same time.

An igneous extruder can automatically transfer items out of any sides that
directly correspond to its output slot. This is called auto-output, and occurs
whenever the machine finishes processing an item, or every 32 ticks (1.6
seconds) if the machine is inactive.

A basic igneous extruder can automatically output up to 16 items at a time. This
amount can be increased by upgrading the machine to a higher [tier](#tiers).

Which sides correspond to which tanks/slots and whether auto-output is enabled
can be configured using the Configuration tab in the machine's GUI.

### Redstone control
An igneous extruder may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The extruder works whenever possible. This is
the default mode.

Low
: The extruder works when *not* powered. When powered, it stops working.

High
: The extruder only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

### Security
An igneous extruder can have a [signalum security
lock](../../thermal-foundation/signalum-security-lock/) installed to restrict who can access it.

### Redprints
An igneous extruder's configuration can be saved on a
[redprint](../../thermal-foundation/redprint/) to be copied to other extruders.

### Light source
When an igneous extruder is active, it emits a light level of 14.


Tiers
-----

Igneous extruders come in five [tiers](../../thermal-foundation/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Max. power usage | Augment slots | Max. items per auto-transfer |
|---
| Basic | 20 RF/t | 0 | 16 |
| Hardened | 30 RF/t | 1 | 16 |
| Reinforced | 40 RF/t | 2 | 28 |
| Signalum | 50 RF/t | 3 | 44 |
| Resonant | 60 RF/t | 4 | 64 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}
</div>
{::options parse_block_html="false" /}


Augmentation
------------

An igneous extruder can have [augments](../augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the machine's [tier](#tiers). A basic extruder cannot be
augmented.

Augments can be installed in the Augmentation tab in an extruder's GUI.

{% include te-1-12-augment-table.html augments=page.augments %}


Recipes
-------

When a fluid's input amount is listed as 0 mB, it is not consumed; it only needs
to be inside the corresponding input tank.

{% include recipe-table.html type='te-1-12-extruder' recipes=page.recipe-list %}
