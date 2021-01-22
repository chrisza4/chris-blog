---
title: The software rewrite dilemma
---

Imagine this: You've been assigned to a legacy project. It does not have any tests. It used an ancient coding style or no consistent style at all. Global variables are everywhere. Everything is such an incomprehensible mess.

In this type of project, there is always someone who says

> The whole thing is a mess and unmaintainable. We need to rewrite everything from scratch.

I believe any seasoned software developer experienced this at some point in their career.

And then, some of them are lucky enough to have a chance to start rewriting everything from scratch.

## The ambitious rewrite project

After a while, many problems arises. The rewrite project has been ongoing for a year. There is no sign of an end at all.

The business started to doubt the project. The engineering team started to say that requirement is not clear. The team started to reveal some hidden secret features in the current system that maybe only one or two customers use, but still, we must implement it. Worst of all, the new green-field architecture you designed was never meant to handle this type of feature.

Deadline is looming, and you don't even know how far are you from the finish line. How much effort do we need to put on until we can truly replace the old system? I don't know, but everyone, please keep going.

Many ambitious rewrite projects failed miserably. [Joel Spolsky](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/) already wrote a great article about how this strategy has a strong tendency to failed.

But contrast to this, in my career, I successfully rewrote two systems.

The first system is the one I worked on for a while. I started that project by putting every business logic in stored procedures, and after a while, I realized that it becomes unmaintainable. So, I rewrote everything and move most of the business logic into the codebase.

The second system, which I inherited, is very messy. I decided to rewrite the whole frontend and move it to another framework (and Angular 1 was still a thing).

At the same time, I saw my friend had many failed stories to tell, both personally and sometimes in the article. So I start to think, what are the differences?

And here is my assumption

## The great dillema

Now, here's the kicker:

> _"You need to be unfamiliar with the system to see the value of the rewrite. But you need to be very familiar with the system to successfully rewriting it."_

What I see in most of the rewrite project looks like this.

1. A team of programmers started working on a legacy system.
2. They found that the system is really hard to understand and hard to work with.
3. They fed up with the legacy codebase. They give up on it. They start suggesting a rewrite.
4. .....
5. The project fail to deliver or very lacklusting.

And the main difference between those project and my experience is simply, **I did not give up on the old codebase**

Most of the time, this is step four.

4. After the rewrite project was approved, programmers start to treat the legacy system as a black box. They refuse to touch it with a ten-foot pole. They only look into specs and build the new system accordingly.

In the first project, I understand my messy stored procedures' ins-and-outs, and it took me only a week and few days to move almost every business logic to the core code.

The second project was a mess, and I have permission to rewrite it. I spent a great amount of time during the rewrite mapping out the relationship between the current messy front-end codebase and the features.

In my experience, every successful rewrite required a significant level of understanding of the legacy system.

Ironically, most programmers suggest the rewrite because they don't want to work with the legacy system anymore. They want to be free from it. They don't want to understand it.

## Don't avoid legacy code

I have one good news and one bad news.

Good news: It is totally possible to rewrite the legacy system and make it much cleaner, smoother, and easier to work with. I did that before.

Bad news: To succeed in the rewrite, you need to dig even deeper and get even closer to that legacy system you desperately want to avoid.

In my experience: You can never trust a spec in a rewrite project. You need to look into the spec, map it with the current legacy code, see if there is any little tiny secret, and refine the specs accordingly.

Sometimes those tiny little secrets can be throw away, sometimes not. You never know. But the only way to know is to lay it out. And the only way to lay it out is to become an expert in the legacy code.

Then the dilemma might kick-in, because once you are familiar with and understand the legacy system's ins-and-outs, you might not feel an urge to rewrite everything anymore.

That is okay. If you still remember why do you want to rewrite the whole thing in the first place, then you will make a better-informed decision.

Sometimes you might decide to rewrite only a few parts, and sometimes you might decide to refactor it just a little bit.

## The hard truth

The real hard truth here is

**Once you touch legacy code, there is no escape**

If you want to move away from those messy, ugly, incomprehensible dirty code, you want to create a rewrite, then the faster you dig into it, the quicker you will move away.

I repeat: There is no escape.

Sometimes developers use the rewrite as an escape hatch. They don't want to touch those ugly, incomprehensible dirty codes. They cannot maintain it effectively, so they want to rewrite it.

And I sympathize with that sentiment. I understand how it feels.

But still, I repeat: There is no escape.

Using the rewrite project as an escape mechanism will never end well.

I found that there are only two types of rewrite success story:

- Rewrite with full Rebrand of product, such as [Basecamp, VSCode](https://medium.com/@herbcaudill/lessons-from-6-software-rewrite-stories-635e4c8f7c22) and Windows 10. That required business decision to drop some of backward compatibility and whole marketing effort to rebrand as a new software package.
- Rewrite from the experience of legacy code. You start writing specs. Then you map all observable features to the legacy code. You read through all that to uncover all little secrets there. Then you define true specs. Only from that you can start a rewrite.

And if you don't have the liberty to go with the first choice, I repeat again.

**Once you touch legacy code, there is no escape**

The sooner you accept this statement into your heart, the quicker you can get away from legacy code.

It works for me. As I started to submit myself to the fact that I need to read and understand legacy code, ironically, I began to get more and more opportunities to rewrite, refactor and eventually get away from it.

The world is pretty ironic, and thanks for reading.
