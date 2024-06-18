import React from 'react';
import SettingsMenu from "../components/settings/settings-menu.jsx";
import '/src/styles/settings/settings.css';
import {Outlet} from "react-router-dom";
import HeaderWithSlogan from "../components/settings/header-slogan.jsx";

function Settings() {
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