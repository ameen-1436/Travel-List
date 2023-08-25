// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];
import {useState} from 'react';
export default function PackingList({
  items,
  onRemoveItem,
  onToggleItem,
  listCountState,
  removeCount,
  onClearList
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if(sortBy === "input") sortedItems = items;

  if(sortBy === "description") sortedItems = items.slice().sort((a,b)=> a.description.localeCompare(b.description))

  if(sortBy === "packed") sortedItems = items.slice().sort((a,b)=>Number(b.packed) - Number(a.packed) )

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onRemoveItem={onRemoveItem}
            onToggleItem={onToggleItem}
            listCountState={listCountState}
            removeCount={removeCount}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={e=>setSortBy(e.target.value)} >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed Status</option>
        </select>
        <button onClick={()=>onClearList()}>Clear List</button>
      </div>
    </div>
  );
}
function Item({ item, key, onRemoveItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span
        style={item.packed ? { textDecoration: "line-through" } : {}}
        key={item.id}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
}
