interface GridListProps<Item extends { id: string }> {
  items: Item[];
  renderItem: (item: Item) => JSX.Element;
}

export default function GridList<Item extends { id: string }>({
  items,
  renderItem,
}: GridListProps<Item>) {
  return (
    <ul className="grid gap-4 p-4 md:grid-cols-2 md:p-0 md:pt-4">
      {items.map((item) => (
        <li key={item.id} className="rounded border p-2 shadow-md">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
