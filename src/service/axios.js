import axios from "axios";

export const api = axios.create({
    baseURL: process.env.API_URL || "http://127.0.0.1:3333",
    headers: {
        "Content-Type": "application/json",
    },
});
