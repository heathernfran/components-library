import { useEffect, useState } from "react";
import type { RefObject } from "react";

/**
 * Expose the Mutation Observer API for React components.
 *
 * This hook tracks the number of DOM updates that occur with React state
 * changes. The total mutationsCount increases only when there are DOM updates.
 * 
 * Docs:
 * - https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 *
 * @param target The target element to watch for DOM updates
 * @returns The count for total number of mutations
 */
export function useMutationObserver(target: RefObject<HTMLElement>) {
  const [mutationsCount, setMutationsCount] = useState(0);

  const callback: MutationCallback = () => {
    setMutationsCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    const observer = new MutationObserver(callback);
    const targetNode = target.current;
    const config: MutationObserverInit = {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    };

    if (targetNode) {
      observer.observe(targetNode, config);
    }

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return { mutationsCount };
}
