import React, {useContext, useEffect} from 'react';
import HeaderWithSlogan from "../header-slogan.jsx";
import '/src/styles/settings/components/customization.css';
import {SettingsContext} from "../settings-context.jsx";

function Customization({}) {
    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "Customization", "slogan": "Customize your spendWise experience"});
    }, []);
    return (
        <div className={'customization'}>
            <div className={'customization-content'}>

            </div>
        </div>
    );
}

export default Customization;