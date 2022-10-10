import { API } from "@api/API"
import useSWR from "swr"

const fetcher = (url: string) => API.get(url).then((res) => res.data)

export const useSchedule = (group: string) => {
  const { data, error } = useSWR(`/api/classes?group=${group}`, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}
