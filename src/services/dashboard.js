import axios from "axios";
import getAccessToken from "./backend-token.js";

const baseUrl = "http://localhost:8080/api/private";

// fetch last five transactions
export const fetchLastFiveTransactions = async (userId) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/transactions/${userId}/last-five`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// fetch all transactions
export const fetchAllTransactions = async (userId) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/transactions/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// data breakdown
export const fetchExpenseBreakdown = async (userId, type) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/transactions/${userId}/${type}/breakdown`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// post a user
export const createUser = async (user) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.post(`${baseUrl}/users`, user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// fetch pocket balance
export const fetchPocketBalance = async (userId) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/transactions/pocket/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// fetch over monthly data
export const fetchOverMonthlyData = async (userId, months) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/transactions/${userId}/monthly/${months}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
