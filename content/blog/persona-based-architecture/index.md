---
title: Persona-based architecture
date: "2021-04-15T00:00:00.000"
---

We developers always dream about maintainable system. We longed for a simple system that is easy to work with, wether it is change, observe or debug.

We created a concept called clean code and clean architecture in order to pursuit that dream.

What is clean architecture? There are some definition defined by [Uncle Bob](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). It must be independent of framework. It must be indenpendent of UI, etc.

Everything seems good and since we have a solid ground on what a clean code is, we should already achieve a maintainable codebase right?

Surprisingly, whenever I had some conversation with developers who implemented one of those clean architectures such as [Hexagonal Architecture]. I asked them how is it in practice. Do the team work more effective? Do the team happy with the codebase?

The answer usually go like this

> "Well, it is not really easy for common developer. They need to learn multiple concepts and take a lot of time to become effective"

Wait, in a quest of chasing maintainable codebase we accidentally created a codebase that is hard to maintain, did we?

### Practical maintainability

Personally, I have no issue working with great architectural patterns such as [Hexagonal Architecture](), [CQRS](), [Flux](https://facebook.github.io/flux/). I learned about this pattern for quite a while.

But when I work in a team of 10 developers, does it matter if I am the only one out of nine who knows about it?

We knows that maintaiable codebase must have dependency inversion, low coupling, high cohesion, follow SOLID principles, follow DRY principles, etc. Surprisingly, when we follow all the rules of maintainable codebase and at the end, the team might find it hard to work with.

What happen? Are we chasing an illusion of maintainable codebase? Are we a bunch of sheeps that blindly follow the sheperd rules with a false hope of promised maintainable land?

I think when we follow all those rules and theory, we achieve theorotical maintainability. Any codebase with all those characteristics should be maintainable, in theory.

In practice, I think maintainability should simply be defined like this.

> A maintainable codebase is a codebase in which a team that responsible for maintain can effectively work with.

That's it. Such a simple definition.

All those rules about dependency inversion, coupling, cohesion, SOLID, DRY are just tools to achieve the dream. We should understand those concepts in order to create a maintainable codebase. But they should never be viewed as a goal in itself.

Is CQRS codebase maintainable? If a team find it easy to work with, then yes.

At the end, the maintainability of codebase never depends on wether you do things in a right way or follow best practices.

It is all depends on **humans**. Yes, those fuzzy emotional unreliable humans.

### Working with human

> Once a software architect said this to me: Software Architect is a very special role. We are responsible for overall quality of the codebase. We know quality of the codebase depend on developers. And yet, we don't have any power to hold those developers accountable. We can only design, convince and maybe set some rules.

A path toward maintainable architecture is a such a vague path. Since it all depends on human, there is no correct answer. No matter what you do, you might be right or you might wrong.

We developers are familiar in working with binary. There will always be a right way. Code should either compiled or error. Code should either pass a test or fail a test. Everything should be consistent and reproducible.

But human, human are not consistent at all.

How can we work with human?

I would like to introduce you to two fields that are pretty much in a same spot:

The first field is design field. Designer never have direct control over user, and yet they need to design both UX and UI to guide user to do the right thing. Their career pretty much depends on guiding user to do the right thing while still being happy with the overall experience.

The second field is economic field. Economic planner never have a direct control over population behavior, and yet they need to create a system that incentivize people to a certain economic direction. Otherwise, the whole nation failed.

I always be facinated by behavioural economic. How can you introduce a policy? How will people react to that? What will be consequence?

There are many tools and way of thinking from those fields that can be applied to software architecture. I can name many. Design thinking, User testing, Unintended consequence, Game Theory, etc. All those tools are applicable to software architecture.

And today, I will write about a tool that I steal from design field: **Persona**

### Persona

According to Wikipedia, here is a definition of persona

> A persona, (also user persona, customer persona, buyer persona) in user-centered design and marketing is a fictional character created to represent a user type that might use a site, brand, or product in a similar way

Basically, whenever designer design anything they create a fictional character of their user. And we can adopt this practice of creating a fictional character of maintainers.

There are many way to create a persona in product development. To get back to software architecture, I think persona of maintainers should consist of two parts:

- Context. What is the experience level of our fellow developer? What is their role? What will they do in day-to-day basis?
- Expectation. Based on context and our design, what are our expectation?

The context help you emphatize with capability, limitation and habit of maintainer. That will be an architectural design constraint. While the expectation help you understand what you expect from each.

For example, let say we want to adopt microservice architecture. Here is a persona example:

We might start by either context side or expectation side. We might start by asking ourselves: here what I want from our maintainers. What kind of people are they? Or you might start by: here are our maintainers. What can I expect? It works both way.

Just by the act of writing down persona, we make a connection between maintainer and expectation become clearer and more realistic.

### Persona testing: Context side

Once you have persona, you need to test your persona.

It is very simple. We just look at actual maintainers and see if they fit the description.

//////////////////////////////////////

In this case, we identify the gap between actual maintaner and our ideal maintainer. Mark doesn't have 6 years of experience, but he understand distributed system.

Once all gaps are clearly identified, we have many choices to deal with them.

Aside from clear choice of changing our architecture to fit the maintainers, we can also provide a training and capability improvement program. We can switch some team members around with other projects. We can hire someone from the outside that match a requirement.

We can even set a standard and career development. We can bring your persona to all those junior and say: Here is a characteristic of developer whom we want you to be in next year. Once you obtain these, we can talk about promotion or next step.

All of the above are some examples of what we can do once gaps are clearly identified.

I hope you now see the value of writing down persona.

There is one thing I want you to be prepare. Seeing these gaps might lead to some hard conversation and we might not feel comfortable about these.

All I can say is that this approach works much better than design for the best and pray for the rest approach. It works much better than blindly adopting microservice and at the end, all maintainer just want to quit or kill the project.

I heard these kind of stories so many times. Architecture implement a fancy architect and create a big gap between what should happen and what actually happen.

Those gaps will not go away just because we don't think about it. So let us be mentally prepared and confront those gaps heads-on.

### Persona testing: Expectation side

As we adjust our context, we still might be wrong about expectation.

For example, we might think that a person with 4 years infrastructure experience would be able to effectively monitor microservices within 5 days. We might think that senior developer will be able to faciliate post-mortem.

At the end, we might be wrong.

When you have expectation and context written down, it open up a choices.

Maybe our architecture need more training and knowledge than what we initially thought. Maybe the way we separate our domain does not enable our maintainer to contribute. Maybe our maintainer stuck in some legacy process or legacy code that we don't know.

There are many possible causes and possible solutions. As in product development field said, we will never get our assumption right until we launch a product into the market.

And that is ok.

When we know exactly where we wrong, we can make it right.

It is better to say

> _I thought microservice going to allow team to be autonomous. Turns out, they still depends on many service. We need to bring those services back together and rethink about how we draw our domain boundaries._

than

> _We tried, and Microservices just does not fit us._

Also, it is better to say

> _I thought a programmer with 6 years Java deveopment experience who demonstrate capability in OOP should be able to handle this. That is where I am wrong. It seems that Java experience is irrelevant here. We need someone who understand how distributed system works to maintain this system._

than

> _We need to hire better programmers to maintain this system._

And personas allow you to say these type of sentences with confidence.

Wether the path forward is to change our architectural decision or provide improve maintainers competency, it is much better to be explicit.

And it is ok if you don't optimize your architecture for maintainers, as long as you make it clear why and what do you expect instead.

With persona, you have clear message to all stakeholders about what you expect. You can have a meaningful conversation on how to adjust according to hiring and capability limitation.

## Side Benefits

Aside from software architecture perspective, having a clear persona can be a tool to connect many aspect of software engineering management

- Hiring - What is a job description? Persona!
- Career growth - How shall we set junior developer expectation? Persona!
- Capability building - What kind of training should we provide this year? Persona!

I was in a position of tech lead who responsible on both management and architecture, and having persona in mind helps a lot.

## End note

Today, I introduce a concept of practical maintainability. And I think software architect should strive for it.

When it comes to practical maintainability, it's all about real human rather than rules, processes and practices.

In software engineering field, we mostly focus on binary and concept. In some other fieds, they have many tools to deal with human inconsistency. We can learn a lot from them.

In order to be success in software architect, you rely on human. Persona is one of many tools to will help you laid out dependency between your design and human behavior. Persona testing help you understand how your design actually works in practice.

Once you have everything visualize, you have a power to solve it.

I believe that, just like every other type of architect, software architect is supposed to solve human problem. Architecture should serve human need, not the other way around.

Thanks for reading!
