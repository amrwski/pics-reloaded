import axios from "axios"

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: { Authorization: "Client-ID dr2C-_nsG83MOOxC6GtLQHu5zMyRps-vffraypyl0SU" },
})
