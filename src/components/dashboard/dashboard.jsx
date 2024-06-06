import React, { useState } from 'react';
import "/src/styles/dashboard/dashboard.css";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import CustomizedDialogs from "../forms/add-transaction.jsx";

function Dashboard() {
    const initialFormData = {
        transactionType: 'Income',
        amount: '',
        date: new Date().toISOString().slice(0, 10),
        description: '',
    };

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFormData(initialFormData);
        setErrors({});
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: !value,
        }));
    };

    const handleSaveChanges = () => {
        let hasError = false;
        let newErrors = {};

        if (!formData.amount) {
            hasError = true;
            newErrors.amount = "Amount is required";
        }

        if (hasError) {
            setErrors(newErrors);
            return;
        }

        // Extract and use formData here
        console.log('Form Data:', formData);
        setFormData(initialFormData);  // Reset the form
        setErrors({});
        setOpen(false);
    };

    return (
        <div className="dsb">
            <Button
                onClick={handleClickOpen}
                variant="contained"
                style={{
                    backgroundColor: "#FB8B24"
                }}
                startIcon={<Add />}
            >
                Transaction
            </Button>
            <CustomizedDialogs
                open={open}
                handleClose={handleClose}
                handleSaveChanges={handleSaveChanges}
                formData={formData}
                handleFormChange={handleFormChange}
                errors={errors}
                currency={"LKR"}
            />
        </div>
    );
}

export default Dashboard;
