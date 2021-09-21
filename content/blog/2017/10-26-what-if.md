---
author: King Lemming
author_url: http://www.twitter.com/KingLemmingCoFH
date: "2017-10-26T00:00:00Z"
published: true
title: What If?
---

But what if a chunk unloads and inventory slot 2 is full but a player removed
the new repair augment which forces the machine to stop processing the item in
slot 1, but it can't transfer or eject?

These are the sorts of things that I think about. Here's the context: I'm adding
a new augment to the Energetic Infuser. It'll allow for items to be repaired, at
the opportunity cost of no longer charging items. So mapping out that logic is
fairly simple. If the augment is installed, allow for items to be repaired. And
do not allow items to be charged.

![Augment - Charger](/images/posts/2017-10-26-what-if/augment_charger.png){:style="max-height: 512px"}

But...what if...

- There exists an item which is both repairable and rechargeable?
- That item is being repaired, and a player removes the augment?
- An item is being charged, and a player adds the augment?
- Either of the last two things happens and the machine cannot transfer/eject?
- The chunk unloads and the machine reads this state from disk?

Unlike the last couple of weeks, I'm on travel. I have a job, I travel for work,
and on these weeks, I get a lot less coding done on the mods. That's just the
nature of it.

So instead, I wanted to provide a brief glimpse into the what-if mind of a dev.
These questions are the kinds of things that we have to pre-emptively ask to
ensure that a new block/item/feature doesn't mess up existing gameplay. Or come
back to bite us later. And while some of those questions are the cornerest of
corner cases, they're still cases. And the nature of the machine in question
meant I couldn't easily rely on existing save data to solve this conundrum - for
performance reasons, it caches a reference to the item that it is charging. For
the non-coders out there, this means that it remembers what the item is so that
it does not have to check the inventory slot every single tick. It saves on CPU,
at the cost of memory. Don't worry - we're talking 4 bytes. The CPU savings is
worth it, in my opinion. However, the item doesn't really "exist" on disk. It's
created from the data which is read from the save file. So when a chunk unloads,
nothing in that chunk really exists as an object in memory anymore, it's on disk
and that means any cached references go away. Hence, when the machine loads its
data, it has to determine the nature of the items in its slots and cache in an
appropriate manner.

So, this loading code meant that I had a problem in how I approached this. At
the moment, I don't know of any items which are both repairable and rechargeable
(in the 1.12.x era), but I know somebody will eventually have one. And that case
will need to be handled. I also seriously doubt that we'll ever see an issue
where a player adds or removes an augment and then the machine somehow is left
processing while the chunk unloads. But in theory, this can happen. And now it's
dealt with. So the augment is done, and we're waiting on art.

![NBT - Charger](/images/posts/2017-10-26-what-if/nbt_read_charger.png){:style="max-height: 660px"}

So yeah. That's where I am. That's what goes into an augment. That's what I
pondered and coded for at least part of a 2 hour flight. Now the next patch will
have 8 augments, and another use for Fluid Experience.

And I hope that provides you some insight into mod development. :)
