import React, { useEffect, useState } from 'react';
import { Snackbar, Alert, LinearProgress, Box } from '@mui/material';

const Notification = ({ open, onClose, message, severity }) => {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        if (open) {
            setProgress(100);
            const timer = setInterval(() => {
                setProgress((prev) => Math.max(prev - 2, 0));
            }, 100);

            return () => clearInterval(timer);
        }
    }, [open]);

    const progressColor = {
        success: '#4caf50',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196f3',
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Box sx={{ width: '100%' }}>
                <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                        backgroundColor: '#e0e0e0',
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: progressColor[severity],
                        },
                    }}
                />
            </Box>
        </Snackbar>
    );
};

export default Notification;
