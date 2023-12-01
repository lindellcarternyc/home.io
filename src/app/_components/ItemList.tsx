import type { Category, Item } from "@prisma/client";
import GridList from "./GridList";
import Link from "next/link";

interface ItemListProps {
  items: (Item & { category: Category })[];
}

export default function ItemList({ items }: ItemListProps) {
  return (
    <GridList
      items={items.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
      )}
      renderItem={(item) => (
        <Link href={`/items/${item.id}`}>
          <div className="items-bottom flex items-end justify-between border-b pb-2">
            <p className="text-lg">{item.name}</p>
            <p className="text text-slate-500">{item.category.name}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="pt-2">Count: {`${item.count ?? 0}`}</p>
          </div>
        </Link>
      )}
    />
  );
}
