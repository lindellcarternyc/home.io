import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const editItemSchema = z.object({
  id: z.string(),
  count: z.number().min(0),
});

export const itemRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.item.findMany({
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }),
  getById: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input: id }) => {
      return ctx.db.item.findFirstOrThrow({
        where: { id },
        include: { category: true },
      });
    }),
  editItem: publicProcedure
    .input(editItemSchema)
    .mutation(async ({ ctx, input: { id, count } }) => {
      return ctx.db.item.update({
        where: { id },
        data: {
          count,
        },
      });
    }),
});
