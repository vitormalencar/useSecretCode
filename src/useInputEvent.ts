import { useEffect, useState } from "react";

export const useInputEvent = () => {
  const [key, setKey] = useState(null);

  useEffect(() => {
    const keyDownHandler = ({ code }: { code: string }) => setKey(code);
    const keyUpHandler = () => setKey(null);

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

  return key;
};
