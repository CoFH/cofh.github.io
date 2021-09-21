---
author: King Lemming
author_url: http://www.twitter.com/KingLemmingCoFH
date: "2017-11-01T00:00:00Z"
published: true
title: Consistency and Flow, Part 1
---

Let's talk about systems and why they're awesome.

I've been asked quite a few times in various settings about my thoughts on mod
development and design. It doesn't feel like it, but Thermal Expansion has been
around for over five years now. In that time, I feel that I have become a much
better modder both technically and creatively. Given that, my ideas and
understanding of what constitutes good mod design has changed somewhat over the
years.

So with that in mind, I'd like to take a couple of these posts and talk about
some mod design concepts that I try to apply to all my work - *Consistency* and
*Flow*. For this post, I want to focus on consistency.

If you look up consistency on Google, I'm referring here to, "conformity of the
application of something," meaning the creation of systems of rules and
standards and then *typically* sticking to them. In my view, this benefits both
the player and the modder. I'll try and touch on both viewpoints, but they do
dovetail nicely, because with the exception of McJty, players and modders alike
are human.

From the modder perspective, consistency means that I can code in a very elegant
way. I don't want to get into the details of Java programming in this post, as
it could easily be a series on its own. Don't worry, I'll probably end up doing
that at some point. What's important to understand right now is that on a high
level, something you should know is that it's an Object-Oriented framework and
that there is a feature called *Inheritance*.

The framework means that I can code in such a way that I think about any given
machine in the world as a discrete object and tell it to do a particular thing.
For example, "Hey you - Pulverizer in the corner - do your update routine."

Adding inheritance to the mix means that I can skip a LOT of effort duplicating.
For example, an Induction Smelter and a Pulverizer actually have the *exact same
tick process*. Here it is:

![Update - Machine](/images/posts/2017-11-01-consistency-and-flow-pt-1/update_machine.png){:style="max-height: 620px"}

In fact, everything in Thermal Expansion which is a "machine" works this way.
What inheritance lets me do is add a twist or extra tiny bit of functionality
without completely copying over a bunch of code. If you're wondering why that is
such a benefit, consider that if I copy-paste and make an adjustment, I now have
twice the lines of code to maintain. And if I have a new idea, such as Augments?
I just add that to the base (or parent) class and it will uniformly apply to all
blocks of a type. Also, it serves to modularize the code and let me think about
problems in smaller terms. Divide and conquer.

With that rationale in mind, here's the update routine for the Fluid Transposer:

![Update - Transposer](/images/posts/2017-11-01-consistency-and-flow-pt-1/update_transposer.png){:style="max-height: 210px"}

And basically, that translates into, "If you have a bucket/tank or something of
that nature, do X. If not, do Y." It just so happens that Y is the exact same
process as every other machine. And by separating it into sub-processes, it's
easier to think about and maintain.

See what I've done here? I have a system. It's consistent, elegant, and reduces
the amount of copy-paste (and potential new errors) that I had to do to make a
multitude of different machines. And consistency in the code leads to
consistency in gameplay, which benefits players more than they even consciously
realize. So it's a bit of a head fake. Allow me to elaborate.

Humans are really good at recognizing patterns. The human brain is a well-tuned
biological pattern-recognition machine which has evolved over a really long
time. Don't get too full of yourself - it's a common feature to most animals,
but humans are especially good at it[^1]. Humans are also extremely social
creatures, which means that this ability has a number of beneficial implications
for learning and making sense of a world. This applies in real life, video
games, and especially an artificially constructed world such as the Minecraft
sandbox.

So, if you've played Thermal Expansion through its many iterations, you may know
that the block recipes have changed a few times over the versions. However, I'm
willing to bet that for most of you veterans out there, you quickly figured out
what I had changed with the new recipes. Also, I bet that if I asked most of you
seasoned players to guess the components in the unreleased machines that I wrote
about a couple of weeks ago, you would come up with lists like this:

### Brewer (Alchemical Imbuer):
- Machine Frame in the center.
- Redstone Reception Coil on the bottom.
- Two (2) gears of some type, on either side of the Coil.
- Two (2) of some other item, on top of the gears.
- Some other item on top of the frame, probably Brewing related.

Actually...I'll leave the Arcane Ensorcellator for you to imagine in your own
minds. For those of you who are unaware, it's a machine that enchants things.
Try and come up with a list.

...done?

I bet it looked a lot like the list for the Alchemical Imbuer. It's a Machine,
so there's a Machine Frame. It uses power (RF), so there's a Reception Coil. All
Machines have 2 gears, so obviously two of those. The other items? Hard to say,
but the top item is probably Enchanting related. Maybe even an Enchanting Table.

Scroll down to the bottom for the actual recipes. Were you close? I'm betting
you were.

Obviously, Thermal Expansion does not have a monopoly on this concept. Think
about Tinkers' Construct - there's absolutely a consistency to the process of
making a tool. You melt the metal in the smeltery, pour it into molds to make
the parts and then assemble them. The materials used change the properties of
the final tool, but the process itself is the same. Now, those of you familiar
enough with Tinkers' Construct know that the amount of parts and the nature of
those parts also changes with the tool - between 2 and 4 parts of different
types for different tools.

That brings up a point I hinted at initially - consistency does not have to be
absolute. Think about Devices - no Upgrades, no Augments. Dynamos and Machines
have both. Cells, Tanks, Caches, and Strongboxes? Upgrades only. For the sake of
gameplay, that makes it interesting, and removes tedium. Admit it, it would be
miserable if you had to upgrade AND augment every block in the mod, and your
inner perfectionist would demand that you do so. It could turn an essentially
beneficial mechanic into a feeling of unrelenting grind.

I should mention at this point that if you've played Thermal Expansion 5+ for
any length of time, you already know what I mean when I write "device." It's a
block. You can reconfigure the sides. It can auto-input or auto-output if
appropriate. No upgrades, no augments, and it doesn't require RF. It might
interact with the world, and it's going to require Copper and Iron to build
the frame, and a Redstone Servo instead of a Reception Coil. Consistency. And
I didn't have to write a manual to teach you that[^2]. A few minutes in
Creative mode combined with some curiosity, tooltips, and JEI, and you're
good.

So, to summarize - I write code to make systems. Those systems happen to govern
the behavior of blocks, materials, and gameplay. That makes things easier for me
and allows me to add twists and new features to existing gameplay with a bit
less effort. For players, *Consistency* makes it easier to learn and remember
facets of the mod, and provides a framework where a new player has a much easier
learning curve.

Of course, this isn't the only tool in the modder toolbox. I'll write about what
I call *Flow* in Part 2 next week. Consistency tends to be a prerequisite, but
not always, and there can be a beautiful interplay between the two. In any case,
thanks for reading. :)

![Recipe - Brewer](/images/posts/2017-11-01-consistency-and-flow-pt-1/recipe_brewer.png){:style="max-height: 124px"}

![Recipe - Enchanter](/images/posts/2017-11-01-consistency-and-flow-pt-1/recipe_enchanter.png){:style="max-height: 124px"}

---

[^1]:
    Humans are actually so good at this that there's a condition known as
    apophenia - false pattern recognition. This is what gives rise to conspiracy
    theories and a large number of logical fallacies.

[^2]:
    A manual is on the list, I promise. It's a thing I want to do, but I want a
    framework where I can easily add stuff to it and it won't necessarily
    require an actual in-game book. I've just been preoccupied with Thermal
    Expansion features, as the last few weeks attest.
