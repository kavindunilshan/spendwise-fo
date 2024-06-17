import React from 'react';
import { NavLink } from "react-router-dom";
import '/src/styles/settings/settings-menu.css'

function SettingsMenu({}) {
    return (
        <div className="settings-sidebar-container">
            <div className="sidebar-menu">
                <ul className="settings-sidebar">
                    <li className="settings-sidebar-item">
                        <NavLink to="/settings/profile" activeClassName="active-link">Profile</NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/settings/account" activeClassName="active-link">Account</NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/settings/appearance" activeClassName="active-link">Appearance</NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/settings/customization" activeClassName="active-link">Customization</NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/settings/notifications" activeClassName="active-link">Notifications</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SettingsMenu;
