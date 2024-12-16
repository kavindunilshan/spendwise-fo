import axios from "axios";

const baseUrl = "https://spendwise-bo-196f496031c7.herokuapp.com/api/private";

// fetch last five transactions
export const fetchLastFiveTransactions = async (userId, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/transactions/${userId}/last-five`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// fetch all transactions
export const fetchAllTransactions = async (userId, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/transactions/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// @GetMapping("/{userId}/{type}/between/{start}/{end}")
// fetch transactions between two dates
export const fetchTransactionsBetweenDates = async (userId, type, start, end, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/transactions/${userId}/${type}/between/${start}/${end}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const fetchAllTransactionsBetweenDates = async (userId, start, end, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/transactions/${userId}/between/${start}/${end}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// data breakdown
export const fetchExpenseBreakdown = async (userId, type, month, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/transactions/${userId}/${type}/breakdown?isMonthly=true&month=${month}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// post a user
export const createUser = async (user, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.post(`${baseUrl}/users`, user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// fetch pocket balance
export const fetchPocketBalance = async (userId, period, value, getAccessToken) => {
    
    const token = await getAccessToken(); // Wait for token to be fetched
    
    const response = await axios.get(`${baseUrl}/transactions/pocket/${userId}/${period}/${value}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    
    return response.data;
}

// fetch over monthly data
export const fetchOverMonthlyData = async (userId, months, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    
    const response = await axios.get(`${baseUrl}/transactions/${userId}/monthly/${months}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
