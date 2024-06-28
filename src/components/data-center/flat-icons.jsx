import React from 'react';
import {List, ListItem, ListItemIcon, Tooltip} from "@mui/material";
import {useNavigate} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home.js";
import UserMenu from "../login/logged-menu.jsx";
import {Dashboard, Settings, TextSnippet} from "@mui/icons-material";

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
                        <ListItemIcon sx={{ minWidth: 'auto', color: 'var(--text-color)', marginLeft: '5px', '&:hover': { color: '#68066d' }  }}>
                            <HomeIcon style={{fontSize: 30}} onClick={() => handleClick("/")}/>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Tooltip title="Dashboard" placement="top">
                        <ListItemIcon sx={{ minWidth: 'auto', color: 'var(--text-color)', marginLeft: '5px', '&:hover': { color: '#68066d' }  }}>
                            <Dashboard style={{fontSize: 30}} onClick={() => handleClick("/dashboard")}/>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Tooltip title="Settings" placement="top">
                        <ListItemIcon sx={{ minWidth: 'auto', color: 'var(--text-color)', marginLeft: '5px', '&:hover': { color: '#68066d' }  }}>
                            <Settings style={{fontSize: 30}} onClick={() => handleClick("/settings/profile")}/>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Tooltip title="Data-Center" placement="top">
                        <ListItemIcon sx={{ minWidth: 'auto', color: 'var(--text-color)', marginLeft: '5px', '&:hover': { color: '#68066d' }  }}>
                            <TextSnippet style={{fontSize: 30}} onClick={() => handleClick("/data-center/transactions")}/>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Tooltip title="Profile" placement="top">
                        <ListItemIcon sx={{ minWidth: 'auto', color: 'var(--text-color)', marginLeft: '5px', '&:hover': { color: '#68066d' } }}>
                            <UserMenu size={30}/>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
            </List>

        </div>
    );
}

export default FlatIcons;