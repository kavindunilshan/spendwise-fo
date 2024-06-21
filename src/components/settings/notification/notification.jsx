import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../settings-context.jsx";

function Notification(props) {
    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "Notification", "slogan": "Manage your account settings"});
    }, []);
    return (
        <div></div>
    );
}

export default Notification;