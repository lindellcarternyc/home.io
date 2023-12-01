import { CreateCategorySchema } from "~/schema/category.schema";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const categoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.category.findMany({
      include: { items: true },
    });
  }),
  create: publicProcedure
    .input(CreateCategorySchema)
    .mutation(async ({ ctx, input: { name } }) => {
      return await ctx.db.category.create({ data: { name } });
    }),
});
