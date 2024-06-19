import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../settings-context.jsx";

function Profile({}) {

    const { setSharedData } = useContext(SettingsContext);

    useEffect(() => {
        setSharedData({"title": "Profile", "slogan": "Manage your account settings"});
    }, []);

    return (
        <div className={'profile-container'}>
        </div>
    );
}

export default Profile;