import axios from "axios";

const baseUrl = `${import.meta.env.VITE_LOCAL_API_URL}/api/private`;

// fetch user data
export const fetchUserData = async (userId, getAccessToken) => {
    const token = await getAccessToken();
    
    const response = await axios.get(`${baseUrl}/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    
    return response.data;
}

// update user data
export const updateUserData = async (userId, data, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.put(`${baseUrl}/users/${userId}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// get preferences
export const getPreferences = async (userId, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/preferences/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// update preferences
export const updatePreferences = async (userId, data, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.put(`${baseUrl}/preferences/${userId}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
