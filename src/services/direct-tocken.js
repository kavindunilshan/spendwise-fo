import { useAuth0 } from '@auth0/auth0-react';
import { jwtDecode } from 'jwt-decode';

export const useTokenManager = () => {
    const { user, getAccessTokenSilently } = useAuth0();
    const userId = user?.sub.split("|")[1];

    const isTokenExpired = (token) => {
        if (!token) {
            return true;
        }
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decoded.exp < currentTime;
    };

    const getAccessToken = async () => {
        const token = localStorage.getItem(userId);

        if (!token || isTokenExpired(token)) {
            try {
                const accessToken = await getAccessTokenSilently();
                localStorage.setItem(userId, accessToken);
                return accessToken;
            } catch (error) {
                console.error("Error fetching token:", error);
                throw error;
            }
        } else {
            return token;
        }
    };

    return { getAccessToken };
};
