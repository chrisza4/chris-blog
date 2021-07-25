---
title: Is this too complex?
date: "2021-07-25T12:00:00.000"
---

I made a comment in Reddit and I want to blog it here as well. Because my sentiment toward someone claim that we have unnecessary complexity usually goes like this.

Disclaimer: All I want to say here is more often than not, people deemed system to be "too complex" based on their familiarity and skillset. And I think that is very unfair.

---

Re: [Back to the '70s with Serverless](http://evrl.com/devops/cloud/2020/12/18/serverless.html)

[Original reply](https://www.reddit.com/r/programming/comments/oqxw3j/back_to_the_70s_with_serverless/h6gtw32?utm_source=share&utm_medium=web2x&context=3)

I don't really understand how managing VPS can be simpler than Serverless. What is the definition of complex?

I can deploy my apps into Serverless within few minutes. And with VPS, I need to ensure I have the right version of Linux, dependencies installed with correct versions and proper resources (CPU, Ram, Disk) + uptime monitoring.

I can manage VPS dependencies and stuff with some tools like Ansible, but how it that provide a better feedback loop? It's so slow compared to Serverless.

If you are already familiar with all Linux commands, concepts, and toolsets, everything I mentioned will be easy and "feel simple" to you. But that is [easy, not simple](https://www.infoq.com/presentations/Simple-Made-Easy/). And it applied only to you.

Even if we don't go with Rich Hickey's definition of simple, you still need to take a layman's perspective if you want to claim a system is easy. I would like to see how fast junior developers can get VPS up and running with the same quality as Serverless.

Sometimes I feel like an old programmer complaint goes like this:

- Senior: Back in the day, everything was simpler with stack X
- Junior: That is interesting. Let me learn X.
- Senior: You need to read this big book, and it takes a year of experience
- Junior: Wait, but how can X be simpler than new shiny toy A that I can learn and get it run within 10 minutes?
- Senior: You lack fundamental young Padawan. Once you dig into X long enough, you will understand how good X is.
- Junior: Wait, are we still talk about how X is simpler than A?
- Senior: Kid these days......... so entitled and soft.

Maybe this is a classic case for the (curse of knowledge)[https://en.wikipedia.org/wiki/Curse_of_knowledge].

By the way, I am also a fan of Erlang/Elixir ecosystem, but I strongly disagree with "running Erlang cluster is simpler than Kubernetes". For a start, there are very few resources online. I figured out how to do Elixir code hot-reload using [edeliver](https://github.com/edeliver/edeliver) and I cannot even find out how to do some simple stuff until I dig into some kind of hidden Webboard and mailing group.

Funny enough end, I found it easier for someone like me, without years of OTP experience, to run Elixir apps in Kubernetes cluster and achieve hot-reload from K8S stack. Of course, this is conceptually sucks since I am fully aware that OTP is much more potent and powerful than Kubernetes in many things. But in the end, I have some apps to deploy.

I want to point out that the resource I found when I googled "Hot Code Reload Deployment Elixir" ended up [recommend me to not fully rely on it](https://gvaughn.github.io/2020/05/17/why_hot_deploys_are_cool.html). So while I agree that Erlang and OTP is technically way more powerful and more amazing than new shiny toy such as Kubernetes, I strongly disagree with it being simpler.
