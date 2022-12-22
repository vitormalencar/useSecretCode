import { useEffect, useState } from "react";
import { useInputEvent } from "./useInputEvent";

export const useLogInput = () => {
  const [userInputs, setUserInputs] = useState<string[]>([]);
  const keyPressed = useInputEvent();

  const mapKeyToCode = (key: string) => {
    switch (key) {
      case "ArrowUp":
        return "↑";
      case "ArrowDown":
        return "↓";
      case "ArrowLeft":
        return "←";
      case "ArrowRight":
        return "→";
      case "KeyB":
        return "B";
      case "KeyA":
        return "A";
      default:
        return;
    }
  };

  useEffect(() => {
    if (keyPressed) {
      mapKeyToCode(keyPressed);
      setUserInputs((prev) => [...(prev || []), mapKeyToCode(keyPressed)]);
    }

    // clear the user inputs after 5 seconds
    const timeout = setTimeout(() => {
      setUserInputs([]);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [keyPressed]);

  return userInputs;
};
