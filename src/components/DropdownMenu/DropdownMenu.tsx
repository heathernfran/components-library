import { useState } from "react";

interface Props {
  items: string[];
}

export function DropdownMenu({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick}>Menu</button>

      {isOpen && (
        <div role="menu">
          {items.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
}
