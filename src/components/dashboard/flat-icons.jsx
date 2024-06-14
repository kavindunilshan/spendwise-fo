import React from 'react';
import {List, ListItem, ListItemIcon, Tooltip} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle.js";
import HomeIcon from "@mui/icons-material/Home.js";
import AddIcon from "@mui/icons-material/Add.js";
import UserMenu from "../login/logged-menu.jsx";

function FlatIcons(props) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div>
            <List sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Tooltip title="Home" placement="top">
                        <ListItemIcon sx={{ minWidth: 'auto', color: '#320440' }}>
                            <HomeIcon style={{fontSize: 30}} onClick={() => handleClick()}/>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Tooltip title="Receipt" placement="top">
                        <ListItemIcon sx={{ minWidth: 'auto', color: '#320440' }}>
                            <UserMenu size={25}/>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
            </List>

        </div>
    );
}

export default FlatIcons;