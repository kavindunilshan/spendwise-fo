import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgba(50,4,64,0.68)',
        color: theme.palette.common.white,
        padding: '8px 10px',
    },
    [`&.${tableCellClasses.body}`]: {
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

const rows = [
    createData('2021-10-01-11:30:33', 'Income', 'Transpotation', 1000),
    createData('2021-10-01-11:30:27', 'Expense', 'Food', 500),
    createData('2021-10-01-11:30:24', 'Expense', 'Rent', 1000),
    createData('2021-10-01-11:30:23', 'Expense', 'Utilities', 300),
    createData('2021-10-01-11:30:21', 'Expense', 'Entertainment', 150),
];

export default function Transactions() {
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
                    {rows.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="left">{row.timestamp}</StyledTableCell>
                            <NarrowTableCell align="left">{row.type}</NarrowTableCell>
                            <NarrowTableCell align="left">{row.category}</NarrowTableCell>
                            <NarrowTableCell align="right">{row.amount}</NarrowTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
