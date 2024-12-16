import axios from 'axios';
import {jwtDecode} from 'jwt-decode'

const isTokenExpired = (token) => {
    if (!token) {
        return true;
    }
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    return decoded.exp < currentTime;
};


const getAccessToken = async () => {
    const auth0Domain = "dev-c5ls7veng3ljfc5g.us.auth0.com";
    const audience = "https://spendwise-backend-api";
    const clientId = "";
    const clientSecret = "";

    const token = localStorage.getItem('token');

    if (!token || isTokenExpired(token)) {
        try {
            
            const response = await axios.post(`https://${auth0Domain}/oauth/token`, {
                client_id: clientId,
                client_secret: clientSecret,
                audience: audience,
                grant_type: 'client_credentials'
            });

            const accessToken = response.data.access_token;
            localStorage.setItem('token', accessToken);

            return accessToken;
        } catch (error) {
            
        }
    } else {
        return token;
    }

};

export default getAccessToken;
