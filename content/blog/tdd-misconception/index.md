---
title: "TDD Misconception: You can write some design code before test"
date: "2022-04-24T00:00:00.000"
---

I start a title with a controversial statement. Yes, you can write code before a test in TDD.

After I pair with many TDD practitioner, especially the beginner one. I found that many of them usually discourage me to write any code before test. I could not touch a codebase, keyboard or play around with anything before I write a test case.

So here I am, making a statement as a TDD practitioner too. You can write a code before test in TDD.

It is clear that any TDD tutorial and content says that you need to write tests before code. Why do I claim this?

Let me explain.

## The step zero of TDD: design

When we normally talk about TDD we usually just talk about the test-code-refactor cycle. We often forget or take a pre-requisite step for a grant.

_We need to design the code we want to write first_

We cannot to TDD without designing an interface, class or function. We need to figure out where will we put a new code first. Is it in an existing method? Is it in a new class? Is it in a new method?

Without this step, we cannot even write a test. At least we need to have method(s), procedure(s) or function(s) in our mind to write a test.

One thing why people advocate for TDD is because TDD encourages good design. You need to put some thought into where would you put the implementation, what should be an interface and all the design stuff. You need to make a decision on the interface in order to write a test before a code. And that's why generally speaking, TDD encourages good design. (This topic is still in a heated debate. Some claimed that TDD hurt the design.)

The full TDD cycle is not just test, code and refactor.

It's actually a design, test, code and then refactor.

There is a zero-phase involved, design how and where your implementation should be.

## Coding can be part of designing

There are many ways to come up with an interface design. You can think in your head. You can use a notebook. You can use a whiteboard. You can use a virtual whiteboard. There is no limitation on how would you design your interfaces.

And one approach to the design is to write some POC (aka. throwaway) code.

When I am not confident about having all the details I need to design an appropriate interface for a business requirement, writing a code (maybe working one or not working one) can help a lot in surfacing missing details.

The act of coding can help in figuring out the design. And no rule in software engineering states that the design must not involve any act of coding. And if someone tries to declare and enforce this rule, it will be an obviously stupid rule.

The point here is that in TDD, you can code as much you want if it helps you discover an appropriate design. TDD only says that any _production code_ must have tests first. Not any type of code.

So the misconception here is that you cannot touch your keyboard and type any code before writing a test. You can, as long as it is not a production code.

The key here is that the code generated in this design phase is to discover an appropriate design. It is a throwaway code.

**But at the same time, you should not expect to use code generated in this phase as a production code.**

Well, you can copy some of it into production code but you need to treat it as some kind of code in the documentation, Google or Stackoverflow. You generated a test and a blank method first, you wrote some code that satisfied the test. Some of the code might be copied from some kind of documentation with few modifications.

You can treat throwaway code this way instead of trying to use the throwaway code as much as possible.

Don't fall into the sunk-cost fallacy here. After the design, the test-code-refactor cycle still remains.

## Dogma about not writing any code

Looking back, somehow many TDD practitioners have an idea that we need to constrain ourselves to design an interface within only our mind and somehow in the end this will result in better architecture.

Duh, right?

I think sometimes we take TDD practice too literally and we lost sight of how this concept actually works. The underlying idea of TDD is not about writing a test first. The underlying idea of TDD is that if you can't think of a way to test just your new implementation, you might design it wrong.

That is why we are forcing ourselves to write a test first. We want to force ourselves to think about how to test as opposed to "it works now. the test can be an afterthought".

> Test-driven development offers more than just simple validation of correctness, but can also drive the design of a program. By focusing on the test cases first, one must imagine how the functionality is used by clients (in the first case, the test cases). So, the programmer is concerned with the interface before the implementation. This benefit is complementary to design by contract as it approaches code through test cases rather than through mathematical assertions or preconceptions. [Source](https://en.wikipedia.org/wiki/Test-driven_development#Benefits)

And that is what actually makes TDD generally lead to a better code architecture. You can argue about how TDD can lead to a bad design all you want but one thing you need to admit is that TDD generates testable code with a lot of testable units. Always.

You can write some code before tests in TDD, but only as a design tool and without any expectation that the code written in this phase should be used in production. You don't need to unnecessary constraint yourselves to put down the keyboard and forbid any code writing activity during the design phase just because someone says in TDD you need to write tests before code.

Let us try not to take software development practices too literally and dogmatic (and disguise this short-sightedness as "disciplined"). Let us try to be more understanding of the underlying concept of software development practices.
