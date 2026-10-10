---
title: Arcane Ensorcellator
image:
- alt: Arcane ensorcellator
  file: thermal-expansion-5/arcane-ensorcellator.png
redirect_from:
- /docs/arcane-ensorcellator/
- /docs/thermal-expansion/arcane-ensorcellator/
- /docs/thermal-expansion-5/arcane-ensorcellator/
- /docs/1.12/thermal-expansion-5/arcane-ensorcellator/
recipes:
  crafting:
  - te-1-12-machine-enchanter
augments:
- machine-power
---

> Behold, magitech!


An **arcane ensorcellator**, also known as an **enchanter**, is a
[machine](../machines/) that enchants
[books](https://minecraft.wiki/w/Book) and other arcana. It is capable of
producing specific [enchanted
books](https://minecraft.wiki/w/Enchanted_Book).


Obtaining
---------

A placed arcane ensorcellator can be instantly picked up by dismantling it with
a [wrench](../../wrenches/). Its configuration is preserved in the item. It can
also be mined using a [pickaxe](https://minecraft.wiki/w/Pickaxe), though
this can be much slower.

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting no-result=true %}

### Upgrading
An arcane ensorcellator is initially at the lowest [tier](#tiers) (basic). It
can be upgraded to higher tiers using [upgrade kits](../../thermal-foundation/upgrade-kits/) and
[conversion kits](../../thermal-foundation/conversion-kits/).


Usage
-----

### Placement
When placed, an arcane ensorcellator faces the player. It can face any of the
four cardinal directions, and can be rotated using a [wrench](../../wrenches/).

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
([books](https://minecraft.wiki/w/Book)). It is locked by default.

### Redstone control
An arcane ensorcellator may be configured to respond to
[redstone](https://minecraft.wiki/w/Redstone) signals. It can be in one
of three modes:

Ignored
: Redstone control is disabled. The enchanter works whenever possible. This is
the default mode.

Low
: The enchanter works when *not* powered. When powered, it stops working.

High
: The enchanter only works when powered.

The current mode can be set using the Redstone Control tab in the machine's GUI.

### Security
An arcane ensorcellator can have a [signalum security
lock](../../thermal-foundation/signalum-security-lock/) installed to restrict who can access it.

### Redprints
An arcane ensorcellator's configuration can be saved on a
[redprint](../../thermal-foundation/redprint/) to be copied to other arcane ensorcellators.

### Light source
When an arcane ensorcellator is active, it emits a light level of 12.


Tiers
-----

Arcane ensorcellators come in five [tiers](../../thermal-foundation/tiers/).

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

An arcane ensorcellator can have [augments](../augments/) installed to
improve certain properties or to change how it works. The amount of augments
that can be installed depends on the machine's [tier](#tiers). A basic arcane
ensorcellator cannot be augmented.

Augments can be installed in the Augmentation tab in an arcane ensorcellator's
GUI.

{% include te-1-12-augment-table.html augments=page.augments %}


Recipes
-------

An arcane ensorcellator can produce [enchanted
books](https://minecraft.wiki/w/Enchanted_Book) with the following
[enchantments](https://minecraft.wiki/w/Enchantments) by combining
[books](https://minecraft.wiki/w/Books) with certain items and [essence
of knowledge](../../thermal-foundation/essence-of-knowledge/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Enchantment | Item | Essence of Knowledge | Energy |
|---
| [Unbreaking I](https://minecraft.wiki/w/Unbreaking) | [Obsidian](https://minecraft.wiki/w/Obsidian) | 1,500 mB | 12,000 RF |
| [Mending](https://minecraft.wiki/w/Mending) | [Nether Star](https://minecraft.wiki/w/Nether_Star) | 5,000 mB | 40,000 RF |
|
| [Protection I](https://minecraft.wiki/w/Protection) | [Iron Ingot](https://minecraft.wiki/w/Iron_Ingot) | 500 mB | 4,000 RF |
| [Fire Protection I](https://minecraft.wiki/w/Fire_Protection) | [Magma Cream](https://minecraft.wiki/w/Magma_Cream) | 1,500 mB | 12,000 RF |
| [Feather Falling I](https://minecraft.wiki/w/Feather_Falling) | [Feather](https://minecraft.wiki/w/Feather) | 1,500 mB | 12,000 RF |
| [Blast Protection I](https://minecraft.wiki/w/Blast_Protection) | [Gunpowder](https://minecraft.wiki/w/Gunpowder) | 1,500 mB | 12,000 RF |
| [Projectile Protection I](https://minecraft.wiki/w/Projectile_Protection) | [Shield](https://minecraft.wiki/w/Shield) | 1,500 mB | 12,000 RF |
| [Respiration I](https://minecraft.wiki/w/Respiration) | [Pufferfish](https://minecraft.wiki/w/Pufferfish) | 3,000 mB | 24,000 RF |
| [Aqua Affinity](https://minecraft.wiki/w/Aqua_Affinity) | [Prismarine Crystals](https://minecraft.wiki/w/Prismarine_Crystals) | 3,000 mB | 24,000 RF |
| [Depth Strider I](https://minecraft.wiki/w/Depth_Strider) | [Prismarine Shard](https://minecraft.wiki/w/Prismarine_Shard) | 3,000 mB | 24,000 RF |
| [Thorns I](https://minecraft.wiki/w/Thorns) | [Rose Bush](https://minecraft.wiki/w/Rose_Bush) | 5,000 mB | 40,000 RF |
| [Frost Walker I](https://minecraft.wiki/w/Frost_Walker) | [Ice](https://minecraft.wiki/w/Ice) | 5,000 mB | 40,000 RF |
|
| [Sharpness I](https://minecraft.wiki/w/Sharpness) | [Nether Quartz](https://minecraft.wiki/w/Nether_Quartz) | 500 mB | 4,000 RF |
| [Smite I](https://minecraft.wiki/w/Smite) | [Rotten Flesh](https://minecraft.wiki/w/Rotten_Flesh) | 1,500 mB | 12,000 RF |
| [Bane of Arthropods I](https://minecraft.wiki/w/Bane_of_Arthropods) | [Spider Eye](https://minecraft.wiki/w/Spider_Eye) | 1,500 mB | 12,000 RF |
| [Knockback I](https://minecraft.wiki/w/Knockback) | [Piston](https://minecraft.wiki/w/Piston) | 1,500 mB | 12,000 RF |
| [Fire Aspect I](https://minecraft.wiki/w/Fire_Aspect) | [Blaze Rod](https://minecraft.wiki/w/Blaze_Rod) | 3,000 mB | 24,000 RF |
| [Looting I](https://minecraft.wiki/w/Looting) | [Gold Ingot](https://minecraft.wiki/w/Gold_Ingot) | 3,000 mB | 24,000 RF |
| [Sweeping Edge I](https://minecraft.wiki/w/Sweeping_Edge) | [Sugar Canes](https://minecraft.wiki/w/Sugar_Canes) | 3,000 mB | 24,000 RF |
|
| [Efficiency I](https://minecraft.wiki/w/Efficiency) | [Redstone](https://minecraft.wiki/w/Redstone) | 500 mB | 4,000 RF |
| [Fortune I](https://minecraft.wiki/w/Fortune) | [Emerald](https://minecraft.wiki/w/Emerald) | 3,000 mB | 24,000 RF |
| [Silk Touch](https://minecraft.wiki/w/Silk_Touch) | [Glowstone Dust](https://minecraft.wiki/w/Glowstone_Dust) | 5,000 mB | 40,000 RF |
|
| [Power I](https://minecraft.wiki/w/Power) | [Flint](https://minecraft.wiki/w/Flint) | 500 mB | 4,000 RF |
| [Punch I](https://minecraft.wiki/w/Punch) | [String](https://minecraft.wiki/w/String) | 3,000 mB | 24,000 RF |
| [Flame](https://minecraft.wiki/w/Flame) | [Blaze Powder](https://minecraft.wiki/w/Blaze_Powder) | 3,000 mB | 24,000 RF |
| [Infinity](https://minecraft.wiki/w/Infinity) | [Eye of Ender](https://minecraft.wiki/w/Eye_of_Ender) | 5,000 mB | 40,000 RF |
|
| [Luck of the Sea I](https://minecraft.wiki/w/Luck_of_the_Sea) | [Clownfish](https://minecraft.wiki/w/Clownfish) | 3,000 mB | 24,000 RF |
| [Lure I](https://minecraft.wiki/w/Lure) | [Carrot on a Stick](https://minecraft.wiki/w/Carrot_on_a_Stick) | 3,000 mB | 24,000 RF |
|
| [Curse of Binding](https://minecraft.wiki/w/Curse_of_Binding) | [Popped Chorus Fruit](https://minecraft.wiki/w/Popped_Chorus_Fruit) | 5,000 mB | 40,000 RF |
| [Curse of Vanishing](https://minecraft.wiki/w/Curse_of_Vanishing) | [Ghast Tear](https://minecraft.wiki/w/Ghast_Tear) | 5,000 mB | 40,000 RF |
|
| [Holding I](../../cofh-core/holding/) | [Chest](https://minecraft.wiki/w/Chest) | 1,500 mB | 500 RF |
| [Insight I](../../cofh-core/insight/) | [Bottle o' Enchanting](https://minecraft.wiki/w/Bottle_o%27_Enchanting) | 1,500 mB | 12,000 RF |
| [Leech I](../../cofh-core/leech/) | [Nether Wart](https://minecraft.wiki/w/Nether_Wart) | 1,500 mB | 12,000 RF |
| [Soulbound I](../../cofh-core/soulbound/) | [Soul Sand](https://minecraft.wiki/w/Soul_Sand) | 1,500 mB | 12,000 RF |
| [Multishot I](../../cofh-core/multishot/) | [Arrow](https://minecraft.wiki/w/Arrow) | 3,000 mB | 24,000 RF |
| [Smashing](../../cofh-core/smashing/) | [Petrotheum Dust](../../thermal-foundation/petrotheum-dust/) | 3,000 mB | 24,000 RF |
| [Smelting](../../cofh-core/smelting/) | [Pyrotheum Dust](../../thermal-foundation/pyrotheum-dust/) | 3,000 mB | 24,000 RF |
| [Vorpal I](../../cofh-core/vorpal/) | [Wither Skeleton Skull](https://minecraft.wiki/w/Wither_Skeleton_Skull) | 5,000 mB | 40,000 RF |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}
