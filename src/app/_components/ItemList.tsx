import type { Category, Item } from "@prisma/client";
import GridList from "./GridList";

interface ItemListProps {
  items: (Item & { category: Category })[];
}

export default function ItemList({ items }: ItemListProps) {
  if (items.length === 0) return <p>Add an item!</p>;

  return (
    <GridList
      items={items}
      renderItem={(item) => (
        <div>
          <div className="items-bottom flex items-end justify-between border-b pb-2">
            <p className="text-lg">{item.name}</p>
            <p className="text text-slate-500">{item.category.name}</p>
          </div>
          <p className="pt-2">Count: {`${item.count ?? 0}`}</p>
        </div>
      )}
    />
  );
}
