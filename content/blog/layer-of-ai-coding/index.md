---
title: Layers for agentic engineering
date: "2026-09-06T00:00:00.000"
hidden: true
---

So, I've been working with a lot of code and systems lately. Some of the systems are built using fancy technique like loop engineering, or fancy AI framework such as spec-driven [get-shit-done](https://github.com/open-gsd/gsd-core).

But I also work with my personal projects, with minimal framework.

I've found that in spec-driven or some kind of loop engineering, it is design for building big changes. They usually have sophisicated AGENTS.md, throughout check, multi-layer and multi-role agents (code -> qa -> refactor) to validate and verify big changes.

So when I started using my coding agents with this codebase and I want to do a very simple changes, such as maybe switch some fields or change some title, I was frustrated that agentic loop for this small changes take like 20-30 minutes. It is obviously become way way too slow to the point that I rather do code by hand. (Or even delete the whole AGENTS.MD and rule files out, but sadly I don't own the whole project).

At the same time, when I have a really clear big feature in mind, I can give them a well-defined plan and spec and these loop perform pretty well.

When I'm back working with my hobby project, I find it is very easy to do small changes with coding agents. I can change color, font, title, try out new stuff in very short time period. But then again, there is no way I can give a large parallel featureset and wait for agent loop to finish the work.

First thing I realize is that this is a classic lesson from software engineering throughout industry. The optimal working process for "large project, fix set of feature and budget. Define everything upfront" is totally different process for incremental development.

Second, I think the industry is trying to find "what is one setup to generalize whole software development process? Is it loop, graph, or which framework"? And I think that might be a wrong question to ask to begin with. I'm start to think that even if hyperscaler or anyone come up with the generic process / framework that is optimal for average case of software engineering, so called "best practices", it would never be able to match the speed and cost-efficiency to someone who can tailor their process based on circumstance.

Third, from personal pov, I'm more incline to put everything into skills rather than generalize the project workflow. Maybe start with /small-feature, /medium-feature, /large-feature or something like that.

That is pondering.
