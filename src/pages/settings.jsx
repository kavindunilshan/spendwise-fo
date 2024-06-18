import React from 'react';
import SettingsMenu from "../components/settings/settings-menu.jsx";
import SettingsHeader from "../components/settings/settings-header.jsx";
import '/src/styles/settings/settings.css';
import {Outlet} from "react-router-dom";

function Settings() {
    return (
        <div>
            <SettingsHeader />

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