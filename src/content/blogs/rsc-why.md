---
date: 20-Aug-2023
cover: /ducks.jpg
title: What is React Server Component?
description: React Server Components are a new way to build websites. They allow you to write your components in JavaScript and then render them on the server, which means that you can use all of the power of React without having to worry about browser compatibility or performance issues.
---

There has been a lot of buzz around React Server Components. In this article, we will try to understand what they are and how they work.

## What are React Server Components?

React Server Components are a new way to build websites. They allow you to write your components in JavaScript and then render them on the server, which means that you can use all of the power of React without having to worry about browser compatibility or performance issues.

## How do we normally fetch data?

In normal react component, we tend to fetch data using `useEffect` and `useState` hook. This is a very common pattern in React and it works well for most use cases.

```tsx [normal-component.tsx]
import React, { useEffect, useState } from 'react';

export function NormalComponent() {
  const [data, setData] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
    };
    fetchData();
  }, []);

  return <div>Hello {data}</div>;
}
```

However, there are some cases where this approach doesn't work as expected. Aslo `useEffect` is a pain in the ass to work with because of the side-effects.

## How do I get started?

First make sure that you are using a React version that does support server component. Below is a minimal example of data fetching with RSC.

```tsx [server-component.tsx]
import React from 'react';

export async function ServerComponent() {
  const data = await getData();
  return <div>Hello {data}</div>;
}
```

As you can see, with server component, we can directly use async await in the component. There is no `useEffect` or `useState`, we just fetch the data and use them in our component. This is so much cleaner than using the normal method.

## Limitation

Let's talk about the bad side of RSC. Although it is very nice to fetch data with the server component, there is one limitation to it. We now have no access to client side feature such as

- hooks
- window
- interactivity

## Conclusion

To sum it up, React Server Component allows us to cleanly fetch data with and render the component directly from the server. However, it is not a replacement for normal react component as it has some limitation.
We a developer should use it wisely and know when to use it and when not to use it. That's all for now, see you in the next article.

## References

- [React Server Components - React Blog's post](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components)
