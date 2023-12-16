import { useState } from "react";

interface Props {
  maxLength?: number;
  text: string;
}

export function ShowMoreText({ maxLength = 100, text }: Props) {
  const [showMore, setShowMore] = useState(true);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  const renderShowMore = () => (
    <div>
      {text.slice(0, maxLength)}
      {`... `}
      <button onClick={handleClick}>Show More</button>
    </div>
  );

  const renderShowLess = () => (
    <div>
      {text}
      {` `}
      <button onClick={handleClick}>Show Less</button>
    </div>
  );

  return showMore ? renderShowMore() : renderShowLess();
}
