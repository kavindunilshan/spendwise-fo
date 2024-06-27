import axios from "axios";

const baseUrl = "http://localhost:8080/api";

// fetch last five transactions
export const fetchLastFiveTransactions = async (userId) => {
    const response = await axios.get(`${baseUrl}/transactions/${userId}/last-five`);
    return response.data;
}

// fetch all transactions
export const fetchAllTransactions = async (userId) => {
    const response = await axios.get(`${baseUrl}/transactions/${userId}`);
    return response.data;
}

// data breakdown
export const fetchExpenseBreakdown = async (userId, type) => {
    const response = await axios.get(`${baseUrl}/transactions/${userId}/${type}/breakdown`);
    return response.data;
}

// post a user
export const createUser = async (user) => {
    const response = await axios.post(baseUrl + "/users", user);
    return response.data;
}

// fetch pocket balance
export const fetchPocketBalance = async (userId) => {
    const response = await axios.get(`${baseUrl}/transactions/pocket/${userId}`);
    return response.data;
}

// @GetMapping("/{userId}/monthly/{type}/{months}")
export const fetchOverMonthlyData = async (userId, months) => {
    const response = await axios.get(`${baseUrl}/transactions/${userId}/monthly/${months}`);
    return response.data;
}
