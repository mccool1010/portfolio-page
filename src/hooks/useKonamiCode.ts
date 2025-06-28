import { useEffect } from "react";

export function useKonamiCode(callback: () => void) {
  useEffect(() => {
    const sequence = [
      "ArrowUp", "ArrowUp",
      "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight",
      "ArrowLeft", "ArrowRight",
      "b", "a"
    ];
    let position = 0;

    const handler = (e: KeyboardEvent) => {
      if (e.key === sequence[position]) {
        position++;
        if (position === sequence.length) {
          callback();
          position = 0;
        }
      } else {
        position = 0;
      }

      // Prevent scrolling when using arrow keys for the code
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key) &&
        position > 0
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handler, { passive: false });
    return () => window.removeEventListener("keydown", handler);
  }, [callback]);
}