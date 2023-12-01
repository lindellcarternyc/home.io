"use client";

import type { UseTRPCQueryResult } from "@trpc/react-query/shared";

interface RenderQueryProps<TData, TError> {
  query: UseTRPCQueryResult<TData, TError>;
  renderData: (data: TData) => JSX.Element;
}

export default function RenderQuery<TData, TError>({
  query,
  renderData,
}: RenderQueryProps<TData, TError>) {
  if (query.isLoading) return <p>Loading...</p>;
  if (query.error !== null || query.data === undefined)
    return <p>Something Went Wrong!</p>;

  return renderData(query.data);
}
