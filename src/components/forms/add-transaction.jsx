import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SelectTextFields from './form-fields.jsx';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialogs({title, open, handleClose, handleSaveChanges, children}) {
    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle
                    sx={{
                        m: 0,
                        p: 2,
                        textAlign: 'center',
                        backgroundColor: '#320440',
                        color: 'white'
                }} id="customized-dialog-title">
                    {title}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    {children}
                </DialogContent>
                <DialogActions
                sx={{
                    backgroundColor: '#320440',
                    color: 'white'
                }}>
                    <Button autoFocus onClick={handleSaveChanges} sx={{
                        backgroundColor: '#320440',
                        color: 'white',
                        border: '1px solid white',
                    }}>
                        Save
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}
