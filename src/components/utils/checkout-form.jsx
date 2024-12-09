import React, { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import {fetchClientSecret} from "../../services/data-center.js";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetchClientSecret(setClientSecret).then(
            (data) => {
                console.log("Fetching client secret done", clientSecret);
            }
        );
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const { error, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            }
        );

        if (error) {
            console.error("Payment failed:", error);
        } else if (paymentIntent.status === "succeeded") {
            alert("Payment successful!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || !elements}>
                Pay $5
            </button>
        </form>
    );
};

export default CheckoutForm;
