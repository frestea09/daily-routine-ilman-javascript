import useSwr from "swr";
import { fetcher } from "./fetcher";
export const useFetch = (url: string) => {
  const { data, isLoading, error, isValidating, mutate } = useSwr(url, fetcher);
  return { data, isLoading, error, isValidating, mutate };
};
