---
title: Commands
category: features
subcategory: general
---

[CoFH Core](../) adds various
**[commands](https://minecraft.fandom.com/wiki/Commands)** to the game.

Summary
-------

All of CoFH Core's commands must be prefixed with `/cofh` and a space.


<div class="uk-overflow-container">
| Command | Description |
|---
| [charge](#charge) | Charges items in a player's inventory. |
| [enderchest](#enderchest) | Opens a player's [ender chest](https://minecraft.gamepedia.com/Ender_Chest). |
| [friend](#friend) | Allows management of a player’s [friend list](../../cofh-core/friend-list). |
| [heal](#heal) | Fully heals players. |
| [ignite](#ignite) | Sets entities on fire. |
| [invis](#invis) | Makes the target invisible. |
| [invul](#invul) | Makes the target invulnerable. |
| [repair](#repair) | Fully repairs the equipment of players. |
| [zap](#zap) | Causes entities to be struck by [lightning](https://minecraft.gamepedia.com/Lightning). |

</div>



Details
-------

### charge
Charges items in a player's inventory.

    /cofh charge [<player>]

player
: The player whose inventory to charge. Must be a player name or a
[target selector](https://minecraft.gamepedia.com/Target_selector). Cannot
target multiple players. If unspecified,charges your own inventory.

---

### enderchest
Opens a player's [ender chest](https://minecraft.gamepedia.com/Ender_Chest).

    /cofh enderchest [<player>]

player
: The player whose ender chest to open. Must be a player name or a
[target selector](https://minecraft.gamepedia.com/Target_selector).
Cannot target multiple players. If unspecified, opens your own ender chest.

---

### friend
Allows management of the command user’s [friend list](../../cofh-core/friend-list).
Add players to, remove players from, or clear your friends list.

    /cofh friend (add <player> | remove <player> | clear)

targets
: The player or players to ally with. Must be a player name or a
[target selector](https://minecraft.gamepedia.com/Target_selector).
If unspecified, fails.

---

### heal
Fully heals players, restoring health, food and air, extinguishing fire and
removing negative status effects.

    /cofh heal [<targets>]

targets
: The player or players to heal. Must be a player name or a
[target selector](https://minecraft.gamepedia.com/Target_selector).
If unspecified, heals yourself.

---

### ignite
Sets entities on fire.

    /cofh ignite [<targets>] [<duration>]

targets
: The entity or entities to set on fire. Must be a player name or a
[target selector](https://minecraft.gamepedia.com/Target_selector).
If unspecified, sets yourself on fire.

duration
: How long to set the targets on fire for, in ticks. If unspecified, defaults
to 10 ticks.

---

### invis
Makes the target invisible.

    /cofh invis [<targets>] [<flag>]

or

    /cofh invis [<flag>]

targets
: The player or players to make invisible. Must be a player name or a
[target selector](https://minecraft.gamepedia.com/Target_selector).
If unspecified, makes yourself invisible.

flag
: Boolean that accepts true/false. If unspecified, defaults to true.

---

### invul
Makes the target invulnerable to damage (does not affect /kill or void damage).

    /cofh invul [<targets>] [<flag>]

or

    /cofh invul [<flag>]

targets
: The player or players to make invulnerable. Must be a player name or a
[target selector](https://minecraft.gamepedia.com/Target_selector).
If unspecified, makes yourself invulnerable.

flag
: Boolean that accepts true/false. If unspecified, defaults to true.

---

### repair
Fully repairs the equipment (held items and worn armor) of players.

    /cofh repair [<targets>]

targets
: The player or players whose equipment to repair. Must be a player name or a
[target selector](https://minecraft.gamepedia.com/Target_selector). If
unspecified, repairs your own equipment.

---

### zap
Causes entities to be struck by
[lightning](https://minecraft.gamepedia.com/Lightning). Only works on entities
with a direct line of sight to the sky.

    /cofh zap [<targets>]

targets
: The entity or entities to zap. Must be a player name or a
[target selector](https://minecraft.gamepedia.com/Target_selector).
If unspecified, zaps yourself.