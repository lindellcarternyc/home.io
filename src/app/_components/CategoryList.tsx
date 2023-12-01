import type { Category, Item } from "@prisma/client";
import GridList from "./GridList";

interface CategoryListProps {
  categories: (Category & { items: Item[] })[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  if (categories.length === 0) return <p>No Categories</p>;

  return (
    <GridList
      items={categories}
      renderItem={(category) => (
        <div>
          <div>
            <p>{category.name}</p>
            <p>{category.items.length} item(s)</p>
          </div>
        </div>
      )}
    />
  );
}
