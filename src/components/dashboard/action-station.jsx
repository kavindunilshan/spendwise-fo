import React, {useState} from 'react';
import "/src/styles/dashboard/action-station.css";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Add} from "@mui/icons-material";
import Button from "@mui/material/Button";
import SportsScoreOutlinedIcon from '@mui/icons-material/SportsScoreOutlined';
import CustomizedDialogs from "../forms/add-transaction.jsx";
import {createGoal, createTransaction} from "../../services/axios-services.js";
import FlatIcons from "./flat-icons.jsx";
import Clock from 'react-live-clock';
import dayjs from "dayjs";
import {styled} from "@mui/material/styles";
import {useAuth0} from "@auth0/auth0-react";
import SelectTextFields from "../forms/form-fields.jsx";
import GoalFormFields from "../forms/set-goal.jsx";
import {useTokenManager} from "../../services/direct-tocken.js";



const CustomDatePicker = styled(DatePicker)({
    '& .MuiOutlinedInput-root': {
        color: 'var(--text-color)',
    },

    '& .MuiInputAdornment-root': {
        color: 'var(--text-color)',
    },
    '& .MuiSvgIcon-root': {
        color: 'var(--text-color)',
    },
    '& .MuiFormLabel-root': {
        color: 'var(--text-color)',
    },
});


