import { UseFormReturn } from "react-hook-form";
import { useGetAllRequestsQuery } from "../../api/support.api";
import { useEffect, useState } from "react";

export const useListingSupportRequest = (formMethods: UseFormReturn) => {
  const searchKeyword = formMethods.watch("search");
  const [debouncedSearch, setDebouncedSearch] = useState(searchKeyword ?? "");

  useEffect(() => {
    // debounce delay in ms
    const handler = setTimeout(() => {
      setDebouncedSearch(searchKeyword ?? "");
    }, 500);
    // Clear timeout on unmount or value change
    return () => {
      clearTimeout(handler);
    };
  }, [searchKeyword]);
  const { data: requests, isLoading } = useGetAllRequestsQuery({
    search: debouncedSearch ?? "",
  });

  return { requests, isLoading };
};
