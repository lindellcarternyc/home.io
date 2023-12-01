"use client";

import { useState } from "react";

import { api } from "~/trpc/react";
import CategoryList from "../_components/CategoryList";
import RenderQuery from "../_components/RenderQuery";
import Modal from "../_components/Modal";
import CreateCategory from "../_components/CreateCategory";

export default function Categories() {
  const categoryQuery = api.category.getAll.useQuery();

  const createCategory = api.category.create.useMutation({
    onSuccess: async () => {
      setModalIsOpen(false);
      await categoryQuery.refetch();
    },
  });

  const [modalIsOpen, setModalIsOpen] = useState(true);

  const onCreateCategory = async ({ name }: { name: string }) => {
    createCategory.mutate({ name });
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <CreateCategory
          onSubmit={onCreateCategory}
          onCancel={() => setModalIsOpen(false)}
        />
      </Modal>
      <div className="flex flex-col gap-4">
        <button
          type="button"
          className="place-self-end rounded-md bg-black px-4 py-2 text-white"
          onClick={() => setModalIsOpen(true)}
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
    </>
  );
}
