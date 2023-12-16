import { useEffect, useState } from "react";

interface Props {
  duration?: number;
  message: string;
}

export function Toast({ duration = 3000, message }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
