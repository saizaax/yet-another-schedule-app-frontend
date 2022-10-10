import axios from "axios"

export const API = axios.create({
  baseURL: "https://schedule.saizaax.online/"
})
