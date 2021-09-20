---
augments:
- te-1-12-augment-machine-power
- te-1-12-augment-machine-secondary
- te-1-12-augment-machine-secondary-null
- te-1-12-augment-machine-smelter-flux
- te-1-12-augment-machine-smelter-pyrotheum
category: Machines
recipe-list:
  alloying:
  - ingot-steel-from-dust-iron-and-coal-coke
  - ingot-steel-from-ingot-iron-and-coal-coke
  - ingot-steel-from-dust-iron-and-dust-coal
  - ingot-steel-from-ingot-iron-and-dust-coal
  - ingot-steel-from-dust-iron-and-dust-charcoal
  - ingot-steel-from-ingot-iron-and-dust-charcoal
  - ingot-electrum-from-dust-gold-and-dust-silver
  - ingot-electrum-from-ingot-gold-and-dust-silver
  - ingot-electrum-from-dust-gold-and-ingot-silver
  - ingot-electrum-from-ingot-gold-and-ingot-silver
  - ingot-invar-from-dust-iron-and-dust-nickel
  - ingot-invar-from-ingot-iron-and-dust-nickel
  - ingot-invar-from-dust-iron-and-ingot-nickel
  - ingot-invar-from-ingot-iron-and-ingot-nickel
  - ingot-bronze-from-dust-copper-and-dust-tin
  - ingot-bronze-from-ingot-copper-and-dust-tin
  - ingot-bronze-from-dust-copper-and-ingot-tin
  - ingot-bronze-from-ingot-copper-and-ingot-tin
  - ingot-constantan-from-dust-copper-and-dust-nickel
  - ingot-constantan-from-ingot-copper-and-dust-nickel
  - ingot-constantan-from-dust-copper-and-ingot-nickel
  - ingot-constantan-from-ingot-copper-and-ingot-nickel
  general:
  - dust-smelting
  - ra-1-12-dust-smelting-fluxed-electrum
  - stone-bricks
  - nether-brick
  - hardened-glass
  - hardened-glass-metal
  ore-processing:
  - ore-processing-sand-iron
  - ore-processing-sand-gold
  - ore-processing-sand-copper
  - ore-processing-sand-tin
  - ore-processing-sand-silver
  - ore-processing-sand-lead
  - ore-processing-sand-aluminum
  - ore-processing-sand-nickel
  - ore-processing-sand-platinum
  - ore-processing-sand-iridium
  - ore-processing-sand-mithril
  - ore-processing-lapis-lazuli
  - ore-processing-redstone
  - ore-processing-nether-quartz
  ore-processing-cinnabar:
  - ore-processing-cinnabar-iron
  - ore-processing-cinnabar-gold
  - ore-processing-cinnabar-copper
  - ore-processing-cinnabar-tin
  - ore-processing-cinnabar-silver
  - ore-processing-cinnabar-lead
  - ore-processing-cinnabar-aluminum
  - ore-processing-cinnabar-nickel
  - ore-processing-cinnabar-platinum
  - ore-processing-cinnabar-iridium
  - ore-processing-cinnabar-mithril
  ore-processing-rich-slag:
  - ore-processing-rich-slag-iron
  - ore-processing-rich-slag-gold
  - ore-processing-rich-slag-copper
  - ore-processing-rich-slag-tin
  - ore-processing-rich-slag-silver
  - ore-processing-rich-slag-lead
  - ore-processing-rich-slag-aluminum
  - ore-processing-rich-slag-nickel
  - ore-processing-rich-slag-platinum
  - ore-processing-rich-slag-iridium
  - ore-processing-rich-slag-mithril
  recycling:
  - recycling-gear
  - recycling-plate
  - recycling-anvil
  - recycling-anvil-slightly-damaged
  - recycling-anvil-very-damaged
  - recycling-pressure-plate-iron
  - recycling-pressure-plate-gold
  - recycling-bucket
  - recycling-cauldron
  - recycling-clock
  - recycling-compass
  - recycling-door-iron
  - recycling-hopper
  - recycling-iron-bars
  - recycling-iron-trapdoor
  - recycling-minecart
  - recycling-minecart-with-chest
  - recycling-minecart-with-furnace
  - recycling-minecart-with-hopper
  - recycling-rail
  - recycling-powered-rail
  - recycling-tool-pickaxe
  - recycling-tool-shovel
  - recycling-tool-axe
  - recycling-tool-hoe
  - recycling-tool-fishing-rod-metal
  - recycling-tool-shears-metal
  - recycling-tool-hammer
  - recycling-tool-excavator
  - recycling-tool-sickle
  - recycling-weapon-sword
  - recycling-weapon-bow-metal
  - recycling-weapon-shield-metal
  - recycling-armor-helmet
  - recycling-armor-chestplate
  - recycling-armor-leggings
  - recycling-armor-boots
  - recycling-horse-armor-metal
