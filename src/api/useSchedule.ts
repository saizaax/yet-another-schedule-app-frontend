import { fetcher } from "@api/API"
import useSWR from "swr"

export const useSchedule = (group: string) => {
  const { data, error } = useSWR(`/api/classes?group=${group}`, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}
