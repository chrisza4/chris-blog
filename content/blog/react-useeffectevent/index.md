---
title: I don't like React's useEffectEvent Api
date: "2025-10-10T00:00:00.000"
---

React 19.2 came with latest hook named `useEffectEvent`

[Documentation](https://react.dev/reference/react/useEffectEvent)

While I understand the need, I don't like their API surface.

Just like useEffect , useEffectEvent comes with a lot of caveat, documented in React documentation itself in [this link](https://react.dev/learn/separating-events-from-effects#limitations-of-effect-events). In short, you must manually check that you
Only call them from inside Effects.
Never pass them to other components or Hooks.

I don't like that useEffectEvent has this secret that one need to know really deep to wield it properly.
For simpler API, I think we can just design it like this

```Javascript
useEffect(({ event1, event2 }) => {
  // Normal useEffect code
}, [deps], {
  // Event functions that need to be fired in useEffect
  event1: () => {},
  event2: () => {}
})
```

To adopt from React document example, it would look like this

```Javascript
import { useEffect } from 'react';

function ChatRoom({ roomId, theme }) {
  useEffect(({ onConnected }) => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      onConnected();
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId], {
    onConnected: () => {
      showNotification('Connected!', theme);
    }
  });
}
```

With this API design, you can force developers to:
Call them only inside useEffect. There is no way to call these functions outside of the useEffect scope.
Disable passing any of these event functions to other components. There is no way to pass these functions to other components.

Sure, the downside is that you can now only have one event per one useEffect, but in my opinion, it is extremely rare to have a shared useEffectEvent.
In those rare cases, we can use memoized functions passing through this event, and I guess the React Compiler can take care of memoizing functions that are only used in shared useEffects, in case performance drops during rendering.

```Javascript
const sharedFunction = () => { /* code */ }

useEffect(({ event1 }) => {
  // Normal useEffect code
}, [deps], {
event1: sharedFunction
})

useEffect(({ event2 }) => {
  // Another useEffect code
}, [deps], {
event2: sharedFunction
})
```

I may be missing some limitation, as I am not one of the people who built React. If this is not technically possible because of some (presumably) legacy React limitation, then fine.

But if there is no legacy limitation, I think the React team is now too attached to the semantics of hook and use.

In general, it is better to design an API that prevents the developer from making mistakes altogether rather than allow them and then write another section in the documentation saying, "don't do this because…".

Or, as many folks in functional programming would say.

> Make illegal states unrepresentable

I would say

> Make illegal code unwritable

And in my opinion, it is much better to bend away from semantic of hook but have an API that make illegal code unwritable, rather than stay with consistent semantic and now we need to have document say "don't do that".

There is a value in having consistent semantic, but again in my opinion, not at the cost of making illegal code easy to write.

This is just a rant.

By the way, I am always a fan of React and use it since React 0.x. So I don't intend to bash React as a whole.

But I would say there are certain API design in React that is quite unwieldy lately.
