import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../../../settings/settings-context.jsx";

function Milestones(props) {

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "Milestones", "slogan": "View your financial milestones"});
    }, []);

    return (
        <div></div>
    );
}

export default Milestones;