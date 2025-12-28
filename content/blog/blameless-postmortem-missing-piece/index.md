---
title: Missing piece of blameless postmortem\: Performance management
date: "2025-10-21T00:00:00.000"
hidden: true
---

As I am lingering on the internet, there are many engineers encourage blameless postmortem.

- https://sre.google/sre-book/postmortem-culture/
- https://www.atlassian.com/incident-management/postmortem/blameless
- https://postmortems.pagerduty.com/culture/blameless/

Everytime I see this being shared in any platform, there will be a comment and complain that this process does not really work when you have truly incompetent colleague. And we should hold them accountable.

And of course, there are some truth to that.

Today I want to address the missing piece of blameless postmorem, how can we deal with incompetency?

For TLDR; there are 3 points I going to make here.

1. Blameless postmortem and performance management can run together.
2. Blameless postmortem is a tool to fix and prevent specific technical problem. Performance management is a tool to fix performance problem.
3. You can't use blameless postmortem to fix performance problem and you can't use performance management to fix technical problem.

If you already have an idea what I'm going to talk about from those points, feel free to skip the article. It is nothing fancy or advnace.

---

## What is performance management?

Before we go, let define the definition of performance management first so we are on the same page.

Performance management in my definition is pretty simple. You have a set of expectation that you want from each team member, and you try to manage the overall performance of everyone to meet or exceed the expectation. And then you might play around that expectation to align with current business need or aim for higher result and impact.

One key aspect of performance management is that performance management is about long term performance. Let say we have an expectation that a developer should be able to write a small widget or small API. But sometimes maybe developer is sick, busy, stress or have a bad day, they can't do it. It does not mean that developer "fail to meet expectation". In order for someone to meet or fail the expectation, we should look at overall pattern and not a single instance.

When the developer is stress or having a bad day, they might produce clumsy code from times to times. Fair enough.

But if 60% of the code they produce in 2-3 months straight are clumsy and buggy, yes that worth a talk.

## Blameless postmortem & Performance management

In blameless postmortem, we are talking about specific problem that happen in specific time. We talk about what did happen, what went wrong and how can we prevent it from happening in the future.
