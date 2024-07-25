import React, {useContext, useEffect} from 'react';
import '/src/styles/settings/components/customization.css';
import {SettingsContext} from "../settings-context.jsx";

function Payment({}) {
    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({
            title: 'Payment', slogan: 'Manage payment data and refer history'
        });
    }, []);
    return (
        <div className={'payment'}>
            <div className={'payment-content'}>

            </div>
        </div>
    );
}

export default Payment;