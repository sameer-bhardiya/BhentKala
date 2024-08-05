import axios from "axios";

const BASE_URL = "http://localhost:5000/api/" 
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjQ4Y2E0ZmUxZTBjNzI4OTc5OTNiZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTc3NjIwMywiZXhwIjoxNjkyMDM1NDAzfQ.iO0YYe7FN_JczoygMPrOQrtq8xJWmivJLt25Ze53dQY";

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseUrl : BASE_URL,
    headers:{token :`Bearer ${TOKEN}` },
});