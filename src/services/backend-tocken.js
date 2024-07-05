import axios from 'axios';

// Function to fetch access token from Auth0
const getAccessToken = async () => {
    const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_AUTH0_CLIENT_SECRET;

    try {
        console.log('Fetching access token...');
        const response = await axios.post(`https://${auth0Domain}/oauth/token`, {
            client_id: clientId,
            client_secret: clientSecret,
            audience: audience,
            grant_type: 'client_credentials'
        });

        const accessToken = response.data.access_token;
        return accessToken;
    } catch (error) {
        console.error('Error fetching access token:', error);
    }
};

export default getAccessToken;
