import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Edit} from "@mui/icons-material";
import {Tooltip} from "@mui/material";
import CustomizedDialogs from "../../../forms/add-transaction.jsx";
import {DemoItem} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateRangePicker} from "@mui/x-date-pickers-pro";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SelectTextFields from "../../../forms/form-fields.jsx";
import GoalFormFields from "../../../forms/set-goal.jsx";
import {createGoal} from "../../../../services/axios-services.js";
import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {fetchGoals} from "../../../../services/data-center.js";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'var(--chart-header-color)',
        color: theme.palette.common.black,
        fontSize: 18,
        padding: '18px 10px',
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: 'var(--chart-row-color)',
        color: 'var(--chart-text-color)',
        fontSize: 16,
        padding: '18px 10px',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: 'rgba(50,4,64,0.05)',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const NarrowTableCell = styled(StyledTableCell)({
    width: '15%', // Set a specific width for this cell
    padding: '4px',
});


export default function GoalTable() {

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

    const [goalOpen, setGoalOpen] = useState(false);
    const [goalFormData, setGoalFormData] = useState(initialGoalFormData);
    const [goalErrors, setGoalErrors] = useState({});

    const {user, isAuthenticated} = useAuth0();

    const [goals, setGoals] = useState([]);


    useEffect(() => {
        if (isAuthenticated) {
            fetchGoals(user.sub.split("|")[1]).then((data) => {
                console.log("Here", data);
                setGoals(data);
            });
        }
    }, [user]);

    const handleClickOpen = (index, goal) => {
        setGoalOpen(true);

        setGoalFormData(goal);
    };

    const handleGoalFormChange = (e) => {
        const {name, value} = e.target;

        if (name === "category") {
            const [categoryId, category] = value.split("-");

            const sign = category === "Expense" ? "-" : "+";
            console.log(categoryId, category);
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
            name: goalFormData.name,
            sign: goalFormData.sign.charAt(0),
            period: goalFormData.period.toUpperCase(),
            type: goalFormData.type.toUpperCase(),
        }

        console.log("Goal", goal);

        createGoal(goal);


        setGoalFormData(initialGoalFormData);
        setGoalErrors({});
        setGoalOpen(false);

    }

    const handleGoalFormClose = () => {
        setGoalOpen(false);
        setGoalFormData(initialGoalFormData);
        setGoalErrors({});
    }



        return (
        <div className={'ds-transactions'} style={{width: '95%', marginLeft: '3%'}}>
            <TableContainer component={Paper} style={{marginTop: '4%', marginBottom: "15%"}}>
                <Table sx={{ minWidth: 200 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align={'left'}>Name</StyledTableCell>
                            <NarrowTableCell align={'left'}>Type</NarrowTableCell>
                            <NarrowTableCell align={'left'}>Period</NarrowTableCell>
                            <NarrowTableCell align={'center'}>Amount</NarrowTableCell>
                            <NarrowTableCell align={'left'}>Category</NarrowTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {goals?.name && goals.map((goal, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell align="left">
                                    <Tooltip title="Edit" placement="left">
                                        <Edit onClick={() => handleClickOpen(index, goal)}/>
                                    </Tooltip> {goal.timestamp.split('.')[0].replace('T', ' ')}
                                </StyledTableCell>
                                <NarrowTableCell align="left">{goal.category.type}</NarrowTableCell>
                                <NarrowTableCell align="left">{goal.category.name}</NarrowTableCell>
                                <NarrowTableCell align="center">{goal.amount.toLocaleString()}</NarrowTableCell>
                                <NarrowTableCell align="left">{goal.date.split('T')[0]}</NarrowTableCell>
                                <StyledTableCell align="left">{goal.description}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
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
        </div>
    );
}
