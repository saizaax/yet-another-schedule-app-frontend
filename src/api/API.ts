import axios from "axios"

export const API = axios.create({
  baseURL: "https://schedule.saizaax.online/"
})

export const fetcher = (url: string) => API.get(url).then((res) => res.data)