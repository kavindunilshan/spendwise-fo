import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../../../settings/settings-context.jsx";
import GoalTable from "./goal-table.jsx";

function Goals(props) {

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "Goals", "slogan": "Manage your financial goals"});
    }, []);

    return (
        <div>
            <GoalTable/>
        </div>
    );
}

export default Goals;