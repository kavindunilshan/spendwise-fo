import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../settings-context.jsx";

function Appearance(props) {
    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "Appearance", "slogan": "Change the look of your spendWise experience"});
    }, []);
    return (
        <div></div>
    );
}

export default Appearance;