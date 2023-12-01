import { z } from "zod";

export const CreateItemSchema = z.object({
  name: z.string().min(5).max(25),
  categoryId: z.string(),
});

export type CreateItemData = z.infer<typeof CreateItemSchema>;
