import React, {useState} from 'react';
import "/src/styles/dashboard/dashboard.css";
import {Button} from "@mui/material";
import {Add} from "@mui/icons-material";
import CustomizedDialogs from "../forms/add-transaction.jsx";
import {createTransaction} from "../../services/axios-services.js";
import SlideBar from "./slide-bar.jsx";
import SimpleLineChart from "../charts/line-chart.jsx";

function Dashboard() {
    const initialFormData = {
        transactionType: 'INCOME',
        amount: '',
        date: new Date().toISOString().slice(0, 10),
        categoryId: '',
        category: '',
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

        if (name === "category") {
            const [categoryId, category] = value.split("-");
            setFormData((prevData) => ({
                ...prevData,
                categoryId: parseInt(categoryId), // Ensure categoryId is an integer
                category,
            }));
            return;
        }

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

        const currentTimeStamp = new Date().toISOString();

        const transaction = {
            category_id: formData.categoryId,
            user_id: 111142,
            date: `${formData.date}T00:00:00`,
            timestamp: currentTimeStamp,
            description: formData.description,
        };

        console.log("Here", transaction);

        createTransaction(transaction);

        setFormData(initialFormData);  // Reset the form
        setErrors({});
        setOpen(false);
    };

    return (
        <div className="dsb">
            <SlideBar/>
            <Button
                onClick={handleClickOpen}
                variant="contained"
                style={{
                    marginLeft: "20px",
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
