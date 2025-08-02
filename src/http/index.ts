import axios, { AxiosInstance } from "axios";

const httpClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/" //Local host do json-server
})

export default httpClient