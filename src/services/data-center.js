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