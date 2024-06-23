import React from 'react';
import {List, ListItem, ListItemIcon, Tooltip} from "@mui/material";
import {useNavigate} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home.js";
import UserMenu from "../login/logged-menu.jsx";
import {MessageOutlined, Settings} from "@mui/icons-material";

function FlatIcons({}) {
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path || "");
    }
    return (
        <div>
            <List sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: 0 }}>
                <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Tooltip title="Home" placement="top">
                        <ListItemIcon sx={{ minWidth: 'auto', color: 'var(--text-color)' }}>
                            <HomeIcon style={{fontSize: 25}} onClick={() => handleClick()}/>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Tooltip title="Home" placement="top">
                        <ListItemIcon sx={{ minWidth: 'auto', color: 'var(--text-color)' }}>
                            <Settings style={{fontSize: 25}} onClick={() => handleClick("/settings/profile")}/>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Tooltip title="Home" placement="top">
                        <ListItemIcon sx={{ minWidth: 'auto', color: 'var(--text-color)' }}>
                            <MessageOutlined style={{fontSize: 25}} onClick={() => handleClick()}/>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Tooltip title="Receipt" placement="top">
                        <ListItemIcon sx={{ minWidth: 'auto', color: 'var(--text-color)' }}>
                            <UserMenu size={25}/>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
            </List>

        </div>
    );
}

export default FlatIcons;