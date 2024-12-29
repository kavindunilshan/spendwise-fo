import axios from "axios";

const baseUrl = `${import.meta.env.VITE_LOCAL_API_URL}/api/private`;

// fetch all advices for userId
export const fetchAdvices = async (userId, getAccessToken) => {
    const token = await getAccessToken();
    const response = await axios.get(`${baseUrl}/advices/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const fetchAllAdvices = async (userId, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/advices/admin/unAnswered`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// post advice
export const postAdvice = async (advice, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.post(`${baseUrl}/advices`, advice, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// update advice
export const updateAdvice = async (id, advice, getAccessToken) => {
    const token = await getAccessToken();

    console.log("Advice", advice);
    const response = await axios.put(`${baseUrl}/advices/admin/${id}`, advice, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const fetchGoals = async (userId, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/goals/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const fetchMilestones = async (userId, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.get(`${baseUrl}/milestones/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

// update a goal
export const updateGoal = async (id, goal, getAccessToken) => {
    const token = await getAccessToken(); // Wait for token to be fetched
    const response = await axios.put(`${baseUrl}/goals/${id}`, goal, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const fetchClientSecret = async (setClientSecret, getAccessToken) => {
    const token = await getAccessToken();
    try {
        const response = await axios.post(`${baseUrl}/payment/create-payment-intent`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        setClientSecret(response.data.clientSecret);
    } catch (error) {
        console.error("Error fetching client secret:", error);
    }
};
