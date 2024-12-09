import React, { useState, useEffect } from "react";
import {
    useStripe,
    useElements,
    CardElement,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement
} from "@stripe/react-stripe-js";
import {fetchClientSecret} from "../../services/data-center.js";
import Dialog from "@mui/material/Dialog";
import {Box, CircularProgress, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";

const CheckoutForm = ({ open, handleClose, onSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
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

        setLoading(true);

        const { error, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            }
        );

        setLoading(false);

        if (error) {
            console.error("Payment failed:", error);
        } else if (paymentIntent.status === "succeeded") {
            onSuccess();
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogTitle
                style={{
                    backgroundColor: "#320440",
                    color: "white",
                    textAlign: "center",
                }}
            >
                Pay for WiseAdvice
            </DialogTitle>
            <Box p={4}>
                <form onSubmit={handleSubmit}>
                    {/* Card Number */}
                    <Box mb={4}>
                        <Typography variant="subtitle1">Card Number</Typography>
                        <CardNumberElement options={{ style: { base: { fontSize: '16px' } } }} />
                    </Box>

                    {/* Expiry Date and CVV */}
                    <Box mb={4} display="flex" justifyContent="space-between">
                        <Box width="48%">
                            <Typography variant="subtitle1">Expiry Date</Typography>
                            <CardExpiryElement options={{ style: { base: { fontSize: '16px' } } }} />
                        </Box>
                        <Box width="48%">
                            <Typography variant="subtitle1">CVV</Typography>
                            <CardCvcElement options={{ style: { base: { fontSize: '16px' } } }} />
                        </Box>
                    </Box>

                    {/* Centered Submit Button */}
                    <Box display="flex" justifyContent="center" mt={8}>
                        <Button
                            type="submit"
                            variant="contained"
                            style={{
                                backgroundColor: "#320440",
                                color: "white",
                                width: "40%",
                                padding: "10px",
                            }}
                            disabled={!stripe || loading}
                        >
                            {loading ? <CircularProgress size={24} /> : "Pay $5"}
                        </Button>
                    </Box>
                </form>
            </Box>
        </Dialog>
    );
};

export default CheckoutForm;
