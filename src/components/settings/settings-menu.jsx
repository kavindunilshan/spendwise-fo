import React from 'react';
import { NavLink } from "react-router-dom";
import '/src/styles/settings/settings-menu.css'

function SettingsMenu({}) {
    return (
        <div className="settings-sidebar-container">
            <div className="sidebar-menu">
                <ul className="settings-sidebar">
                    <li className="settings-sidebar-item">
                        <NavLink to="/settings/profile"
                                 style={({ isActive }) => (isActive ? { color: "#faf7f7", backgroundColor: '#320440'} : {})}
                                >Profile
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/settings/account"
                                 style={({ isActive }) => (isActive ? { color: "#faf7f7", backgroundColor: '#320440'}  : {})}
                                >Account
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/settings/appearance"
                            style={({ isActive }) => (isActive ? { color: "#faf7f7", backgroundColor: '#320440'}  : {})}
                            >Appearance
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/settings/customization"
                            style={({ isActive }) => (isActive ? { color: "#faf7f7", backgroundColor: '#320440'}  : {})}
                            >Customization
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/settings/notifications"
                            style={({ isActive }) => (isActive ? { color: "#faf7f7", backgroundColor: '#320440'}  : {})}
                            >Notifications
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SettingsMenu;
