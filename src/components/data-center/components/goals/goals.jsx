import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../../../settings/settings-context.jsx";

function Goals(props) {

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "Goals", "slogan": "Manage your financial goals"});
    }, []);

    return (
        <div></div>
    );
}

export default Goals;