function ActionStation({onChange, setMonth, period}) {
    const [date, setDate] = useState(dayjs());

    const { getAccessToken } = useTokenManager();

    const initialTransactionFormData = {
        transactionType: 'INCOME',
        amount: '',
        date: new Date().toISOString().slice(0, 10),
        categoryId: '',
        category: '',
        description: '',
    };

    const initialGoalFormData = {
        name: 'Goal',
        type: 'GENERAL',
        amount: '',
        period: 'MONTHLY',
        transactionType: 'INCOME',
        sign: '+',
        category: '',
        categoryId: '',
    }

    const [transactionOpen, setTransactionOpen] = useState(false);
    const [TransactionFormData, setTransactionFormData] = useState(initialTransactionFormData);
    const [transactionErrors, setTransactionErrors] = useState({});

    const [goalOpen, setGoalOpen] = useState(false);
    const [goalFormData, setGoalFormData] = useState(initialGoalFormData);
    const [goalErrors, setGoalErrors] = useState({});



    const today = new Date();

    // Format the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    const {user} = useAuth0();

    const handleTransactionFormClose = () => {
        setTransactionOpen(false);
        setTransactionFormData(initialTransactionFormData);
        setTransactionErrors({});
    };

    const handleMonthChange = (date) => {
        setDate(date);
        setMonth(period === 'MONTHLY' ? date.format('MM YYYY') : date.format('YYYY'));
        onChange()
    }

    const handleTransactionFormChange = (e) => {
        const { name, value } = e.target;

        if (name === "category") {
            const [categoryId, category] = value.split("-");
            setTransactionFormData((prevData) => ({
                ...prevData,
                categoryId: parseInt(categoryId), // Ensure categoryId is an integer
                category,
            }));
            return;
        }

        setTransactionFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setTransactionErrors((prevErrors) => ({
            ...prevErrors,
            [name]: !value,
        }));
    };

    const handleTransactionFormSaveChanges = () => {
        let hasError = false;
        let newErrors = {};

        if (!TransactionFormData.amount) {
            hasError = true;
            newErrors.amount = "Amount is required";
        }

        if (hasError) {
            setTransactionErrors(newErrors);
            return;
        }

        const options = { timeZone: 'Asia/Colombo', hour12: false };
        const sriLankaTime = new Date().toLocaleString('en-CA', options);
        const currentTimeStamp = sriLankaTime.replace(', ', 'T');

        const transaction = {
            category_id: TransactionFormData.categoryId,
            user_id: user.sub.split("|")[1],
            amount: parseFloat(TransactionFormData.amount),
            date: `${TransactionFormData.date}T00:00:00`,
            timestamp: currentTimeStamp,
            description: TransactionFormData.description,
        };

        createTransaction(transaction, getAccessToken).then(
            (data) => {
                onChange("Transaction added successfully", "success");
            }
        ).catch((error) => {
            onChange("Failed to add transaction", "error");
        });

        setTransactionFormData(initialTransactionFormData);  // Reset the form
        setTransactionErrors({});
        setTransactionOpen(false);
    };

    const handleGoalFormChange = (e) => {
        const {name, value} = e.target;

        if (name === "category") {
            const [categoryId, category] = value.split("-");

            const sign = category === "Expense" ? "-" : "+";
            
            setGoalFormData((prevData) => ({
                ...prevData,
                categoryId: parseInt(categoryId), // Ensure categoryId is an integer
                category,
                sign,
            }));
            return;
        }

        setGoalFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setGoalErrors((prevErrors) => ({
            ...prevErrors,
            [name]: !value,
        }));

    }

    const handleGoalFormSaveChanges = () => {
        let hasError = false;
        let newErrors = {};

        if (!goalFormData.amount) {
            hasError = true;
            newErrors.amount = "Amount is required";
        }

        if (!goalFormData.name) {
            hasError = true;
            newErrors.name = "Name is required";
        }

        if (hasError) {
            setGoalErrors(newErrors);
            return;
        }

        const goal = {
            category_id: goalFormData.type.toUpperCase() === "SPECIFIC" ? goalFormData.categoryId: null,
            user_id: user.sub.split("|")[1],
            amount: parseFloat(goalFormData.amount),
            transactionType: goalFormData.transactionType.toUpperCase(),
            name: goalFormData.name,
            sign: goalFormData.sign.charAt(0),
            period: goalFormData.period.toUpperCase(),
            type: goalFormData.type.toUpperCase(),
        }

        

        createGoal(goal, getAccessToken).then(
            (data) => {
                onChange("Goal set successfully", "success");
            }
        ).catch((error) => {
            onChange("Failed to set goal", "error");
        });


        setGoalFormData(initialGoalFormData);
        setGoalErrors({});
        setGoalOpen(false);

    }

    const handleGoalFormClose = () => {
        setGoalOpen(false);
        setGoalFormData(initialGoalFormData);
        setGoalErrors({});

    }

    const views = period === 'MONTHLY' ? ['month', 'year'] : period === 'YEARLY' ? ['year'] : null;

    return (
        <>
            <div className={'action-station-container'}>
                <div className={'action-station-l1'}>
                    {views  && <div className={'action-station-ym-picker'}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <CustomDatePicker
                                label={'Time period'}
                                views={views}
                                style={{size: 'small', backgroundColor: '#111111'}}
                                value={date}
                                onChange={(newDate) => handleMonthChange(newDate)}
                            />
                        </LocalizationProvider>
                    </div>}
                    <div className={'action-station-add-btn'}>
                        <Button disableElevation
                                onClick={() => setTransactionOpen(true)}
                                variant="contained"
                                style={{
                                    border: "1px solid var(--text-color)",
                                    backgroundColor: "rgba(251,139,36,0)",
                                    color: "var(--text-color)",
                                    width: '100%',
                                }}
                                startIcon={<Add/>}
                        >
                            Transaction
                        </Button>
                    </div>
                </div>
                    <div className={'action-station-goal-btn'}>
                        <Button disableElevation
                                onClick={() => setGoalOpen(true)}
                                variant="contained"
                                style={{
                                    border: "1px solid var(--text-color)",
                                    backgroundColor: "rgba(251,139,36,0)",
                                    color: "var(--green-color)"
                                }}
                                startIcon={<SportsScoreOutlinedIcon style={{color: 'var(--red-color)'}}/>}
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
                    title={"Add Transaction"}
                    open={transactionOpen}
                    handleClose={handleTransactionFormClose}
                    handleSaveChanges={handleTransactionFormSaveChanges}
                >
                    <SelectTextFields
                        formData={TransactionFormData}
                        handleFormChange={handleTransactionFormChange}
                        errors={transactionErrors}
                        currency={"LKR"}
                    />
                </CustomizedDialogs>

            <CustomizedDialogs
                title={"Set up new Goal"}
                open={goalOpen}
                handleClose={handleGoalFormClose}
                handleSaveChanges={handleGoalFormSaveChanges}
            >
                <GoalFormFields
                    formData={goalFormData}
                    handleFormChange={handleGoalFormChange}
                    errors={goalErrors}
                    currency={"LKR"}
                />
            </CustomizedDialogs>
            </>
    );
}

            export default ActionStation;