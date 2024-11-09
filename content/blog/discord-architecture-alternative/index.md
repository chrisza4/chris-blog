---
title: "Alternative to Discord architecture"
date: "2024-10-09T12:00:00.000"
---

I've been stumble upon [an interesting question](https://www.reddit.com/r/ExperiencedDevs/comments/1gmf7yg/looking_for_alternative_designs_to_discords/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button) in r/ExperieceDevs. And here is that question.

---

## Question

I've been fascinated by the scaling challenges involved in building large-scale chat applications like Discord, and I'm curious to hear experienced developers' perspectives on potential alternative approaches.

From my research, it seems Discord has built their infrastructure primarily on the Elixir/BEAM ecosystem, utilizing techniques like:

Using a hash ring to distribute "Guild" processes (stateful containers for server data) across a cluster of nodes

Relying on Erlang's built-in fault tolerance and supervision to handle process crashes and node failures

Avoiding the need for complex orchestration by letting the hash ring determine where Guild processes run

While this actor-model based architecture seems to work well for them, I'm wondering if there are other viable design patterns that could be explored for a similar chat application.

Some potential limitations I've identified with the Discord approach:

Lack of Resource-Aware Scheduling: The hash ring-based placement of Guilds doesn't seem to take into account things like CPU/memory usage of individual nodes. This could lead to "noisy neighbor" issues where heavily loaded Guilds get collocated on the same node.

Potential Message Backlogs: During high traffic spikes (e.g. everyone posting "GOAL!" during a soccer match), a single Guild process may get overwhelmed, resulting in message queuing and latency issues.

Inflexible Partitioning: Discord appears to treat Guilds as the atomic unit, without the ability to further partition or scale individual Guilds horizontally. This could become a bottleneck for the largest servers.

So I'm wondering - for experienced distributed systems engineers, what alternative architectural patterns or technologies would you consider for building a Discord-like real-time chat application that could address some of these potential shortcomings?

I'm particularly interested in perspectives on whether a more stateless, event-driven, or microservices-based approach could be viable, and how you might handle things like resource-aware scheduling, dynamic load balancing, and flexible partitioning.

Any insights or suggestions would be greatly appreciated! I'm hoping to learn from the collective wisdom of this community.

---

## Answer

As someone who used to build a chat app at scale, I think I can answer a few questions.

First of all, the challenge of a large-scale chat app is keeping track of who is online and offline. Basically, you need to know whenever Ben types "hello" in a chat room, which users should receive the message, and through which channels.

That is the hardest thing.

I often make a half-joke that the hardest part of a chat app is not the messaging itself, but rather that little green dot near your avatar, indicating who is online and offline in real-time. Technically speaking, tracking that efficiently is the hardest part of a chat app at scale. And it is the core to chat app itself. Every feature (message, emoji, reaction, plugins, etc.) will be built on top of that.

Assuming we are using WebSockets (though this applies to any mechanism), there must be processes that keep socket sessions alive and track which users belong to which sessions, so we can send real-time messages to the right person.

Since a socket is a long-lived session, some processes must hold the socket connection between the user and the server.

So, there are at least two minimal states required for a real-time chat app, and I believe that’s what Guild is basically responsible for in Discord.

There must be stateful processes keep track of which user hold which sockets session, and another stateful processes that actually holding the socket session.

That said, in a traditional stateless architecture, there’s still a state; it’s just typically stored in an external datastore, outside of the running process, like PostgreSQL, Cassandra, CockroachDB, etc. Is it possible to jus

So I’ll address your question about stateless first.

Technically speaking, we could build a chat app using this traditional stateless architecture. We can cut the crap about holding socket connection out and remembering which socket belongs to whom out.

In this architecture, the client would keep calling a web API, such as `/api/room/xxx/messages?since=xxxx` and `/api/room/xxx/users/online` every few seconds. In this way, there’s no need for a stateful process to maintain a socket or remember which socket belongs to whom.

Honestly, this approach has the benefit of allowing traditional stateless app horizontal scaling. You just scale the state DB and API processes. You can use a traditional load balancer with a round-robin strategy to avoid noisy neighbor issues on the computation side.

But... it’s terrible in terms of resource utilization and user experience.

Imagine over a million users calling an API for new messages and online statuses every 0.5 seconds. You would need an enormous cluster to handle that, and the user experience would feel laggy.

(It’s doable, though; in fact, most chat apps bootstrap the initial rendering of a chat room via API calls like this. Better implementations might add some client-side caching.)

As with any architecture question: everything is a trade-off. You get a model that’s easy to scale horizontally, but with horrendous resource utilization.

That’s why no chat app uses a fully stateless architecture. Instead, they maintain a process holding socket connections and remembering which socket belongs to which user. They prefer a push model where the server pushes data to users as it arrives, rather than a pull model like CRUD or standard enterprise apps where the client requests data. Implementing a chat app with a traditional stateless approach simply consumes too many resources.

And I think that’s what Guild does.

If you look into Slack’s engineering blog, it’s the same challenge: How can we track user sessions and send the right data to the correct users? That is the hardest part of a chat app at scale.

Now about flexible partitioning and resource-aware scheduling:

Since this component holds socket connections, flexible partitioning is nearly impossible. Moving processes around means disconnecting user sockets, which disrupts the user experience.

The best approach is to create a minimal process that only holds the socket connection and runs almost indefinitely with very few updates. I believe that’s the approach most large-scale chat apps take, or eventually move toward.

In my case, when I built a chat app, the socket-holding processes had fewer than 100 lines of code and were redeployed maybe once a year at most. It simply received messages from an internal routing engine, which knew which users belonged to which sockets and which sockets belonged to each socket-holding process.

I used RabbitMQ and Redis PubSub for routing, but there are many options—NATS.io, Kafka, AWS MQ, to name a few.

Now, about resource-aware scheduling: Since redeployment and frequent switching aren’t feasible, and the workload spikes during certain times (like elections), you can’t reschedule everything dynamically.

The approach many take (and likely Discord as well) is the opposite.

Instead of deploying based on estimated resource consumption (resource-aware scheduling), we try to ensure each process consumes roughly the same amount of resources.

This way, we can deploy to any node since each node will consume a similar amount of resources.

This is where statistics and probability theory come in. For example, we might know that users in the U.S. send 1-2 messages per minute, while those in the EU average 0.5 messages per minute. So, the Guild workload in the EU would be roughly half of that in the U.S.

The more data you gather, the better you can predict and balance the resource consumption of this Guild process.

In large-scale computation, statistics and probability are very important tools.

We try to ensure that socket-connection holders handle similar amounts of messages and connections, based on statistics. You can develop a formula to feed into the auto-scaler.

During spikes, you can still use resource-aware scheduling to avoid heavily loaded nodes, but this is typically a last resort.

Our approach is to balance resource consumption in stateful processes, using resource-aware scheduling only as “the last resort during desperate times” when user spikes overwhelm our cluster. We don't make resource-aware scheduling the primary strategy for scaling.

That's all I can share.
