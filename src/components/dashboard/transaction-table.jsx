import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect} from "react";
import {fetchLastFiveTransactions} from "../../services/dashboard.js";
import {useAuth0} from "@auth0/auth0-react";
import {useTokenManager} from "../../services/direct-tocken.js";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'var(--chart-header-color)',
        color: theme.palette.common.white,
        padding: '8px 10px',
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: 'var(--chart-row-color)',
        color: 'var(--chart-text-color)',
        fontSize: 14,
        padding: '8px 10px',
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

export default function Transactions({changed}) {

    const [transactions, setTransactions] = React.useState([]);
    const {user} = useAuth0();
    const { getAccessToken } = useTokenManager();

    useEffect(() => {
        fetchLastFiveTransactions(user.sub.split('|')[1], getAccessToken).then((data) => {
            setTransactions(data || []);
        });
        }, [changed]);

    return (
        <TableContainer component={Paper} style={{marginTop: '30px'}}>
            <Table sx={{ minWidth: 200 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align={'left'}>Timestamp</StyledTableCell>
                        <NarrowTableCell align={'left'}>Type</NarrowTableCell>
                        <NarrowTableCell align={'left'}>Category</NarrowTableCell>
                        <NarrowTableCell align={'right'}>Amount</NarrowTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((transaction, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="left">{transaction.timestamp.split('.')[0].replace('T', ' ')}</StyledTableCell>
                            <NarrowTableCell align="left">{transaction.category.type}</NarrowTableCell>
                            <NarrowTableCell align="left">{transaction.category.name}</NarrowTableCell>
                            <NarrowTableCell align="right">{transaction.amount.toLocaleString()}</NarrowTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
