import axios from "axios";

const baseUrl = "http://localhost:8080/api";

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