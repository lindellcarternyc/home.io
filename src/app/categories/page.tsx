"use client";

import { api } from "~/trpc/react";
import CategoryList from "../_components/CategoryList";
import RenderQuery from "../_components/RenderQuery";

export default function Categories() {
  const categoryQuery = api.category.getAll.useQuery();

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        className="place-self-end rounded-md bg-black px-4 py-2 text-white"
      >
        New Category
      </button>
      <RenderQuery
        query={categoryQuery}
        renderData={(categories) => {
          return (
            <div>
              <CategoryList categories={categories} />
            </div>
          );
        }}
      />
    </div>
  );
}
