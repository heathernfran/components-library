import { useState } from "react";
import { ItemType } from "./types";

export function AccordionItem({ item }: { item: ItemType }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggleOpen}>{item.title}</button>
      {isOpen && <div>{item.content}</div>}
    </div>
  );
}
