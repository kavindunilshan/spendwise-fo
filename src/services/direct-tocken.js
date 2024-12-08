import { useAuth0 } from '@auth0/auth0-react';
import {jwtDecode} from 'jwt-decode';

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

    const getPermissions = (token) => {
        if (!token) {
            return [];
        }
        try {
            const decoded = jwtDecode(token);
            return decoded.permissions || [];
        } catch (error) {
            console.error("Error decoding token:", error);
            return [];
        }
    };

    const isAdminUser = async () => {
        const token = await getAccessToken()
        if (!token) {
            return false;
        }
        try {
            const decoded = jwtDecode(token);
            return decoded.permissions.includes('access:admin');
        } catch (error) {
            console.error("Error decoding token:", error);
            return false;
        }
    };

    return { getAccessToken, getPermissions, isAdminUser };
};
