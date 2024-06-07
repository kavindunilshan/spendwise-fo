import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export const getAllCategories = async () => {
    const response = await axios.get(baseUrl + "/categories");
    return response.data;
}

export const createTransaction = async (transaction) => {
    const response = await axios.post(baseUrl + "/transaction", transaction);
}