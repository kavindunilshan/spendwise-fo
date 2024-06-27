import * as React from 'react';
import {useContext, useEffect} from 'react';
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

    return (
        <div className={'ds-transactions'} style={{width: '95%', marginLeft: '3%'}}>
            <TableContainer component={Paper} style={{marginTop: '4%'}}>
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
                                <StyledTableCell align="left">{transaction.timestamp.split('.')[0].replace('T', ' ')}</StyledTableCell>
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
        </div>
    );
}
