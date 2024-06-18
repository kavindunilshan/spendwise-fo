import React, {useState} from 'react';
import "/src/styles/dashboard/action-station.css";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Add} from "@mui/icons-material";
import Button from "@mui/material/Button";
import SportsScoreOutlinedIcon from '@mui/icons-material/SportsScoreOutlined';
import CustomizedDialogs from "../forms/add-transaction.jsx";
import {createTransaction} from "../../services/axios-services.js";
import FlatIcons from "./flat-icons.jsx";
import Clock from 'react-live-clock';

function ActionStation() {
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

    const today = new Date();

    // Format the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

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

        createTransaction(transaction);

        setFormData(initialFormData);  // Reset the form
        setErrors({});
        setOpen(false);
    };

    return (
        <>
            <div className={'action-station-container'}>
                <div className={'action-station-l1'}>
                    <div className={'action-station-ym-picker'}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label={'"month" and "year"'} views={['month', 'year']} style={{size: 'small'}}/>
                        </LocalizationProvider>
                    </div>
                    <div className={'action-station-add-btn'}>
                        <Button disableElevation
                                onClick={handleClickOpen}
                                variant="contained"
                                style={{
                                    border: "1px solid #320440",
                                    backgroundColor: "rgba(251,139,36,0)",
                                    color: "#FB8B24",
                                }}
                                startIcon={<Add/>}
                        >
                            Transaction
                        </Button>
                    </div>
                </div>
                    <div className={'action-station-goal-btn'}>
                        <Button disableElevation
                                variant="contained"
                                style={{
                                    border: "1px solid #320440",
                                    backgroundColor: "rgba(251,139,36,0)",
                                    color: "#036022",
                                }}
                                startIcon={<SportsScoreOutlinedIcon style={{color: '#9A031E'}}/>}
                        >
                            Set Goal
                        </Button>
                    </div>
                    <div className={'action-station-live-clock'}>
                        {formattedDate + " "}
                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Colombo'}/>
                    </div>
                    <div className={'action-station-flat-icons'}>
                        <FlatIcons/>
                    </div>
                </div>
                <CustomizedDialogs
                    open={open}
                    handleClose={handleClose}
                    handleSaveChanges={handleSaveChanges}
                    formData={formData}
                    handleFormChange={handleFormChange}
                    errors={errors}
                    currency={"LKR"}
                />
            </>
            );
            }

            export default ActionStation;