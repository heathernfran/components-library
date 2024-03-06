import { AccordionItem } from "./AccordionItem";
import { ItemType } from "./types";

export function Accordion({items}: {items: ItemType[]}) {
  return <div>{items.map((item) => (
    <AccordionItem key={item.value} item={item} />
  ))}</div>;
}
