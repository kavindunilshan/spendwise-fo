import * as React from 'react';
import {alpha, styled} from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import {Avatar} from "@mui/material";
import {Logout, Settings, Subscriptions, Visibility} from "@mui/icons-material";
import {useAuth0} from "@auth0/auth0-react";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function UserMenu({name, image}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { logout } = useAuth0();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout({logoutParams: {returnTo: window.location.origin}});
        handleClose();
    }

    return (
        <div className={'login-user-menu-container'} style={{color: '#320440'}}>
            <Avatar className={'login-user-icon'} style={{width: 40, height: 40}} alt={name} src={image} onClick={handleClick} />
            <StyledMenu
                id="demo-customized-menu"
                className={'login-user-menu'}
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} style={{color: '#320440'}} disableRipple>
                    <Visibility style={{color: '#320440'}} />
                    View Profile
                </MenuItem>
                <MenuItem onClick={handleClose} style={{color: '#320440'}} disableRipple>
                    <Subscriptions style={{color: '#320440'}} />
                    Subscriptions
                </MenuItem>
                <MenuItem onClick={handleClose} style={{color: '#320440'}} disableRipple>
                    <Settings style={{color: '#320440'}} />
                    Settings
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleLogout} style={{color: '#320440'}} disableRipple>
                    <Logout style={{color: '#7d0a0a'}} />
                    Logout
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
