import { api } from "~/trpc/server";
import CategoryList from "../_components/CategoryList";

export default async function Categories() {
  const categories = await api.category.getAll.query();

  return (
    <div>
      <CategoryList categories={categories} />
    </div>
  );
}
