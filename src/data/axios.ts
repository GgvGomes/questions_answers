import axios from "axios";

// const baseURL = window.location.host + ':3333';

// Utilizar as variaveis de ambiente do next para verificar o local
export const api = axios.create({
    // baseURL: 'http://localhost:3333',
    baseURL: process.env.BASE_URL,
})