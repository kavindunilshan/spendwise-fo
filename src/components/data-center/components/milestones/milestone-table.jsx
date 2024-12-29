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
import {useAuth0} from '@auth0/auth0-react';
import {useTokenManager} from '../../../../services/direct-tocken.js';
import useWindowResize from '../../../../services/useResize.js';
import {fetchMilestones} from "../../../../services/data-center.js";

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
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function MilestoneTable() {
    const windowWidth1000 = useWindowResize(1000);

    const [changed, setChanged] = useState(false);

    const { user, isAuthenticated } = useAuth0();
    const { getAccessToken } = useTokenManager();

    const [milestones, setMilestones] = useState([]);

    useEffect(() => {
        if (isAuthenticated) {
            fetchMilestones(user.sub.split('|')[1], getAccessToken).then((data) => {
                setMilestones(data);
            });
        }
    }, [user, changed]);

    return (
        <div
            className={'ds-milestones'}
            style={{
                width: windowWidth1000 ? '105%' : '95%',
                marginLeft: windowWidth1000 ? '5%' : '3%',
            }}
        >
            <TableContainer component={Paper} style={{ marginTop: '4%', marginBottom: '15%' }}>
                <Table sx={{ minWidth: 200 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align={'left'}>Name</StyledTableCell>
                            <StyledTableCell align={'left'}>Goal ID</StyledTableCell>
                            <StyledTableCell align={'left'}>Date</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {milestones.map((milestone, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell align="left">{milestone.name}</StyledTableCell>
                                <StyledTableCell align="left">{milestone.goalId}</StyledTableCell>
                                <StyledTableCell align="left">{new Date(milestone.date).toLocaleString()}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
