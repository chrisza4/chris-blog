---
title: The software rewrite dillema
---

I believe everyone had seen or been in a situation like this.

Imagine: You've been assigned to a legacy project. It does not have any test. It used a very old coding style, or no consistence style at all. Global variables everywhere. Everything is such a mess.

In this type of project, there is always someone who say

> The whole thing is a mess and unmaintainable. We need to rewrite the whole stuff.

I believe any seasoned software developer had see this at some point in there career.

And then, some of them are lucky enough to have a chance to actually start rewriting everything from scratch.

## The ambitious rewrite project

After a while, many problem arises. The rewrite project have been ongoing for a year. There is no sign to an end at all.

Business start to doubt the project. Engineering team start to say that requirement is not clear. Everyone start to reveal some hidden secret features in the current system that maybe only one or two customer use, but still you must implement it. Worst of all, the new green-field architecture you designed was never meant to handle this type of feature.

Deadline is alooming, and you don't even know how far are you from the finish line. How much effort do we need to put on until we can truly replace the old system? I don't know, but everyone please keep going.

Many ambitious rewrite project failed miserably. [Joel Spolsky](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/) already wrote a great article about how this strategy have a strong tendency to failed at the end.

But contrast to this, in my career, I successfully rewrote two systems.

The first system is the one I worked on for a while. I started that project by putting every business logic in stored procedure, and after a while I realized that it is very hard to maintain. So, I rewrite everything and move most of the business logic into the codebase.

The second system, I inherit from another programmer, I think it is very messy and I decided to rewrite the whole frontend and move it to another framework (Angular 1 was still a thing).

At the same times, I saw my friend had many failed story to tell, both personally and sometimes in article. So I start to think, what is the differences?

And here is the my assumption

## The great dillema

Now, here's the kicker:

> _"You need to be unfamiliar with the system in order to see value of the rewrite. But you need to be very familiar with the system in order to successfully rewriting it."_

What I see in most of the rewrite project looks like this.

1. A team of programmer start working on a legacy system.
2. They found that the system is really hard to understand, and hard to work with.
3. They fed up with the legacy codebase. They give up on it, and they start suggesting a rewrite.
4. .....
5. The project fail to deliver or very lacklusting.

And the main difference between those project and my experience is simply, **I did not give up on the old codebase**

Most of the times, this is step four

4. After the rewrite project was approved, programmers start treat old system as a black box. They refuse to touch the legacy code with a ten-foot pole. They only look into specs and build the new system accordingly.

In the first project, I understand ins-and-outs of my messy stored procedures, and it took me only a week and few days to move almost every business logic to the core code.

In the second project, even if it a mess and I have a permission to rewrite, but I still spent a great amount of time during the rewrite mapping out the relationship between the feature of current messy frontend codebase.

In my experience, every success rewrite can only be done with understanding in the legacy system.

But most of programmer suggest the rewrite because they don't want to work with the legacy system anymore, they want to be free from it.

## Don't avoid legacy code

I have one good news and one bad news.

Good news: It is totally possible to rewrite the legacy system and make it much cleaner, smoother and easier to work with. I did that before.

Bad news: In order to rewrite, you need to dig even deeper and get even closer to that legacy system you desperately want avoid.

In my experience: You can never trust a spec in rewrite project. You need to look into spec, map it with the current legacy code, see if there is any little tiny secret, and refine the specs accordingly.

Sometimes those tiny lettle secrets can be throw away, sometimes not. You never know. But only way to know is to lay it out. And only way to lay it out is to become an expert in the legacy code.

Then the dilemma might kick-in, because once you familiar and understand ins-and-outs of the legacy system, you might not feel an urge to rewrite everything anymore.

That is okay, at that time if you still remember why do you want to rewrite the whole thing in the first place, then you will make a better-informed decision.

Sometimes you might decide to rewrite only few parts, and sometimes you might decide to refactor it just a little bit.

## The hard truth

The real hard truth here is

**Once you touch legacy code, there is no escape**

If you want to move away from those messy ugly incomprehensible dirty code, you want to create a rewrite, then the faster you dig into it, the faster you will move away.

I repeat: There is no escape.

Sometimes developers use the rewrite as an escape hatch. They don't want to touch those ugly incomprehensible dirty code. They cannot maintain it effectively, so that is why they want to rewrite.

And I sympathize with that sentiment. I understand how it feel.

But still, I repeat: There is no escape.

Using rewrite project as an escape mechanism will never end well.

I only found two type of rewrite success:

- Rewrite with full Rebrand of product, such as [Basecamp, VSCode](https://medium.com/@herbcaudill/lessons-from-6-software-rewrite-stories-635e4c8f7c22) and Windows 10. That required business decision to drop some of backward compatibility and whole marketing effort to rebrand as a new software package.
- Rewrite from experience of legacy code. You start writing specs. Then you map all observable features to the legacy code. You read through all that to uncover all little secrets there. Then you define a true specs. Only from that, you can start a rewrite.

And if you don't have liberty to go with the first choice, then I repeat again.

**Once you touch legacy code, there is no escape**

The sooner you accept this statement into your heart, the quicker you can get away from legacy code.

It works for me. As I started to submit myself to the fact that I need to read and understand legacy code, ironically, I started to get more and more opportunity to rewrite, refactor and eventually get away from it.

The world is pretty ironic place, and thanks for reading.
