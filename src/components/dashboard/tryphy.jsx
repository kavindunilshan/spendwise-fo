import React from 'react';
import '/src/styles/dashboard/trophy.css';
import {Tooltip} from "@mui/material";

function Trophy({img, date, reason}) {
    return (
        <Tooltip title={reason} arrow>
            <div className={'trophy-container'}>
                <img className={'trophy-img'} src={'./src/assets/m1.png'} alt={''}/>
                <div className={'trophy-reason'}>{date}</div>
            </div>
        </Tooltip>
            );
            }

            export default Trophy;