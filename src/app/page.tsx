import { api } from "~/trpc/server";
import ItemList from "./_components/ItemList";

export default async function Home() {
  const items = await api.item.getAll.query();

  return <ItemList items={items} />;
}
