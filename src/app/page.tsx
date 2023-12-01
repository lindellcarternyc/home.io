"use client";

import { useState } from "react";

import { api } from "~/trpc/react";
import ItemList from "./_components/ItemList";
import RenderQuery from "./_components/RenderQuery";
import Modal from "./_components/Modal";
import CreateItem from "./_components/form/CreateItem";
import type { CreateItemData } from "~/schema/item.schema";

export default function Home() {
  const itemsQuery = api.item.getAll.useQuery();
  const createItem = api.item.create.useMutation({
    onSuccess: async () => {
      setModalIsOpen(false);
      await itemsQuery.refetch();
    },
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onCreateItem = async (data: CreateItemData) => {
    createItem.mutate(data);
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <CreateItem
          onCancel={() => setModalIsOpen(false)}
          onSubmit={onCreateItem}
        />
      </Modal>
      <div className="flex flex-col gap-4">
        <button
          type="button"
          className="place-self-end rounded-md bg-black px-4 py-2 text-white"
          onClick={() => setModalIsOpen(true)}
        >
          New Item
        </button>
        <RenderQuery
          query={itemsQuery}
          renderData={(items) => {
            if (!items.length) return <p>Add an item!</p>;

            return <ItemList items={items} />;
          }}
        />
      </div>
    </>
  );
}
