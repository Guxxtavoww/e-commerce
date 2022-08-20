import axios from "axios";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;

const BASE_URL = process.env.REACT_APP_BASE_URL;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Barreira ${TOKEN}` }
});