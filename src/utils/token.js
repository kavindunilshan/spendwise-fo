import jwt_decode from 'jwt-decode';
import getAccessToken from "../services/backend-tocken.js";
import {useState} from "react";

const isTokenExpired = (token) => {
    if (!token) {
        return true;
    }

    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds
    return decoded.exp < currentTime;
};

// store token in local storage
export const storeToken = (token) => {
    localStorage.setItem('token', token);
}

// get token from local storage
export const getToken = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    if (isTokenExpired(token)) {
        getAccessToken().then((token) => {
            localStorage.setItem('token', token);
            setToken(token);
        });
    }

    return token;
}
