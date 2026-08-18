---
title: On reading code in the world of AI
date: "2026-08-17T00:00:00.000"
hidden: true
---

In today world where AI can generate a lot of code in short amount of time, everyone is asking if we still want to read code? 

I just read an excellent article, [Reading Code Considered Helpful](https://raymyers.org/post/reading-code-considered-helpful/), and that inspire me to write my opinion piece on code reading. I have these thought for quite a while and I spoke or written about it in scattered piece. I think it is a good time to consolidate.

## Why do we read code to begin with?

Before we discuss about can we stop reading the code, it is wise to understand do we want to read cod to begin with.

Just like any other activity in any business workflow, we need to understand the original intended benefit and then see then we can answer these two questions:

1. Is benefit still valid in today world?
2. Is there any alternative activity that gain same level of benefit with less amount of cost?

Back to code reading, I think this is where we get lost in a weed because everyone read code (or think software engineer read code) for different purposes.

Anyway, the common purposes of reading code are

1. We read code to validating logical correctness, prevent bug and issues
2. We want to understand how system work
3. We want to make sure internal quality (code, architecture) adhere to standard
4. We use code review opportunity to do a mentorship

That's all I can think of.

Then in the world where "AI changes everything", is reading code still a valid and effective way to achieve these purpose?

Before I'm going through those purpose, I want to jump into a theme and one of the thinking framework I use: Which can simply state as...

## We need to read something

Yes, at the end of the day, we need to read something.

Even in the very very imaginary future world where we can delegate all the verification to AI, and it can simply chat back to us with green ✅ or red ❌. 

Even then at least, we need to read that red-or-green signal!

So my frame of thinking come from the fact that, what kind of reading give us the best bang for the buck, based on each purpose.

This is where I think there are common premature assumption in the market:

Reading English is always easier than reading the code.

Really? I don't think that is true.

Well, I can speak from my experience. Before AI era, I did many assessment and architecture work for client and every single project I work, I always ask for code access on top of software specification and diagram, to understand what do each client really mean when they wrote diagram and spec.

You can give me 50 pages of spec, I would prefer code access.

In AI era, I used to get takeover a codebase from "vibe coder" who did spec-driven development. It ends up with so many markdown files scattered all over the place, written in kind of AI slop with a lot of fluffy word. On top of that, it also have inconsistency within itself. So, I just simply delete all the markdown and read the code.

And also, I am not native English speaker. And I am pretty sure many local programmers that I worked with will have way way harder time read English spec than code.

Well, you can argue that they can use AI to translate spec to local language, fine, that is another alternative.

My point is simply: we need to read something that give the best bang for the buck. And one subtle point here is that this is heavily depend on each individual proficiency in language.

Even the code itself, if you give me Assembly or Brainfuck, I might prefer staying with English specification.

## Validating correctness

In short, I think we don't need to read code to validate correctness. Automated testing seems to be much better choice. And this is true since before AI coding era.
