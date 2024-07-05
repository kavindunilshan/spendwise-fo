import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export const fetchAllCategories = async () => {
    const response = await axios.get(baseUrl + "/categories");
    return response.data;
}

export const fetchCategoryByType = async (type) => {
    const response = await axios.get(baseUrl + "/categories/type/" + type);
    return response.data;
}

export const createTransaction = async (transaction) => {
    const response = await axios.post(baseUrl + "/transactions", transaction);
}

// edit
export const editTransaction = async (tid, transaction) => {
    const response = await axios.put(baseUrl + "/transactions/" + tid, transaction);
    return response.data;
}