import { useEffect, useRef } from "react";

function useHandleKeydown(key: string, callback: () => void, enabled: boolean = true): void {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled) return;

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === key) {
        callbackRef.current();
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [key, enabled]);
}

export default useHandleKeydown;
