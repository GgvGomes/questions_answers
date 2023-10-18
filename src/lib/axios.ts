import axios from "axios";

export const api = axios.create({
    baseURL: "https://question-aswers-api.vercel.app",
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});