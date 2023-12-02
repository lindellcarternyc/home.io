import { api } from "~/trpc/react";
import ModalFormWrapper from "./ModalFormWrapper";
import RenderQuery from "../RenderQuery";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateItemSchema, type CreateItemData } from "~/schema/item.schema";

interface CreateItemProps {
  onSubmit: (data: FormValues) => Promise<void>;
  onCancel: () => void;
}

type FormValues = CreateItemData;

export default function CreateItem({ onCancel, onSubmit }: CreateItemProps) {
  const categoryQuery = api.category.getAll.useQuery();

  const form = useForm<FormValues>({
    resolver: zodResolver(CreateItemSchema),
    mode: "onBlur",
  });

  const handleSubmit = async (data: FormValues) => {
    try {
      await onSubmit(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ModalFormWrapper title="Create Item">
      <RenderQuery
        query={categoryQuery}
        renderData={(categories) => {
          if (!categories.length) {
            throw new Error("Can't create an item without any categories");
          }

          return (
            <form
              className="flex flex-col gap-4"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  className="w-full border-b"
                  id="name"
                  {...form.register("name")}
                />
                {form.formState.errors?.name && (
                  <p className="text-red-800">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex justify-between">
                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  {...form.register("categoryId")}
                  defaultValue={categories[0]?.id}
                >
                  {categories.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex justify-end gap-4">
                <button type="button" onClick={onCancel}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded bg-black px-4 py-2 text-white"
                >
                  Add Item
                </button>
              </div>
            </form>
          );
        }}
      />
    </ModalFormWrapper>
  );
}
