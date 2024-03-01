import { useId, useState } from "react";
import { getTabsId } from "./utilities";
import "./Tabs.css";

interface Item {
  value: string;
  label: string;
  panel: string;
}

interface Props {
  defaultItem?: Item;
  items: Item[];
}

export function Tabs({ defaultItem, items }: Props) {
  const tabsId = useId();
  const [activeItem, setActiveItem] = useState(defaultItem ?? items[0]);

  const handleActive = (nextActiveItem: Item) => {
    setActiveItem(nextActiveItem);
  };

  return (
    <div role="tablist">
      {items.map((item) => (
        <button
          key={item.value}
          id={getTabsId(tabsId, "tab", item.value)}
          role="tab"
          aria-controls={getTabsId(tabsId, "tabpanel", item.value)}
          aria-label={item.label}
          aria-selected={item.value === activeItem.value}
          onClick={() => handleActive(item)}
          className={
            item.value === activeItem.value ? "button-active" : "button"
          }
        >
          {item.label}
        </button>
      ))}
      <div
        id={getTabsId(tabsId, "tab", activeItem.value)}
        role="tabpanel"
        aria-labelledby={getTabsId(tabsId, "tabpanel", activeItem.value)}
      >
        {activeItem.panel}
      </div>
    </div>
  );
}
