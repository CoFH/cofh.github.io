---
title: Arcane Ensorcellator
nav: thermal-expansion
image:
  - alt: Arcane ensorcellator
    file: thermal-expansion/arcane-ensorcellator.png
recipes:
  crafting:
    - machine-enchanter
augments:
  - machine-power
---

> Behold, magitech!


An **arcane ensorcellator**, also known as an **enchanter**, is a
[machine](/docs/machines/) that enchants
[books](https://minecraft.gamepedia.com/Book) and other arcana. It is capable of
producing specific [enchanted
books](https://minecraft.gamepedia.com/Enchanted_Book).


Obtaining
---------

A placed arcane ensorcellator can be instantly picked up by dismantling it with
a [wrench](/docs/wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.gamepedia.com/Pickaxe), though
this can be much slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
An arcane ensorcellator is initially at the lowest [tier](#tiers) (basic). It
can be upgraded to higher tiers using [upgrade kits](/docs/upgrade-kits/) and
[conversion kits](/docs/conversion-kits/).


Usage
-----

### Placement
When placed, an arcane ensorcellator faces the player. It can face any of the
four cardinal directions, and can be rotated using a [wrench](/docs/wrenches/).

### Processing
An arcane ensorcellator has two input slots and an input tank. When combinations
of items and fluids are inserted in the slots and the tank, the machine will
start consuming [Redstone Flux](/docs/redstone-flux/) to process them. Every
item/fluid combination requires a certain amount of energy to process. When
enough energy has been consumed for an item/fluid combination, the input is
consumed and the output is placed in the output slot.

The speed at which an arcane ensorcellator processes items and fluids depends on
how much energy it can use per tick. This in turn depends on how much power is
being supplied, and on the machine's maximum power usage. A basic enchanter has
a maximum power usage of 20 RF/t. This can be increased by upgrading the machine
to a higher [tier](#tiers), and by installing certain [augments](#augmentation).

### Input and output
Items and fluids can enter and exit an arcane ensorcellator through its sides.
Every side of an enchanter may correspond to one of its input slots, its input
tank, its output slot, or certain slots/tanks at the same time.

An arcane ensorcellator can automatically transfer items out of any sides that
directly correspond to one of its output slots. This is called auto-output. It
can also transfer items from adjacent inventories into any sides that directly
correspond to one of its input slots. This is called auto-input. Auto-output and
auto-input occur whenever the machine finishes processing an item, or every 32
ticks (1.6 seconds) if the machine is inactive.

A basic arcane ensorcellator can automatically transfer up to 16 items at a
time. This amount can be increased by upgrading the machine to a higher
[tier](#tiers).

Which sides correspond to which slots/tanks and whether auto-output and
auto-input are enabled can be configured using the Configuration tab in the
machine's GUI.

One of an arcane ensorcellator's input slots can be locked to only accept arcana
([books](https://minecraft.gamepedia.com/Book)). It is locked by default.

### Redstone control
An arcane ensorcellator may be configured to respond to
[redstone](https://minecraft.gamepedia.com/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The enchanter works whenever possible. This is
the default mode.

Low
: The enchanter works when *not* powered. When powered, it stops working.

High
: The enchanter only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

When an arcane ensorcellator must stop working due to a redstone signal and is
still processing an item, it will finish processing that item before stopping.

### Security
An arcane ensorcellator can have a [signalum security
lock](/docs/signalum-security-lock/) installed to restrict who can access it.

### Redprints
An arcane ensorcellator's configuration can be saved on a
[redprint](/docs/redprint/) to be copied to other arcane ensorcellators.

### Light source
When an arcane ensorcellator is active, it emits a light level of 12.


Tiers
-----

Arcane ensorcellators come in five [tiers](/docs/tiers/).

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

An arcane ensorcellator can have [augments](/docs/augments/) installed to
improve certain properties or to change how it works. The amount of augments
that can be installed depends on the machine's [tier](#tiers). A basic arcane
ensorcellator cannot be augmented.

Augments can be installed in the Augmentation tab in an arcane ensorcellator's
GUI.

{% include augment-table.html augments=page.augments %}


Recipes
-------

An arcane ensorcellator can produce [enchanted
books](https://minecraft.gamepedia.com/Enchanted_Book) with the following
[enchantments](https://minecraft.gamepedia.com/Enchantments) by combining
[books](https://minecraft.gamepedia.com/Books) with certain items and [essence
of knowledge](/docs/essence-of-knowledge/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Enchantment | Item | Essence of Knowledge | Energy |
|---
| [Unbreaking I](https://minecraft.gamepedia.com/Unbreaking) | [Obsidian](https://minecraft.gamepedia.com/Obsidian) | 1,500 mB | 8,000 RF |
| [Mending](https://minecraft.gamepedia.com/Mending) | [Nether Star](https://minecraft.gamepedia.com/Nether_Star) | 5,000 mB | 16,000 RF |
|
| [Protection I](https://minecraft.gamepedia.com/Protection) | [Iron Ingot](https://minecraft.gamepedia.com/Iron_Ingot) | 500 mB | 4,000 RF |
| [Fire Protection I](https://minecraft.gamepedia.com/Fire_Protection) | [Magma Cream](https://minecraft.gamepedia.com/Magma_Cream) | 1,500 mB | 8,000 RF |
| [Feather Falling I](https://minecraft.gamepedia.com/Feather_Falling) | [Feather](https://minecraft.gamepedia.com/Feather) | 1,500 mB | 8,000 RF |
| [Blast Protection I](https://minecraft.gamepedia.com/Blast_Protection) | [Gunpowder](https://minecraft.gamepedia.com/Gunpowder) | 1,500 mB | 8,000 RF |
| [Projectile Protection I](https://minecraft.gamepedia.com/Projectile_Protection) | [Shield](https://minecraft.gamepedia.com/Shield) | 1,500 mB | 8,000 RF |
| [Respiration I](https://minecraft.gamepedia.com/Respiration) | [Pufferfish](https://minecraft.gamepedia.com/Pufferfish) | 3,000 mB | 12,000 RF |
| [Aqua Affinity](https://minecraft.gamepedia.com/Aqua_Affinity) | [Prismarine Crystals](https://minecraft.gamepedia.com/Prismarine_Crystals) | 3,000 mB | 12,000 RF |
| [Depth Strider I](https://minecraft.gamepedia.com/Depth_Strider) | [Prismarine Shard](https://minecraft.gamepedia.com/Prismarine_Shard) | 3,000 mB | 12,000 RF |
| [Thorns I](https://minecraft.gamepedia.com/Thorns) | [Rose Bush](https://minecraft.gamepedia.com/Rose_Bush) | 5,000 mB | 16,000 RF |
| [Frost Walker I](https://minecraft.gamepedia.com/Frost_Walker) | [Ice](https://minecraft.gamepedia.com/Ice) | 5,000 mB | 16,000 RF |
|
| [Sharpness I](https://minecraft.gamepedia.com/Sharpness) | [Nether Quartz](https://minecraft.gamepedia.com/Nether_Quartz) | 500 mB | 4,000 RF |
| [Smite I](https://minecraft.gamepedia.com/Smite) | [Rotten Flesh](https://minecraft.gamepedia.com/Rotten_Flesh) | 1,500 mB | 8,000 RF |
| [Bane of Arthropods I](https://minecraft.gamepedia.com/Bane_of_Arthropods) | [Spider Eye](https://minecraft.gamepedia.com/Spider_Eye) | 1,500 mB | 8,000 RF |
| [Knockback I](https://minecraft.gamepedia.com/Knockback) | [Piston](https://minecraft.gamepedia.com/Piston) | 1,500 mB | 8,000 RF |
| [Fire Aspect I](https://minecraft.gamepedia.com/Fire_Aspect) | [Blaze Rod](https://minecraft.gamepedia.com/Blaze_Rod) | 3,000 mB | 12,000 RF |
| [Looting I](https://minecraft.gamepedia.com/Looting) | [Gold Ingot](https://minecraft.gamepedia.com/Gold_Ingot) | 3,000 mB | 12,000 RF |
| [Sweeping Edge I](https://minecraft.gamepedia.com/Sweeping_Edge) | [Sugar Canes](https://minecraft.gamepedia.com/Sugar_Canes) | 3,000 mB | 12,000 RF |
|
| [Efficiency I](https://minecraft.gamepedia.com/Efficiency) | [Redstone](https://minecraft.gamepedia.com/Redstone) | 500 mB | 4,000 RF |
| [Fortune I](https://minecraft.gamepedia.com/Fortune) | [Emerald](https://minecraft.gamepedia.com/Emerald) | 3,000 mB | 12,000 RF |
| [Silk Touch](https://minecraft.gamepedia.com/Silk_Touch) | [Glowstone Dust](https://minecraft.gamepedia.com/Glowstone_Dust) | 5,000 mB | 16,000 RF |
|
| [Power I](https://minecraft.gamepedia.com/Power) | [Flint](https://minecraft.gamepedia.com/Flint) | 500 mB | 4,000 RF |
| [Punch I](https://minecraft.gamepedia.com/Punch) | [String](https://minecraft.gamepedia.com/String) | 3,000 mB | 12,000 RF |
| [Flame](https://minecraft.gamepedia.com/Flame) | [Blaze Powder](https://minecraft.gamepedia.com/Blaze_Powder) | 3,000 mB | 12,000 RF |
| [Infinity](https://minecraft.gamepedia.com/Infinity) | [Eye of Ender](https://minecraft.gamepedia.com/Eye_of_Ender) | 5,000 mB | 16,000 RF |
|
| [Luck of the Sea I](https://minecraft.gamepedia.com/Luck_of_the_Sea) | [Clownfish](https://minecraft.gamepedia.com/Clownfish) | 3,000 mB | 12,000 RF |
| [Lure I](https://minecraft.gamepedia.com/Lure) | [Carrot on a Stick](https://minecraft.gamepedia.com/Carrot_on_a_Stick) | 3,000 mB | 12,000 RF |
|
| [Curse of Binding](https://minecraft.gamepedia.com/Curse_of_Binding) | [Popped Chorus Fruit](https://minecraft.gamepedia.com/Popped_Chorus_Fruit) | 5,000 mB | 16,000 RF |
| [Curse of Vanishing](https://minecraft.gamepedia.com/Curse_of_Vanishing) | [Ghast Tear](https://minecraft.gamepedia.com/Ghast_Tear) | 5,000 mB | 16,000 RF |
|
| [Holding I](/docs/holding/) | [Chest](https://minecraft.gamepedia.com/Chest) | 1,500 mB | 500 RF |
| [Insight I](/docs/insight/) | [Bottle o' Enchanting](https://minecraft.gamepedia.com/Bottle_o%27_Enchanting) | 1,500 mB | 8,000 RF |
| [Leech I](/docs/leech/) | [Nether Wart](https://minecraft.gamepedia.com/Nether_Wart) | 1,500 mB | 8,000 RF |
| [Smelting](/docs/smelting/) | [Furnace](https://minecraft.gamepedia.com/Furnace) | 1,500 mB | 8,000 RF |
| [Soulbound I](/docs/soulbound/) | [Soul Sand](https://minecraft.gamepedia.com/Soul_Sand) | 1,500 mB | 8,000 RF |
| [Multishot I](/docs/multishot/) | [Arrow](https://minecraft.gamepedia.com/Arrow) | 3,000 mB | 12,000 RF |
| [Vorpal I](/docs/vorpal/) | [Wither Skeleton Skull](https://minecraft.gamepedia.com/Wither_Skeleton_Skull) | 5,000 mB | 16,000 RF |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}
