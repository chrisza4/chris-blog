---
title: We don't need "more documentation"
date: "2021-02-13T00:00:00.000"
---

There are many sentiments around code documentation. On the one side, some advocates for self-documented code, and another side advocate for more documentation.

Truth be told, my main motivation toward writing this article is based a [Reddit's Thread](https://www.reddit.com/r/programming/comments/le46br/why_you_need_architecturemd/), esp this [comment](https://www.reddit.com/r/programming/comments/le46br/why_you_need_architecturemd/gm9zut3?utm_source=share&utm_medium=web2x&context=3):

In this article, I would like to show my thought on the topic. There are some rants I need to get off my chest.

## Manager: merely more documentation does not help

I have so many thoughts about documentation. But if I have only one bullet to make a point: this will be it.

> Many people working in the software industry assume documentation is easier to understand than a codebase. That assumption is not correct. Worst of all, it is not even close to the truth.

When a manager landed into a challenging hand-off project. They wish for more documentation. Sometimes, they might force a developer to write documentation with a good intention of making future maintenance work easier.

But let me ask a blunt question here. When you force a developer to rewrite a set of unambiguous logical instruction steps into an ambiguous language, human language, do you actually help your developers?

Here is the metaphor. You have a Spanish novel. You ask an author to translate it into English. You sent it to a person who proficient in Both English and Spanish. Which version do you think they will prefer?

In my experience, it almost always easier to reason within the code.

## Developer: Ask for what you need

When a developer faced a complex legacy system, they wish for more documentation. They might start to blame the previous maintainer for the lack of documentation.

They might start asking for documentation or even advocate for the whole company to produce more documentation.

Now let me ask you a blunt question again.

You have a person who struggles to express the logical steps in a well-structured, readable manner with the language designed for it. What makes you think that forcing this person to describe those logical steps again in a human language designed for ambiguous unstructured storytelling will make it easier to read?

Turns out, this is a terrible idea.

I found that most of the documentation produced by some policy or checkbox, which essentially forcing a developer to write in the virtue of "we need more documentation", will be messier than the codebase itself.

> _Ironically, the one who can write good documentation will write code that does not require heavy documentation._

Please, think carefully about what you really need.

I understand how it feels to work in a legacy system. But asking for random documentation will not help.

Because essentially, what we need is specific information, not the documentation. The core part is the information itself, and documentation is just one possible format.

Understand what you really need. Don't be reactionary. Just because you are working on a painful project and documentation does not exist there, it doesn't mean you need more random documentation.

I see many developers ranted about a customer giving them a solution, possibly a stupid one, rather than stating the problem. You know the type, the type who will tell you to implement some kind of Deep learning AI with Blockchain in his personal blog because all these fancy techs will magically solve his problem. You hate that guy, right?

Don't be that guy. Don't ask for just more documentation.

> State the problem, not the solution.

If that's the mindset we want from our customers, we better set an example ourselves.

Stop demanding more documentation, and start to ask for missing information.

## Code is just a part of system documentation

Having all that said, I will not say that we should just write a self-documented code, and we will never need documentation again.

Code cannot capture every useful information about the system.

There are many aspects that you cannot express in the codebase. Here are some examples

- The intention. Why is the code writing this way? How do you want everything to be connected?
- The norm. It is better to read about the standard way of doing things in the documentation than reading through at least 51% of the codebase to deduce.
- Deployment process.
- Assumptions.
- Invisible constraint of the system.
- Overall architecture.
- Strategic architectural decisions that happened in the past.
- etc.

The code cannot express these types of information. So whenever you document these, you bring some values.

You can advocate for both documentation and self-documented code. That helps. Still, there are many things that code cannot express. Self-documented code is just a part of whole documentation.

## Final Thought

This article is kind of a rant. Still, I believe we make the matter worst whenever we advocate for us to document more.

So developer, stop asking for more documentation. Instead, understand what information do you really want and ask for that. Maybe it can come in the form of good old documentation. Perhaps it can come in a form of an executeable document (aka. code). Doesn't matter.

So manager, stop asking for more documentation. Instead, I gave you a list of many things that the codebase itself cannot express. Ask your developer to document those, not some kind of documentation.

Also, a person who writes an unmaintainable codebase tends to write an also unmaintainable documentation. So don't fall into a trap that more documentation always helps. Instead, it would be best to ask for validation with another developer.

That's all I have to rant. Thanks for reading.
