import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useAuth0} from "@auth0/auth0-react";
import {fetchAllTransactions} from "../../../../services/dashboard.js";
import {SettingsContext} from "../../../settings/settings-context.jsx";
import {Edit} from "@mui/icons-material";
import {Tooltip} from "@mui/material";
import {createTransaction, editTransaction} from "../../../../services/axios-services.js";
import CustomizedDialogs from "../../../forms/add-transaction.jsx";

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
    width: '100px', // Set a specific width for this cell
    padding: '4px',
});

function createData(timestamp, type, category, amount) {
    return { timestamp, type, category, amount };
}

export default function Transactions() {

    const initialFormData = {
        index: 0,
        transactionId: 0,
        transactionType: 'INCOME',
        amount: '',
        date: new Date().toISOString().slice(0, 10),
        categoryId: '',
        category: '',
        description: '',
    };

    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

    const [transactions, setTransactions] = React.useState([]);
    const {user} = useAuth0();

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "Transactions", "slogan": "View your financial transactions"});
    }, []);

    

    useEffect(() => {
        fetchAllTransactions(user?.sub.split('|')[1]).then((data) => {
            setTransactions(data || []);
        });
    }, [user]);


    const handleClickOpen = (index, transaction) => {
        setOpen(true);

        setFormData(
            {
                index: index,
                transactionId: transaction.transactionId,
                transactionType: transaction.category.type,
                amount: transaction.amount,
                date: transaction.date.split('T')[0],
                categoryId: transaction.category_id,
                category: transaction.category.name,
                description: transaction.description,
            }
        )
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

        const options = { timeZone: 'Asia/Colombo', hour12: false };
        const sriLankaTime = new Date().toLocaleString('en-CA', options);
        const currentTimeStamp = sriLankaTime.replace(', ', 'T');

        const transaction = {
            category_id: formData.categoryId,
            user_id: user.sub.split("|")[1],
            amount: parseFloat(formData.amount),
            date: `${formData.date}T00:00:00`,
            timestamp: currentTimeStamp,
            description: formData.description,
        };

        editTransaction(formData.transactionId, transaction).then((data) => {
            const newTransactions = [...transactions];
            newTransactions[formData.index] = data;

            console.log("data", data);
            setTransactions(newTransactions);
        });

        setFormData(initialFormData);
        setErrors({});
        setOpen(false);
    };


    return (
        <div className={'ds-transactions'} style={{width: '95%', marginLeft: '3%'}}>
            <TableContainer component={Paper} style={{marginTop: '4%', marginBottom: "15%"}}>
                <Table sx={{ minWidth: 200 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align={'left'}>Timestamp</StyledTableCell>
                            <NarrowTableCell align={'left'}>Type</NarrowTableCell>
                            <NarrowTableCell align={'left'}>Category</NarrowTableCell>
                            <NarrowTableCell align={'center'}>Amount</NarrowTableCell>
                            <NarrowTableCell align={'left'}>Date</NarrowTableCell>
                            <StyledTableCell align={'center'}>Description</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map((transaction, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell align="left">
                                    <Tooltip title="Edit" placement="left">
                                        <Edit onClick={() => handleClickOpen(index, transaction)}/>
                                    </Tooltip> {transaction.timestamp.split('.')[0].replace('T', ' ')}
                                </StyledTableCell>
                                <NarrowTableCell align="left">{transaction.category.type}</NarrowTableCell>
                                <NarrowTableCell align="left">{transaction.category.name}</NarrowTableCell>
                                <NarrowTableCell align="center">{transaction.amount.toLocaleString()}</NarrowTableCell>
                                <NarrowTableCell align="left">{transaction.date.split('T')[0]}</NarrowTableCell>
                                <StyledTableCell align="left">{transaction.description}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
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
