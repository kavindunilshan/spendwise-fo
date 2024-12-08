import * as React from 'react';
import {useEffect, useState} from 'react';
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
import GoalFormFields from "../../../forms/set-goal.jsx";
import {useAuth0} from "@auth0/auth0-react";
import {fetchGoals, updateGoal} from "../../../../services/data-center.js";
import {useTokenManager} from "../../../../services/direct-tocken.js";

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
        id: '',
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

    const [changed, setChanged] = useState(false);

    const {user, isAuthenticated} = useAuth0();
    const { getAccessToken } = useTokenManager();

    const [goals, setGoals] = useState([]);


    useEffect(() => {
        if (isAuthenticated) {
            fetchGoals(user.sub.split("|")[1], getAccessToken).then((data) => {
                setGoals(data);
            });
        }
    }, [user, changed]);

    const handleClickOpen = (index, goal) => {
        setGoalOpen(true);

        

        const newGoal = {
            id: goal.goalId,
            name: goal.name,
            type: goal.type,
            amount: goal.amount,
            period: goal.period,
            transactionType: goal.transactionType,
            sign: goal.sign,
            category: goal.category.name,
            categoryId: goal.category_id,
        }

        

        setGoalFormData(newGoal);
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
            goalId: goalFormData.id,
            category_id: goalFormData.type.toUpperCase() === "SPECIFIC" ? goalFormData.categoryId: null,
            user_id: user.sub.split("|")[1],
            amount: parseFloat(goalFormData.amount),
            transactionType: goalFormData.transactionType.toUpperCase(),
            name: goalFormData.name,
            sign: goalFormData.sign.charAt(0),
            period: goalFormData.period.toUpperCase(),
            type: goalFormData.type.toUpperCase(),
        }

        

        updateGoal(goal.goalId, goal, getAccessToken).then(
            (data) => {
                
                setChanged(!changed);
            }
        );


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
                            <StyledTableCell align={'left'}></StyledTableCell>
                            <StyledTableCell align={'left'}>Name</StyledTableCell>
                            <NarrowTableCell align={'left'}>Type</NarrowTableCell>
                            <NarrowTableCell align={'left'}>Period</NarrowTableCell>
                            <NarrowTableCell align={'center'}>Amount</NarrowTableCell>
                            <NarrowTableCell align={'left'}>Category</NarrowTableCell>
                            <NarrowTableCell align={'left'}>Sub Category</NarrowTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {goals.map((goal, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell align="center">
                                    <Tooltip title="Edit" placement="left">
                                        <Edit onClick={() => handleClickOpen(index, goal)}/>
                                    </Tooltip>
                                </StyledTableCell>
                                <NarrowTableCell align="left">{goal.name}</NarrowTableCell>
                                <NarrowTableCell align="left">{goal.type}</NarrowTableCell>
                                <NarrowTableCell align="left">{goal.period}</NarrowTableCell>
                                <NarrowTableCell align="center">{goal.amount.toLocaleString()}</NarrowTableCell>
                                <StyledTableCell align="left">{goal.transactionType}</StyledTableCell>
                                <StyledTableCell align="left">{goal?.category.name}</StyledTableCell>
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
