import axios from "axios";
import getAccessToken from "./machine-to-machine.js";

const baseUrl = "http://localhost:8080/api/private";

// fetch user data
export const fetchUserData = async (userId) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// update user data
export const updateUserData = async (userId, data) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.put(`${baseUrl}/users/${userId}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// get preferences
export const getPreferences = async (userId) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/preferences/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// update preferences
export const updatePreferences = async (userId, data) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.put(`${baseUrl}/preferences/${userId}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
