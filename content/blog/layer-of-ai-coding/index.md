---
title: Layers for agentic engineering
date: "2026-09-06T00:00:00.000"
---

So, I've been working with a lot of code and systems lately. Some of the systems are built using fancy techniques like loop engineering, or a fancy AI framework such as the spec-driven [get-shit-done](https://github.com/open-gsd/gsd-core).

But I also work with my personal projects, with a minimal AI instruction, only very small AGENTS.md.

I've found that spec-driven or some kind of loop engineering is designed for building big changes. They usually have a sophisticated AGENTS.md, thorough checks, and multi-layer, multi-role agents (code -> qa -> refactor) to validate and verify big changes.

So when I started using my coding agents with this codebase and wanted to do a very simple change, such as maybe switching some fields or changing some title, I was frustrated that the agentic loop for these small changes took like 20-30 minutes to run everything (coding agent, QA agent, multiple layers of tests, spawn preview server, etc). It obviously becomes way, way too slow, to the point that I'd rather write the code by hand. (Or even delete the whole AGENTS.md, rule files and agent instructions, but sadly I don't own the codeabse.).

At the same time, when I have a really clear big feature in mind, I can give them a well-defined plan and spec, and these loops perform pretty well.

When I'm back working with my hobby project, I find it very easy to do small changes with coding agents. I can change color, font, and title, and try out new stuff in a very short time period. But then again, there is no way I can give a large parallel feature set and wait for the agent loop to finish the work.

The first thing I realize is that this is a classic lesson from software engineering throughout the industry. The optimal working process for "large project, fixed set of features and budget, define everything upfront" is a totally different process from incremental development.

Second, I think the industry is trying to find "what is the one setup to generalize the whole software development process? Is it a loop, a graph, or which framework?" And I think that might be the wrong question to ask to begin with. I'm starting to think that even if a hyperscaler or anyone comes up with a generic process / framework that is optimal for average cases of software engineering, so-called "best practices", it would never be able to match the speed and cost-efficiency of someone who can tailor and change their process based on circumstance.

Third, from a personal POV, I'm more inclined to put everything into skills rather than generalize the project workflow or rules. Maybe start with `/small-feature`, `/medium-feature`, `/large-feature` or something like that.

Well, I can "delegate the thinking to AI" and instruct it to "before doing anything, determine size of feature, then use appropriate skill", but I think it is more cost-efficient and quicker to think about that myself.
