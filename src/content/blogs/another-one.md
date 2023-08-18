---
title: Just another one
---

# Hey there im another one

```sh
pnpm add swr
```

---

```ts
const onTimeout = (handler: () => void, ms: number) => {
  const timeoutId = setTimeout(handler, ms);
  return () => clearTimeout(timeoutId);
};
```
