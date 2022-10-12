import { fetcher } from "@api/API"
import useSWR from "swr"

export const useGroups = () => {
  const { data, error } = useSWR(`/api/groups`, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}
