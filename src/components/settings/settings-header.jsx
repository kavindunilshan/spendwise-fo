import React from 'react';
import '/src/styles/settings/settings-header.css';

function SettingsHeader({}) {
    return (
        <div className={'settings-header'}>
            <div className={'settings-header-title'}>Settings</div>
            <div className={'settings-header-slogan'}>Manage your SpendWise preferences</div>
            <hr className={'settings-header-separator'}/>
        </div>
    );
}

export default SettingsHeader;