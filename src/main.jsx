import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const root = createRoot(document.getElementById('root'));

const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_FO_CLIENT_ID;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
const stripePromise = loadStripe("pk_test_51QU2KtG16wBk4x4NoGSp3xm6Oavqek7vIJccU4PYQKjbxF46AWbmVrjUzeFUhdIHXMddBlp5zX2ymfT1knfbjU1I000QensuvM");

root.render(
        <BrowserRouter>
            <Auth0Provider
                domain={auth0Domain}
                clientId={clientId}
                authorizationParams={{
                    redirect_uri: window.location.origin,
                    ...(audience ? { audience: audience } : null),
                }}
            >
                <Elements stripe={stripePromise}>
                    <App />
                </Elements>
            </Auth0Provider>
        </BrowserRouter>
);
