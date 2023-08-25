import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Accordian from "./Accordion";

export default function App() {
  const [items, setItems] = useState([]);
  // const [addCount, setAddCount] = useState(0);
  // const [packCount, setPackCount] = useState(0);
  const handleAddItems = (item) => {
    return setItems((items) => [...items, item]);
  };
  const handleRemoveItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearItemsList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list of items"
    );

    if (confirmed) setItems([]);
  };

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItems}
        onToggleItem={handleToggleItem}
        onClearList={handleClearItemsList}
      />
      <Stats items={items} />
      {/* <Accordian /> */}
    </div>
  );
}
