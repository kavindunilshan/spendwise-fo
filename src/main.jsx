import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const root = createRoot(document.getElementById('root'));

const auth0Domain = "dev-c5ls7veng3ljfc5g.us.auth0.com";
const clientId = "NeusqrLxWz03fI3MizB5jB0CsNHROijk";
const audience = "https://spendwise-backend-api";
const stripePublicKey = "pk_test_51QU2KtG16wBk4x4NoGSp3xm6Oavqek7vIJccU4PYQKjbxF46AWbmVrjUzeFUhdIHXMddBlp5zX2ymfT1knfbjU1I000QensuvM";
const stripePromise = loadStripe(stripePublicKey);
const scope = 'delete:resources write:advices access:admin';

root.render(
        <BrowserRouter>
            <Auth0Provider
                domain={auth0Domain}
                clientId={clientId}
                authorizationParams={{
                    redirect_uri: window.location.origin,
                    ...(audience ? { audience: audience } : null),
                    ...(scope ? { scope: scope } : null),
                }}
            >
                <Elements stripe={stripePromise}>
                    <App />
                </Elements>
            </Auth0Provider>
        </BrowserRouter>
);
