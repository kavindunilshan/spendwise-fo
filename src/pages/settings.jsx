import React from 'react';
import SettingsMenu from "../components/settings/settings-menu.jsx";
import SettingsHeader from "../components/settings/settings-header.jsx";

function Settings() {
    return (
        <div>
            <SettingsHeader/>
            <SettingsMenu/>
        </div>
    );
}

export default Settings;