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
const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const stripePromise = loadStripe(stripePublicKey);

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
