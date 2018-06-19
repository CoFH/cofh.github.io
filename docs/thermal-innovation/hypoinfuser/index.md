---
title: Hypoinfuser
nav: thermal-innovation
redirect_from:
  - /docs/hypoinfuser/
image:
  - alt: Hypoinfuser (Basic)
    file: thermal-innovation/hypoinfuser-basic.png
  - alt: Hypoinfuser (Hardened)
    file: thermal-innovation/hypoinfuser-hardened.png
  - alt: Hypoinfuser (Reinforced)
    file: thermal-innovation/hypoinfuser-reinforced.png
  - alt: Hypoinfuser (Signalum)
    file: thermal-innovation/hypoinfuser-signalum.png
  - alt: Hypoinfuser (Resonant)
    file: thermal-innovation/hypoinfuser-resonant.png
  - alt: Hypoinfuser (Creative)
    file: thermal-innovation/hypoinfuser-creative.png
recipes:
  crafting:
    - ti-hypoinfuser-basic
    - ti-hypoinfuser-hardened
    - ti-hypoinfuser-reinforced
    - ti-hypoinfuser-signalum
    - ti-hypoinfuser-resonant
---

A **hypoinfuser** (also known as an **injector**) is a tool that stores and
injects [fluid potions](/docs/thermal-foundation/potion-fluid/).


Obtaining
---------

### Crafting
{% include recipe-table.html type='crafting' recipes=page.recipes.crafting %}


Usage
-----

### Filling and draining
A hypoinfuser can hold the [fluid form](/docs/thermal-foundation/potion-fluid/) or any regular
[potion](https://minecraft.gamepedia.com/Potion). It can be filled and drained
manually by using it on a block that can hold fluid potions, or automatically
using a [fluid transposer](/docs/thermal-expansion/fluid-transposer/) or similar. It can also be
filled by combining it with a potion in a crafting grid.

A basic hypoinfuser can store up to 8 bottles worth of a potion (2,000 mB). This
can be increased by upgrading the hypoinfuser to a higher [tier](#tiers).

A hypoinfuser only works with regular potions; it does not work with [splash
potions](https://minecraft.gamepedia.com/Splash_Potion) or [lingering
potions](https://minecraft.gamepedia.com/Lingering_Potion).

### Potion injection
When used while sneaking, a filled hypoinfuser infuses the wielder with the
contained potion. It infuses 250 mB of the potion at a time, and has the same
effect as drinking a bottle of the potion. Potion effects applied to the wielder
do not have particle effects.

A filled hypoinfuser is capable of automatically infusing the wielder with the
contained potion. This can be enabled and disabled by pressing "Cycle Item Mode"
(V by default) while holding the hypoinfuser.

An active hypoinfuser keeps the wielder infused with the contained potion. It
infuses 50 mB of the potion at a time (one fifth of a bottle). The duration of
the applied effect is one fourth of the contained potion's duration. Potions
with instant effects are applied at half the power.

A filled hypoinfuser can be used on other players or
[mobs](https://minecraft.gamepedia.com/Mob) to forcibly inject the potion into
them. When used in this way, it infuses 250 mB of the potion at a time. The
duration of the applied effect is half of the contained potion's duration.
Potions with instant effects are applied at half the power.

If [Baubles](https://www.curseforge.com/minecraft/mc-mods/baubles) is installed,
hypoinfusers can be equipped as baubles in any slot.

### Dyeing
A hypoinfuser can be dyed by combining it with a
[dye](https://minecraft.gamepedia.com/Dye) in a crafting grid. The dye can be
removed by placing the hypoinfuser in a crafting grid.

### Enchantments
A hypoinfuser can be enchanted with [Holding](/docs/cofh-core/holding/) to increase its
capacity.

| Holding level | Capacity multiplier |
|---
| I | × 1.5 |
| II | × 2 |
| III | × 2.5 |
| IV | × 3 |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-compress}


Tiers
-----

Hypoinfusers come in six [tiers](/docs/thermal-foundation/tiers/).

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Tier | Capacity | (bottles) | Note |
|---
| Basic | 2,000 mB | 8 |
| Hardened | 6,000 mB | 24 |
| Reinforced | 12,000 mB | 48 |
| Signalum | 20,000 mB | 80 |
| Resonant | 30,000 mB | 120 |
| Creative | N/A | | Provides an unlimited amount of the potion it holds. |
{:.uk-table .uk-table-striped .uk-table-condensed .uk-text-small .cofh-table-semi-compress}
</div>
{::options parse_block_html="false" /}
