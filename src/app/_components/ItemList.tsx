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
          <div>
            <p className="text-lg">{item.name}</p>
            <p className="text text-slate-500">{item.category.name}</p>
          </div>
        </div>
      )}
    />
  );
}
