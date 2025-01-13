import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../../../settings/settings-context.jsx";
import MilestoneTable from "./milestone-table.jsx";

function Milestones(props) {

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "Milestones", "slogan": "View your financial milestones"});
    }, []);

    return (
        <div>
            <MilestoneTable />
        </div>
    );
}

export default Milestones;