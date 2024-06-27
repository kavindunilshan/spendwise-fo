import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../../../settings/settings-context.jsx";

function Transactions(props) {

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "Transactions", "slogan": "Detailed view of your transactions"});
    }, []);

    return (
        <div></div>
    );
}

export default Transactions;