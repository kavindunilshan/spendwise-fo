import axios from "axios";

const baseUrl = "http://localhost:8080/api/private";

// fetch user data
export const fetchUserData = async (userId) => {
    const response = await axios.get(`${baseUrl}/users/${userId}`);
    return response.data;
}

// update user data
export const updateUserData = async (userId, data) => {
    const response = await axios.put(`${baseUrl}/users/${userId}`, data);
    return response.data;
}

// get preferences
export const getPreferences = async (userId) => {
    const response = await axios.get(`${baseUrl}/preferences/${userId}`);
    return response.data;
}

// update preferences
export const updatePreferences = async (userId, data) => {
    const response = await axios.put(`${baseUrl}/preferences/${userId}`, data);
    return response.data;
}