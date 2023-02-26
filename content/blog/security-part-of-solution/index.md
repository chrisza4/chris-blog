---
title: "Dear Security, be a part of the solution"
date: "2023-02-26T00:00:00.000"
---

This article is kind of a rant.

There are many software security engineer/expert or whatever out there who visibly state dissatisfaction with the current state of software engineering. They claim that most developer does not care about security. They claim stakeholders are pushing for features. They claim businesses and VPs just care about the number and are very irresponsible when it comes to security.

While there is some truth to that, I think the way many computer security engineer work today also contribute to the situation.

I would assert that if you really want to care about security, security should be a part of the solution.

We should have educated a developer to learn about security, we should have done security threat modelling from the beginning of the project. A security expert should learn about the business goal of the software, what are the priority and how to accommodate security into the software product in a way that is not too contradictory with the business purpose of the software itself.

That way, the team will prevent insecure code to be written from the beginning, starting from a requirement, story writing to code review. Everyone will be aware of security and the probability of insecure code being written from the beginning will be greatly reduced.

Sadly, the common way of how security works these days are: Set rules on what you can and cannot do and then scan for vulnerability at the end of the project

There are many situations where this does not really work. For example, [SQLite response to CVEs](https://www.sqlite.org/cves.html) clearly shows that the vulnerability raise isn't significant in SQLite software context.

I've been in this type of situation before. CVEs raised in our software do not make sense to me. But ok, maybe I'm a stupid one here. Let's talk about it.

The worst part is when the discussion is shut down or ignored.

"It's a policy. Here are the checkboxes. Go ahead and comply with these"

"But... this is our business goal, and this is the way we design it. Maybe it's stupid. Maybe we should have not done this from the beginning. What you suggest isn't really feasible at first glance but I also care about these security concerns. Can we have a talk?"

"What's to talk about? Clearly, you don't care about security otherwise you would go ahead and implement our suggestion already or you wouldn't design this stupid insecure shit in the first place."

Oh god, damn it.

It is sad to see many security engineers refuse to care about particular detail of the software we build, and care about the business context and domain that people are working on while demanding everybody ranging from developers to C-Levels care about security.

That's not how you get people to care about security. Not at all.

If you really want to make people care about a security issue, you need to care about other people's issues as well. You need to hear their concern, you need to work with them, and figure out a better solution together.

**And that is how you get people to care about your concern. You show them that you care about their concern, and then they will start to care about yours. This is such a basic human principle that somehow our industry keeps forgetting.**

### But compliance scale. We don't have time to educate everyone

You don't need to throw out your checkboxes and compliance rules. Those work well at scale and I understand the need for them. It's a better efficient use of time on a large scale normally. At the same time, you can go beyond mere compliance and checkboxes.

When you have a programmer who enjoys computer security working in any software and are properly educated, they will prevent security hole by reviewing their teammate code from the beginning. This is actually a more effective use of time than blindly auditing boxes. You prevent the flaw from entering the system.

### But security itself is such a huge topic, We don't have time to learn about the business domain

"But just making a feature is a huge task, I don't have time to care about security"

Guess what, same exact thing was said by the developer when it comes to security. And you always make a snarky how this is merely an excuse of an irreponsible developer.

### But most developer does not care about security and is very ignorant

Choose the one who cares then. And if you failed to see one, honestly I think it's on you. How the hell is vulnerabilities is one of the most upvoted threads in Reddit but yet, you can't find any programmer who cares about security? They may have struggled. Maybe. They may have been poorly educated about the topic. Maybe. But I can assure you many developers really care about security.

I just wish when it comes to CVEs, we get to learn something together. How can these CVEs be exploited? What is the way to prevent it? Which one hurt the user experience the least? Can we have a productive discussion on that?

I worked with an excellent security auditor once and they brainstorm with my team to come up with 3-4 ways to fix the issues and everyone learn a lot. After that, the team started to prevent security flaws during the code review process. I saw another team engage with another vendor who cares about boxes. The team assigned one programmer to blindly follow their instruction. Guess what, the team repeat the same mistakes again the next year.

I will end my rant for now.
