import axios from "axios";
import getAccessToken from "./backend-token.js";

const baseUrl = "http://localhost:8080/api/private";

// fetch all advices for userId
export const fetchAdvices = async (userId) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/advices/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// post advice
export const postAdvice = async (advice) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.post(`${baseUrl}/advices`, advice, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// update advice
export const updateAdvice = async (advice) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.put(`${baseUrl}/advices`, advice, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}