import { z } from "zod";

export const CreateCategorySchema = z.object({
  name: z.string().min(5).max(25),
});
