import React from 'react';
import {List, ListItem, ListItemIcon, Tooltip} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle.js";
import HomeIcon from "@mui/icons-material/Home.js";
import AddIcon from "@mui/icons-material/Add.js";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong.js";
import UserMenu from "../login/logged-menu.jsx";

function FlatIcons(props) {
    return (
        <div>
            <List sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Tooltip title="Account" placement="top-end">
                        <ListItemIcon sx={{ minWidth: 'auto', color: '#320440' }}>
                            <AccountCircleIcon />
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Tooltip title="Home" placement="top">
                        <ListItemIcon sx={{ minWidth: 'auto', color: '#320440' }}>
                            <HomeIcon />
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Tooltip title="Add Expense" placement="top">
                        <ListItemIcon sx={{ minWidth: 'auto', color: '#320440' }}>
                            <AddIcon />
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
                <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Tooltip title="Receipt" placement="top">
                        <ListItemIcon sx={{ minWidth: 'auto', color: '#320440' }}>
                            <UserMenu/>
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
            </List>

        </div>
    );
}

export default FlatIcons;