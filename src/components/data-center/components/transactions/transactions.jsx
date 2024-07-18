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
import {fetchAllTransactionsBetweenDates, fetchTransactionsBetweenDates} from "../../../../services/dashboard.js";
import {SettingsContext} from "../../../settings/settings-context.jsx";
import {Edit} from "@mui/icons-material";
import {Tooltip} from "@mui/material";
import {editTransaction} from "../../../../services/axios-services.js";
import CustomizedDialogs from "../../../forms/add-transaction.jsx";

import dayjs from 'dayjs';
import {DemoItem} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateRangePicker} from "@mui/x-date-pickers-pro";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SelectTextFields from "../../../forms/form-fields.jsx";

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

function createData(timestamp, type, category, amount) {
    return { timestamp, type, category, amount };
}

const transactionTypes = [
    {
        value: 'ALL',
        label: 'All',
    },
    {
        value: 'INCOME',
        label: 'Income',
    },
    {
        value: 'EXPENSE',
        label: 'Expense',
    },
    {
        value: 'SAVING',
        label: 'Saving',
    },
];

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

    const [isFetch, setIsFetch] = useState(false);

    const [type, setType] = React.useState('INCOME');

    const [value, setValue] = React.useState([
        dayjs().add(-1, 'month'),
        dayjs(),
    ]);

    const [transactions, setTransactions] = React.useState([]);
    const {user} = useAuth0();

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "Transactions", "slogan": "View your financial transactions"});
    }, []);

    

    useEffect(() => {

        if ( type === 'ALL') {
            fetchAllTransactionsBetweenDates(user?.sub.split('|')[1],
                value[0].format('YYYY-MM-DDTHH:mm:ss'),
                value[1].format('YYYY-MM-DDTHH:mm:ss')).then((data) => {
                setTransactions(data)
            });
        }
        else {
            fetchTransactionsBetweenDates(user?.sub.split('|')[1], type,
                value[0].format('YYYY-MM-DDTHH:mm:ss'),
                value[1].format('YYYY-MM-DDTHH:mm:ss')).then((data) => {
                console.log("Data coming", data);
                setTransactions(data)
            });
        }

    }, [user, isFetch]);


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

    const handleTransactionTypeSelect = (event) => {
        setType(event.target.value);
    }


    return (
        <div className={'ds-transactions'} style={{width: '95%', marginLeft: '3%'}}>
            <div className={'date-range-picker'} style={{width: '90%', margin: '3%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoItem label="Pick date range" component="DateRangePicker">
                        <DateRangePicker
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                        />
                    </DemoItem>
                </LocalizationProvider>


                <DemoItem label={'Pick transaction type'} sx={{marginLeft: '40px', width: '20%'}}>
                    <TextField
                        id="outlined-select-transaction-type"
                        select
                        label="Transaction Type"
                        name="transactionType"
                        value={type}
                        onChange={handleTransactionTypeSelect}
                    >
                        {transactionTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </DemoItem>

                <Button variant="contained" color="primary" style={{marginLeft: '5%', marginTop: '20px', padding: '15px 20px'}} onClick={() => setIsFetch(!isFetch)}>Fetch Data</Button>
            </div>
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
            >
                <SelectTextFields
                    formData={formData}
                    handleFormChange={handleFormChange}
                    errors={errors}
                    currency={"LKR"}
                />
            </CustomizedDialogs>
        </div>
    );
}
