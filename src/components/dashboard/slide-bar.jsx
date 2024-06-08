import React from 'react';
import { List, ListItem, ListItemIcon, Box, Tooltip } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import BlurLinearIcon from '@mui/icons-material/BlurLinear';
import {Close} from "@mui/icons-material";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <>
            {!isSidebarOpen && <BlurLinearIcon
                onClick={toggleSidebar}
                sx={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '10px',
                    zIndex: 1000,
                    cursor: 'pointer',
                }}
            />}
            { isSidebarOpen && <Close
                onClick={toggleSidebar}
                sx={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '10px',
                    zIndex: 1000,
                    cursor: 'pointer',
                }}
            />}
            {isSidebarOpen &&
                <Box
                    sx={{
                        width: '40px',
                        height: '100vh',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
                    }}
                >
                    <List sx={{ padding: 0 }}>
                        <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
                            <Tooltip title="Account" placement="right">
                                <ListItemIcon sx={{ minWidth: 'auto', color: '#730C97' }}>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                            </Tooltip>
                        </ListItem>
                        <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
                            <Tooltip title="Home" placement="right">
                                <ListItemIcon sx={{ minWidth: 'auto', color: '#730C97' }}>
                                    <HomeIcon />
                                </ListItemIcon>
                            </Tooltip>
                        </ListItem>
                        <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
                            <Tooltip title="Add Expense" placement="right">
                                <ListItemIcon sx={{ minWidth: 'auto', color: '#730C97' }}>
                                    <AddIcon />
                                </ListItemIcon>
                            </Tooltip>
                        </ListItem>
                        <ListItem button sx={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
                            <Tooltip title="Receipt" placement="right">
                                <ListItemIcon sx={{ minWidth: 'auto', color: '#730C97' }}>
                                    <ReceiptLongIcon />
                                </ListItemIcon>
                            </Tooltip>
                        </ListItem>
                    </List>
                </Box>
            }
        </>
    );
};

export default Sidebar;
