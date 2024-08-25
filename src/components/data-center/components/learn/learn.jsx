import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../../../settings/settings-context.jsx";

function Learn(props) {

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "WiseLearn", "slogan": "SpendWise financial education platform"});
    }, []);

    return (
        <div></div>
    );
}

export default Learn;