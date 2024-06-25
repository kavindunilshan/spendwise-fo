import axios from "axios";

const baseUrl = "http://localhost:8080/api";

// fetch last five transactions
export const fetchLastFiveTransactions = async (userId) => {
    const response = await axios.get(`${baseUrl}/transactions/${userId}/last-five`);
    return response.data;
}

// fetch all transactions
export const fetchAllTransactions = async () => {
    const response = await axios.get(baseUrl + "/transactions");
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
