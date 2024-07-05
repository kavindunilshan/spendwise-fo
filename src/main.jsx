import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById('root'));

root.render(
        <BrowserRouter>
            <Auth0Provider
                domain="dev-c5ls7veng3ljfc5g.us.auth0.com"
                clientId="NeusqrLxWz03fI3MizB5jB0CsNHROijk"
                authorizationParams={{
                    redirect_uri: window.location.origin
                }}
            >
                <App />
            </Auth0Provider>
        </BrowserRouter>
);
