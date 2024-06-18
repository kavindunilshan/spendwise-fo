import React from 'react';
import SettingsMenu from "../components/settings/settings-menu.jsx";
import SettingsHeader from "../components/settings/settings-header.jsx";
import '/src/styles/settings/settings.css';
import {Outlet} from "react-router-dom";

function Settings() {
    return (
        <div>
            <SettingsHeader />
            <SettingsMenu />
            <div className="settings-sub-container">
                <Outlet/>
            </div>

        </div>
    );
}

export default Settings;