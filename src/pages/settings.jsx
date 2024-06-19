import React, {useContext} from 'react';
import SettingsMenu from "../components/settings/settings-menu.jsx";
import '/src/styles/settings/settings.css';
import {Outlet} from "react-router-dom";
import HeaderWithSlogan from "../components/settings/header-slogan.jsx";
import {SettingsContext} from "../components/settings/settings-context.jsx";

function Settings() {

    const { sharedData } = useContext(SettingsContext);

    console.log("settings side", sharedData);

    return (
        <div className={'settings'}>
            <HeaderWithSlogan title={'Settings'} slogan={'Manage your account settings'}/>
            <div className="settings-sub-container">
                <div className="settings-left">
                    <SettingsMenu/>
                </div>
                <div className="settings-right">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Settings;