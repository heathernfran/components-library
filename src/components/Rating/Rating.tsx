import { useState } from "react";
import { Star } from "./Star";

export function Rating({ max = 5 }: { max?: number }) {
  const [rating, setRating] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <div>
      {Array.from({ length: max }).map((_value, index) => (
        <span
          key={index}
          tabIndex={0}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleStarClick(index)}
        >
          <Star
            filled={
              hoveredIndex !== null ? hoveredIndex >= index : rating > index
            }
          />
        </span>
      ))}
    </div>
  );
}
