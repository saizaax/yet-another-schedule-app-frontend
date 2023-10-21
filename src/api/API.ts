import axios from "axios"

export const API = axios.create({
  baseURL: "https://schedule.saizaax.dev/"
})

export const fetcher = (url: string) => API.get(url).then((res) => res.data)