recipes:
  crafting-shaped:
  - te-1-12-machine-smelter
show_image: false
subjects:
- te-1-12-machine-smelter
title: Induction Smelter
---

![Induction smelter](/assets/images/docs/1.12/thermal-expansion/induction-smelter.png){:style="height: 128px"}

> Will absolutely not cook food.


An **induction smelter**, or **smelter** for short, is a
[machine](../machines/) that smelts items together at high temperatures.
Despite the name, the machine cannot be used for
[smelting](https://minecraft.gamepedia.com/Smelting).


Obtaining
---------

A placed induction smelter can be instantly picked up by dismantling it with a
[wrench](../../wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{{<recipe_table type="crafting-shaped" ids_param="recipes.crafting-shaped">}}

### Upgrading
An induction smelter is initially at the lowest [tier](#tiers) (basic). It can
be upgraded to higher tiers using [upgrade kits](../../thermal-foundation/upgrade-kits/) and
[conversion kits](../../thermal-foundation/conversion-kits/).


Usage
-----

### Placement
When placed, an induction smelter faces the player. It can face any of the four
cardinal directions, and can be rotated using a [wrench](../../wrenches/).

### Processing
An induction smelter has two input slots. When combinations of items are placed
in these slots, the machine will start consuming [Redstone
Flux](/docs/redstone-flux/) to process them. Every item combination requires a
certain amount of energy to process. When enough energy has been consumed for an
item combination, the input is consumed and the output is placed in the primary
output slot. A secondary output may be produced when processing certain items,
which is placed in the secondary output slot.

When installed, a [pyro-concentrator](../augment-pyro-concentrator/) allows
an induction smelter to consume [blazing pyrotheum](../../thermal-foundation/blazing-pyrotheum/),
which is stored in an added input tank.

The speed at which an induction smelter processes items depends on how much
energy it can use per tick. This in turn depends on how much power is being
supplied, and on the machine's maximum power usage. A basic smelter has a
maximum power usage of 20 RF/t. This can be increased by upgrading the machine
to a higher [tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Items and fluids can enter and exit an induction smelter through its sides.
Every side of a smelter may correspond to one of its input slots, one of its
output slots, or certain slots at the same time. Fluids can enter a smelter
through any side.

An induction smelter can automatically transfer items out of any sides that
directly correspond to one of its output slots. This is called auto-output. It
can also transfer items from adjacent inventories into any sides that directly
correspond to one of its input slots. This is called auto-input. Auto-output and
auto-input occur whenever the machine finishes processing an item, or every 32
ticks (1.6 seconds) if the machine is inactive.

A basic induction smelter can automatically transfer up to 16 items at a time.
This amount can be increased by upgrading the machine to a higher
[tier](#tiers).

Which sides correspond to which slots/tanks and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
machine's GUI.

One of an induction smelter's input slots can be locked to only accept
metallurgical fluxes: [sand](https://minecraft.gamepedia.com/Sand), [soul
sand](https://minecraft.gamepedia.com/Soul_Sand), [rich slag](../../thermal-foundation/rich-slag/)
and [cinnabar](../../thermal-foundation/cinnabar/). These items are commonly used in smelter
recipes. The slot is locked by default.

### Redstone control
An induction smelter may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The smelter works whenever possible. This is the
default mode.

Low
: The smelter works when *not* powered. When powered, it stops working.

High
: The smelter only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

### Security
An induction smelter can have a [signalum security
lock](../../thermal-foundation/signalum-security-lock/) installed to restrict who can access it.

### Redprints
An induction smelter's configuration can be saved on a
[redprint](../../thermal-foundation/redprint/) to be copied to other induction smelters.

### Light source
When an induction smelter is active, it emits a light level of 14.


Tiers
-----

Induction smelters come in five [tiers](../../thermal-foundation/tiers/).

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

An induction smelter can have [augments](../augments/) installed to improve
certain properties or to change how it works. The amount of augments that can be
installed depends on the machine's [tier](#tiers). A basic smelter cannot be
augmented.

Augments can be installed in the Augmentation tab in a smelter's GUI.

{{<link_list ids_param="augments">}}


Recipes
-------

### General
{{<recipe_table type="smelter' recipe-ids=page.recipe-list.general">}}

### Ore processing
{{<recipe_table type="smelter' recipe-ids=page.recipe-list.ore-processing">}}

### Ore processing with rich slag
{{<recipe_table type="smelter' recipe-ids=page.recipe-list.ore-processing-rich-slag">}}

### Ore processing with cinnabar
{{<recipe_table type="smelter' recipe-ids=page.recipe-list.ore-processing-cinnabar">}}

### Alloying
{{<recipe_table type="smelter' recipe-ids=page.recipe-list.alloying">}}

### Recycling
{{<recipe_table type="smelter' recipe-ids=page.recipe-list.recycling">}}
