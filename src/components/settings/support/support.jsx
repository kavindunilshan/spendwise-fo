import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../settings-context.jsx";

function Support(props) {

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({title: "Support", slogan: "Get help and support"});
    } , []);

    return (
        <div>

        </div>
    );
}

export default Support;