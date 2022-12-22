# Easter Egg Hook

This hook allows you to add Easter eggs to your React app or website. With just a few lines of code, you can surprise your users with hidden secrets and playful moments.

## Usage

```tsx
import { useSecretCode } from "./useSecretCode";

const MyComponent = () => {
  const secretCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ];
  const success = useSecretCode(secretCode);

  return <div>{success ? "Easter egg unlocked!" : "Keep trying..."}</div>;
};
```

In this example, the Easter egg will be unlocked if the user inputs the secret code "up, up, down, down, left, right, left, right, b, a" in the correct order. You can customize the secret code to whatever sequence you like.
