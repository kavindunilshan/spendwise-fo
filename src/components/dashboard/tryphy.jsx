import React from 'react';
import '/src/styles/dashboard/trophy.css';
import {Tooltip} from "@mui/material";

function Trophy({date, reason}) {
    const formattedDate = date.split("T")[0];

    return (
        <Tooltip title={reason} arrow>
            <div className={'trophy-container'}>
                <img className={'trophy-img'} src={'/m1.png'} alt={''}/>
                <div className={'trophy-reason'}>Achieved on {formattedDate}</div>
            </div>
        </Tooltip>
    );
}

export default Trophy;