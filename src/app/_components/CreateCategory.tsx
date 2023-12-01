"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateCategorySchema } from "~/schema/category.schema";

interface CreateCategoryProps {
  onSubmit: (data: { name: string }) => Promise<void>;
  onCancel: () => void;
}

export default function CreateCategory({
  onSubmit,
  onCancel,
}: CreateCategoryProps) {
  const form = useForm({
    defaultValues: { name: "" },
    mode: "onBlur",
    resolver: zodResolver(CreateCategorySchema),
  });

  const handleSubmit = async (data: { name: string }) => {
    try {
      await onSubmit(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-4 rounded bg-white p-4">
      <h3 className="text-xl">Create Category</h3>
      <hr />
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            className="w-full border-b"
            {...form.register("name")}
          />
          {form.formState.errors?.name && (
            <p className="text-red-800">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div className="flex justify-end gap-4">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button
            type="submit"
            className="rounded bg-black px-4 py-2 text-white"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
}
