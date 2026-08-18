---
title: On reading code in the world of AI
date: "2026-08-17T00:00:00.000"
hidden: true
---

In today world where AI can generate a lot of code in short amount of time, everyone is asking if we still want to read code? 

I just read an excellent article, [Reading Code Considered Helpful](https://raymyers.org/post/reading-code-considered-helpful/), and that inspire me to write my opinion piece on code reading. I have these thought for quite a while and I spoke or written about it in scattered piece. I think it is a good time to consolidate.

Before I go on to the point of reading code, I want to state the basic which seems like it forgetten.

## We need to read something

Yes, at the end of the day, we need to read something.

Even in the very very imaginary future world where we can delegate all the verification to AI, and it can simply chat back to us with green ✅ or red ❌. 

Even then at least, we need to read that red-or-green signal!

So my frame of thinking come from the fact that, what kind of reading give us the best bang for the buck.

Because at the end of the day, we still need to read something.

In the extreme example of only reading green and red signals, the only information we gain is: "Does the AI report that the system works?"

Since we only receive a single binary of yes/no, it cannot tell us anything beyond that. For example, it cannot tell:
- What does it mean for a system to "work"?
- What is the validation method?
- What are the non-functional characteristics of the system (e.g., performance, security)?
- What are the functional characteristics of the system?

According to information theory, a single bit of information can resolve exactly one uncertainty. Nothing more, nothing less.

Anything beyond that either comes from additional information (aka. reading something else) or simply assumption and hallucination.

So, if you want to know more than "Does the AI report that the system works?", you need to read more. 

You might need to read specifications, AI transcripts, etc. But you definitely need to read more. It is mathematically impossible to know more than "Does the AI report that the system works?" without acquiring additional input.

This leads to the next set of questions:
- Why "it works" is not enough information?
- What information do you need aside from "Does the AI report that the system works?"
- What is the most effective way to get that information?

Let me talk about the last question first.

## Information and Cognitive absorption efficiency

This is where I think there is a common premature assumption in the market:

**Reading English is always easier than reading code**

Is it, though? I don't think that's true.

I can speak from experience. Before the AI era, I did a lot of assessment and architecture work for clients. For every single project, I always asked for codebase access alongside the software specifications and diagrams, just to understand what the client actually meant by what they wrote.

Given the choice between a 200 pages spec and direct access to the code, I would often prefer code itself (actually, usually both).

In the AI era, I once took over a codebase from a "vibe coder" who used spec-driven development. It resulted in dozens of markdown files scattered everywhere, filled with AI slop and fluffy words. Also, the documentation was full of internal contradictions. 

So, I just deleted all the markdown files and read the source code instead.

Furthermore, as someone who does not speak English as a native language. I am confident that many local programmers I have worked with find reading 100 pages of English specifications far more challenging than reading code.

My point is simple: we should read whatever provides the most value for our effort. 

If it is code, so be it. If it is English and spec, so be it.

The thing here is that the efficiency heavily depends on an individual's language proficiency.

So I don't think we can make a single umbrella claim that applied to every body in industry.

This is why I think using "I-statement" as referred article claim is very important. Because language proficiency is very vary

And if there is a first takeaway here, it would be:

**AI Programming is still ultimately, a team sports and about human**

In the past, the choice of a programming language heavily depended on what team familiar with, this principle still applies.

How much do you want to use English vs. Code, depend heavily on what kind of team do you have.

## Why do we read code to begin with?

it is wise to understand do we want to read cod to begin with.

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


## Validating correctness

In short, I think we don't need to read code to validate correctness. Automated testing seems to be much better choice. And this is true since before AI coding era.
