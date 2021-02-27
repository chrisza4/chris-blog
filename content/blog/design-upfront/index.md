---
title: Agile upfront design
date: "2021-02-27T12:00:00.000"
---

(Disclaimer: I make a lot of bash in waterfall methodology in the article. When I bash it, I bash on waterfall done wrong. I am aware that effective waterfall will not end up this way.)

One of the greatest questions in software design is how much should we put effort into upfront design?

Agile methodology has become a norm for software development, and many people argue for not design upfront. As a result, many of us claim that Agile prevents a good software design and aims to churn out endless features and technical debts.

While I don't believe that is true, I can see where this is coming from.

I want to share my approach toward architectural design.

## Two secrets of the agile design upfront

I think the first secret of upfront design can be simply put as:

> Do the upfront design, not for the future, for a present moment

Agile never says that we should not do any upfront design. But contrary to the Waterfall approach, **Agile is very against the design for anticipated requirements**.

Most of the waterfall projects have a fixed budget and timeline. Most of the time, the IT team is separate from business. Sometimes it is an internal team. Sometimes it is a vendor.

Let say you work for HR, and you want software for your department. You need to state the requirement to the development team. They will tell you how long it would take.

After you get your software, the development team will move to the next project and become busy for years until you get the next development queue again.

What if you want a small workflow change after the project is delivered? You wait for a year since this year the development team will be focusing on manufacturing department projects.

In this case, it makes perfect sense that the HR team will make a lot of guesses on what they want in the future because changes after delivery are very slow.

Now you can see how Waterfall incentivizes guessing future requirements. Sometimes we even asked them to guess.

_Will you need to do X in the future? Because we need to design for that upfront._

A team which familiar with waterfall methodology, with their best intention, will likely demand a customer to think of all possible requirements upfront. So they can design and lay the foundation to make it possible to scale for the future.

That is the waterfall upfront design.

I saw people blaming agile for bad software design and technical debt. I worked on a waterfall project, and I've seen worse. A strategy pattern for one strategy. An observer pattern for one observer. A factory of factory of adapter for only a single adapter implementation. I saw it all. Everything is abstract and extensible, without a clear need. Because of ....... future!!

Why this approach mostly fail? The harder we think about the future, the better software architecture should be, right?

Here comes the second secret:

> No one can predict future requirements with certainty.

Yes. The problem lies in the fact that we basically squeeze out a future requirement from a customer in waterfall methodology.

Then we design upfront for that "future," and then blame customers when that future never comes, and we have to maintain a bloated software.

You know how we talk about how hard it is to estimate a timeline for feature development, right? We know that many factors come to play. There might be a bad tech debt in the current codebase. The specs might be unclear. The library might not work as well as we initially thought.

The requirement anticipation is also that hard. The business landscape might change. The person who wants the feature might get fired. The key employee might resign, and the whole organization structure might need to change.

**I want us to be more empathetic toward business requirement gathering. It is very unfair for us to demand #NoEstimate because it is hard while also demanding to get every future requirement laid out upfront to design our program correctly.**

Don't be that entitled.

In my experience, the waterfall project gets a lot of technical debt as well. There are much non-sense code or design pattern which, I believe, designed for those anticipated requirements that the team force out of business and never come true.

So two secrets come to play in the Agile way to design upfront:

- Contrary to popular belief of design upfront is for the future: We focus on design for current requirements.
- Future requirements are mostly bullshit. That is why we don't design for that.

## Approach towards future

When I said stop design for future requirements, there is a big caveat.

There is no guarantee that any requirement will actually be something the user will want until we finished the software. So every requirement is essentially a future requirement.

In practice, I draw the line between present requirement and future requirement based on the confidence level.

For example, let say there are two requirement

- The system needs to be able to handle 1,000 req/sec (99%)
- The system needs to be able to handle 1,000,000 req/sec (30%)

Both of them are not required today since we don't have a single user yet. But since we are really confident that 1,000 req/sec is required, I will design for just that. I would not think about 1,000,000 req/sec.

Or this might hit closer to the home.

- User needs to be able to login using Google Account (99% confidence. All of the target users are using Google)
- User needs to be able to login using LDAP (30%, might happen when we know how to market to Enterprise)

Then I will design for only Google Account login. I might use a standard protocol implementation (OAuth), but in the end I would not worry about making sure the system can handle LDAP without refactoring.

You can imagine the difference. In the waterfall project, the customer might ask us to support LDAP even if it not need because the customer was afraid that they would need it in the future. We will be too busy to get back and help them. So we need to "design upfront" for that future requirement.

That leads to a terrible software design—a design for something that does not actually exist.

In Agile, I design for only current requirements. Since everything is essentially happening in the future, I define a requirement with a high confidence level as the current requirement.

For Google login, I can use OAuth. I can make an authentication services. I can put some thought on session timeout. I need to think about cookie or token. I need to think about interface of auth service and callback. That is the design phase. But I don't think about design and interface, network diagram and service layer that can handle LDAP at this point.

That is the Agile upfront design.

---

To wrap up: I believe that we should think about software design. We should not become a code-monkey and churning out feature regardless of tech debt.

We also need to accept that the future is unpredictable. Instead of upfronting design based on what might happen in the future, I believe we should do upfront design just for the current requirement (which can be defined by working closely with the customer as in Agile Manifesto).

That's all I have to say. Thanks for reading.
