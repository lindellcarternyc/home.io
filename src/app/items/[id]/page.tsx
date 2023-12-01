"use client";

import { useParams } from "next/navigation";
import { GrAdd, GrSubtract } from "react-icons/gr";

import { api } from "~/trpc/react";

const ItemError = () => (
  <p className="mt-8 text-center text-3xl">Something went wrong!</p>
);

const Loading = () => <p className="mt-8 text-center text-3xl">Loading...</p>;

export default function ItemPage() {
  const { id } = useParams();

  if (!id || typeof id !== "string") {
    return <ItemError />;
  }

  const itemQuery = api.item.getById.useQuery(id);
  const editItem = api.item.editItem.useMutation({
    onSuccess: async () => {
      await itemQuery.refetch();
    },
  });

  if (itemQuery.isError || editItem.isError) return <ItemError />;
  if (itemQuery.isLoading) return <Loading />;

  const item = itemQuery.data;

  return (
    <div className="pt-4">
      <div className="flex flex-col gap-2 border-b pb-4">
        <h2 className="text-2xl">{itemQuery.data.name}</h2>
        <h3 className="text-xl text-slate-500">
          {itemQuery.data.category.name}
        </h3>
      </div>
      <div className="flex justify-between pt-4">
        <p className="text-lg">Count: {item.count}</p>
        <div className="flex gap-2">
          <button
            type="button"
            title="Decrement"
            disabled={item.count == 0}
            onClick={() => {
              if (item.count >= 0) {
                editItem.mutate({ id: item.id, count: item.count - 1 });
              }
            }}
          >
            <GrSubtract />
          </button>
          <button
            type="button"
            title="Increment"
            onClick={() => {
              editItem.mutate({ id: item.id, count: item.count + 1 });
            }}
          >
            <GrAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
