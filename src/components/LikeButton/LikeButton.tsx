import { useState } from "react";

export function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    const nextIsLiked = !isLiked;
    // Optimistic UI update
    setIsLiked(nextIsLiked);

    // Prevent race conditions
    timeoutId && clearTimeout(timeoutId);
    // Simulate API request
    const nextTimeoutId: NodeJS.Timeout = setTimeout(() => {
      // Simulate error
      const fakeError = Math.random() > 0.5;
      if (fakeError) {
        setIsLiked(!nextIsLiked);
      }
    }, 1000);
    setTimeoutId(nextTimeoutId);
  };

  return <button onClick={handleClick}>{isLiked ? `Unlike` : `Like`}</button>;
}
