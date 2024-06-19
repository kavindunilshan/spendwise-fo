import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../settings-context.jsx";

function Profile({}) {

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "Profile", "slogan": "View and edit your profile information"});
    }, []);

    return (
        <div className={'profile-container'}>
        </div>
    );
}

export default Profile;