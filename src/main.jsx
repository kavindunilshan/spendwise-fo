import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById('root'));

const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_FO_CLIENT_ID;

root.render(
        <BrowserRouter>
            <Auth0Provider
                domain={auth0Domain}
                clientId={clientId}
                authorizationParams={{
                    redirect_uri: window.location.origin
                }}
            >
                <App />
            </Auth0Provider>
        </BrowserRouter>
);
