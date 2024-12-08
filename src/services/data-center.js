import axios from "axios";
import getAccessToken from "./machine-to-machine.js";

const baseUrl = "http://localhost:8080/api/private";

// fetch all advices for userId
export const fetchAdvices = async (userId, getAccessToken) => {
    const token = await getAccessToken();
    const response = await axios.get(`${baseUrl}/advices/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const fetchAllAdvices = async (userId, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/advices/unAnswered`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// post advice
export const postAdvice = async (advice, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.post(`${baseUrl}/advices`, advice, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// update advice
export const updateAdvice = async (id, advice, getAccessToken) => {
    const token = await getAccessToken();

    console.log("Advice", advice);
    const response = await axios.put(`${baseUrl}/advices/${id}`, advice, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const fetchGoals = async (userId, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/goals/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// update a goal
export const updateGoal = async (id, goal, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.put(`${baseUrl}/goals/${id}`, goal, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}


export const checkPrivateScope = async () => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}-scope`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    

    return response.data;
}
