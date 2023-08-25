export default function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter((item)=> item.packed).length;
  const packedPercentage = Math.round((numPackedItems/numItems)*(100));
  return (
    <footer className="stats">
      <em>
        {numItems <= 0
          ? "Start adding items to your items list 🚀"
          : packedPercentage ===100 ? "You got everything!!! Ready to go 🛬" : packedPercentage<=0? `Hurry Up!! Get everything packed, You have ${numItems} Items on Your list` : `💼 You have ${numItems} items on your list, and you already packed ${numPackedItems} (${packedPercentage} %)`
        }
      </em>
    </footer>
  );
}
