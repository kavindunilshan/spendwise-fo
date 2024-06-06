import React from 'react';
import "/src/styles/dashboard/dashboard.css"

import {Button} from "@mui/material";
import {Add} from "@mui/icons-material";
import CustomizedDialogs from "../forms/add-transaction.jsx";

function Dashboard(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="dsb">
            <Button
                onClick={handleClickOpen}
                variant="contained"
                style={{
                    backgroundColor: "#FB8B24"
                }}
                startIcon={<Add/>}>Transaction</Button>
            <CustomizedDialogs open={open} handleClose={handleClose}/>

        </div>
    );
}

export default Dashboard;