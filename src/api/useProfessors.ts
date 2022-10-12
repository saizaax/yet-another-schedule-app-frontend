import { fetcher } from "@api/API"
import useSWR from "swr"

export const useProfessors = (search: string = "") => {
  const { data, error } = useSWR(`/api/professors?search=${search}`, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export const useProfessor = (id: string) => {
  const { data, error } = useSWR(`/api/professors/${id}`, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}
