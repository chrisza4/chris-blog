---
title: My favorite blogs
date: "2021-01-24T00:00:00.000"
---

These are some of the blogs I enjoy. I will share it here.

## [Api Design](https://fasterthanli.me/articles/abstracting-away-correctness)

This is a great article which criticized API design of Go language in the way that IMHO, very constructive and educational. I am pretty much align with the philosophy.

[Link](https://fasterthanli.me/articles/abstracting-away-correctness)

## [Tradable Quality Hypothesis](https://martinfowler.com/bliki/TradableQualityHypothesis.html)

Martin Fowler put good content on why we might wrongly perceive internal quality and design as trade-offs for cheaper development. I agree that just like how we can buy a lower quality phone for lower prices, we can make a lower external quality software (eg. Non-performance critical. Non-optimal user interface) for the sake of lowering budget. However, it will be different story when it comes to internal quality.

I am not saying that we must over-engineer everything we build. I think we need to be aware that buying cheaper mobile with fewer features and buying ill design software for a cheaper budget, let it be time or money, is not comparable in many ways.

[Link](https://martinfowler.com/bliki/TradableQualityHypothesis.html)

## [The Forgotten History of OOP](https://medium.com/javascript-scene/the-forgotten-history-of-oop-88d71b9b2d9f)

Eric Elliot is one of the functional programming advocates. He wrote a great article about what OOP was initially supposed to be. This article is great content that captures the original idea of OOP.

I am not a person who always advocates for any "Original stuff". I firmly believe that, in general, the extended version of anything will be better than the original version. But in the OOP case, I agree with Alan Kay that the real value of the Object-oriented paradigm comes from multiple subsystems communicate via message instead of shared memory. Our industry emphasizes design pattern, base classes, and inheritance tree shy us away from the deep and real merit of OOP design.

It does provide value to a certain degree. But if we apply Pareto's 80/20 rules here, I would say inheritance and base class design provides the 20% side.

I should write on this more sometimes. I touch the surface of this topic in the article [Composition over Inheritance](https://dev.to/chrisza4/composition-over-inheritance-1ojg)

# CALM Theorem

Design a program on a distributed system is hard. As an industry, we are not 100% aware of limitations when you take a single node application and make it distributed.

I love theorem. CAP Theorem talks about the trade-offs when you go distributed. That makes me feel at ease because I never again had to judge myself for not thinking hard enough to design a consistent and available program.

CALM Theorem talk is another fantastic theorem.

CALM talks about how to know if you need massive coordination. For example: If you design a highly-available stream-based average calculator. You have a program in multiple nodes calculate the average for redundancy. It is possible that each node might not yield the same result at a given time. Do you need a consensus resolver? Or you can just wait for it to be eventually consistent? The answer is: If you design a program in a specific way, then you can wait for it to be eventually consistent.

I wish for this theorem to gain more traction.

[Paper](https://arxiv.org/abs/1901.01930)
