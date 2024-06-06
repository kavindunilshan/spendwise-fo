import React from 'react';
import "/src/styles/dashboard/dashboard.css"

import {Button} from "@mui/material";
import {Add} from "@mui/icons-material";

function Dashboard(props) {
    return (
        <div className="dsb">
            <Button variant="contained"
                    style={{
                        backgroundColor: "#FB8B24"
                    }}
                    startIcon={<Add/>}>Transaction</Button>
        </div>
    );
}

export default Dashboard;