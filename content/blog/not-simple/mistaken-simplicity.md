---
title: Simplicity fallacy of "Just use X (for everything)"
date: "2022-12-14T00:00:00.000"
---

For the past few years I found one commmon fallacy trope.

"Stop introduce more technology. Just use X for everything. It will be much simpler."

This trope can range from [Postgres](https://www.amazingcto.com/postgres-for-everything/), Make, HTML-CSS-JS and so-on.

While I think there is a lot of merit in limiting amount of technology stacks in organization and I've seen many unjustifiably complicated systems consist of 10 frameworks and 20+ tech stack behind the scene just because devs want to play with new shiny toy. I also think the position of just use "X" is pretty bad in its own way.

Because, simply put, why "X" when we can also use "Y" for everything as well.

Take Postgres for example: technically speaking we can use Postgres to build queue, to do a full-text search and possibly Redis replacement according to [this article](https://www.amazingcto.com/postgres-for-everything/). But one thing that I might argue: Why Postgres over, let say, SQL Server or MySQL or just plain old boring file?

There might be some technical answer to this question. But I guarantee most of the times it's because the speaker is proficient in Postgres.

Implementing queue in Postgres [is not that easy and require a lot of experience to nail it right](https://www.reddit.com/r/programming/comments/zk3hbg/comment/j0031fy/?utm_source=share&utm_medium=web2x&context=3). I would bet using Postgres as Redis replacement would have even more edge cases and concern.

In the eye of Postgres expert, it is simple. In the eye of everyone else, it's super complicated.

And this is where the fallacy lie in. Someone who familiar with X will say that using X for everything is simple because you just need to learn X. And they might forget how it took them years of experience until one start to find X simple.

C++ can also be very simple for someone btw.

I know someone who advocate for using Makefile for everything infra relate because he is so proficient at it. He can't see why we need to embed our script into `package.json` or using few lines of Python/Go for cli task. Then I know someone who advocate for using Python for every cli task because "It's simpler. Everyone know about Python right?".

And I can imagine how they will fight and pointing finger to each other for "introducing needless complexity". Why don't you embrace simplicity and just use X for everything?

I agree with general concept of limiting technology stack. Sadly most of the times it isn't really about general concept of simplicity, it's about using technology that the advocater familiar with.

Here is a litmus test. If you advocate for using X for everything because simplicity then consider this. When your team said that Y can achieve the same and everyone else except you is more productive with Y, will you change your mind and advocate for using Y for everything instead? Will you drop your expertise on X and advocate for Y for sake of simplicity? (Assuming Y can achieve this technically speaking)

In general, is it really about priniple of simplicity by using one technology or is it about using what you already familiar with?

I usually agree with principle of simplicity but I find it is very rare to see true believer. It's usually more about just get back and use what I learned for the past 10 years rather than simplifying technology stacks.

Also, we can technically use C or Assembly for everything. Radical simplicity has its own limit. What grind my gear is how people usually draw the line. It's almost always like what I am currently good at is inherently simple and what I don't know is needless complexity since I can use what I am good at to achieve the same.

General simplicity shouldn't care much about your personal expertise, don't you think?

Modified from Douglas Adam quotes, it's almost like this:

1. Anything that is in the world when you’re start your tech career is normal and ordinary and is just simple technologies we all should rely on.

2. Anything that’s invented between when you’re first to ten years of tech career is new and exciting and revolutionary and have so much potential.

3. Anything invented after that is a blatantly complex technology created by clueless kids who just reinvent the wheel.

Moral of story: If you believe in simplicity of using fewer framework and tech, don't stick with just technologies that you know. Otherwise, you aren't into principle that much to begin with.
