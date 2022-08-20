import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWQ3ZTAzM2FiMzllMDNjNTllZjM1OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjEwMDEyNSwiZXhwIjoxNjQ2MzU5MzI1fQ.TQ4w0VRgEAUfUFosc-7rw0LabONFWaZ46qIS8ZxcMmE"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});