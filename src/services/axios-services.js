import axios from "axios";
import getAccessToken from "./backend-token.js";

const baseUrl = "http://localhost:8080/api/private";

// fetch all categories
export const fetchAllCategories = async () => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(baseUrl + "/categories", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// fetch category by type
export const fetchCategoryByType = async (type) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(baseUrl + "/categories/type/" + type, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// create a transaction
export const createTransaction = async (transaction) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.post(baseUrl + "/transactions", transaction, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// Create Goal
export const createGoal = async (goal) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.post(baseUrl + "/goal", goal, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// edit a transaction
export const editTransaction = async (tid, transaction) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.put(baseUrl + "/transactions/" + tid, transaction, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
