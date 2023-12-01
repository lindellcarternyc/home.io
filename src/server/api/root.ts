import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { itemRouter } from "./routers/item";
import { categoryRouter } from "./routers/category";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  item: itemRouter,
  category: categoryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
