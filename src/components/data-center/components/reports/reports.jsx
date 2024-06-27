import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../../../settings/settings-context.jsx";

function Reports(props) {

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "Reports", "slogan": "Generate your spendWise reports"});
    }, []);

    return (
        <div></div>
    );
}

export default Reports;