import React, {useState} from 'react';
import '/src/styles/data-center/request-form.css';
import HeaderWithSlogan from "../../../settings/header-slogan.jsx";
import Button from "@mui/material/Button";
import {AutoAwesome} from "@mui/icons-material";
import {postAdvice} from "../../../../services/data-center.js";
import dayjs from "dayjs";
import {useAuth0} from "@auth0/auth0-react";
import Notification from "../../../utils/notification.jsx";
import {useTokenManager} from "../../../../services/direct-tocken.js";
import CheckoutForm from "../../../utils/checkout-form.jsx";

function RequestForm({onChange}) {

    const [title, setTitle] = useState('');
    const [problem, setProblem] = useState('');
    const [notification, setNotification] = useState({
        open: false,
        message: '',
        severity: 'success',
    });
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const { getAccessToken } = useTokenManager();
    const {user} = useAuth0();
    const titleStyle = {
        fontSize: '1.2em',
        fontWeight: '500',
        color: '#320440',
        margin: '10px 0',
    }

    const handleSubmit = () => {

        setOpen(false);
        const timestamp = dayjs().format('YYYY-MM-DDTHH:mm:ss');
        const advice = {
            title: title,
            problem: problem,
            timestamp: timestamp,
            status: false,
            userId: user.sub.split("|")[1],
        }
        postAdvice(advice, getAccessToken).then((data) => {
            onChange();
            handleShowNotification('Advice Requested Successfully', 'success');
            setTitle('');
            setProblem('');
        });
    }

    const handleShowNotification = (message, severity) => {
        setNotification({ open: true, message, severity });
    };

    const handleCloseNotification = () => {
        setNotification((prev) => ({ ...prev, open: false }));
    };

    const submitAdvice = () => {
        if (!title || !problem) {

            handleShowNotification('Both Title and Problem Description are required.', 'error');
            return;
        }
        setOpen(true);
    }

    return (
        <div className="request-form">
            <form>
                <div className="request-form-group">
                    <HeaderWithSlogan title={'Request Title'} titleStyle={titleStyle}/>
                    <input type="text" id="title" value={title} name="title" className="form-control"
                           onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="request-form-group">
                    <HeaderWithSlogan title={'Problem Description'} titleStyle={titleStyle}/>
                    <textarea id="problem" name="problem" value={problem} className="form-control problem-field"
                                onChange={(e) => setProblem(e.target.value)}
                    ></textarea>
                </div>
                <div className={'request-form-bottom'}>
                    <Button disableElevation
                            onClick={() => submitAdvice()}
                            variant="contained"
                            style={{
                                border: "1px solid var(--text-color)",
                                backgroundColor: "rgb(50,4,64)",
                                color: "#ffffff",
                            }}
                            startIcon={<AutoAwesome/>}
                    >
                        Request Advice
                    </Button>
                    <div className={'request-form-side-info'}>
                        * Please note that requesting advice is a paid service costing $5.
                        You can pay with a credit/debit card or other methods.
                        You will receive the advice within 24 hours.
                    </div>
                </div>
            </form>

            <Notification
                open={notification.open}
                onClose={handleCloseNotification}
                message={notification.message}
                severity={notification.severity}
                />

            <CheckoutForm open={open} handleClose={handleClose} onSuccess={handleSubmit}/>
        </div>
    );
}

export default RequestForm;
