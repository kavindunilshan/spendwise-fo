import axios from "axios";
import getAccessToken from "./machine-to-machine.js";

const baseUrl = "http://localhost:8080/api/private";

export const fetchPublicData = async (getAccessToken) => {
    const url = "http://localhost:8080/api/public";
    try {
        const response = await axios.get(url);
        return response.data; // return the data received from the API
    } catch (error) {
        
        throw error; // rethrow the error for further handling if needed
    }
};

// fetch all categories
export const fetchAllCategories = async (getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(baseUrl + "/categories", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// fetch category by type
export const fetchCategoryByType = async (type, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(baseUrl + "/categories/type/" + type, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// create a transaction
export const createTransaction = async (transaction, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.post(baseUrl + "/transactions", transaction, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// Create Goal
export const createGoal = async (goal, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.post(baseUrl + "/goals", goal, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// edit a transaction
export const editTransaction = async (tid, transaction, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.put(baseUrl + "/transactions/" + tid, transaction, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
