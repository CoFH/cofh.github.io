---
title: Commands
---

[CoFH Core](../) adds various
**[commands](https://minecraft.gamepedia.com/Commands)** to the game.


Summary
-------

All of CoFH Core's commands must be prefixed with `/cofh` and a space.

{::options parse_block_html="true" /}
<div class="uk-overflow-container">
| Command | Description | Permission level |
|---
| [enderchest](#enderchest) | Opens a player's [ender chest](https://minecraft.gamepedia.com/Ender_Chest). | 2 |
| [heal](#heal) | Fully heals players. | 2 |
| [ignite](#ignite) | Sets entities on fire. | 2 |
| [repair](#repair) | Fully repairs the equipment of players. | 2 |
| [zap](#zap) | Causes entities to be struck by [lightning](https://minecraft.gamepedia.com/Lightning). | 2 |
{:.uk-table .uk-table-striped}
</div>
{::options parse_block_html="false" /}


Details
-------

### enderchest
Opens a player's [ender chest](https://minecraft.gamepedia.com/Ender_Chest).

    /cofh enderchest [<player>]

player
: The player whose ender chest to open. Must be a player name or a [target
selector](https://minecraft.gamepedia.com/Target_selector). If unspecified,
opens your own ender chest.

---

### heal
Fully heals players, restoring health, food and air, extinguishing fire and
removing negative status effects.

    /cofh heal [<targets>]

targets
: The player or players to heal. Must be a player name or a [target
selector](https://minecraft.gamepedia.com/Target_selector). If unspecified,
heals yourself.

---

### ignite
Sets entities on fire.

    /cofh ignite [<targets>] [<duration>]

targets
: The entity or entities to set on fire. Must be a player name or a [target
selector](https://minecraft.gamepedia.com/Target_selector). If unspecified, sets
yourself on fire.

duration
: How long to set the targets on fire for, in ticks. If unspecified, defaults to
10 ticks.

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
: The entity or entities to zap. Must be a player name or a [target
selector](https://minecraft.gamepedia.com/Target_selector). If unspecified, zaps
yourself.
