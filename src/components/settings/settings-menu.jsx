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
                        <NavLink to="/settings/dashboard"
                                 style={({ isActive }) => (isActive ? { color: "#faf7f7", backgroundColor: '#320440'}  : {})}
                                >Dashboard
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/settings/notification"
                            style={({ isActive }) => (isActive ? { color: "#faf7f7", backgroundColor: '#320440'}  : {})}
                            >Notification
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/settings/customization"
                            style={({ isActive }) => (isActive ? { color: "#faf7f7", backgroundColor: '#320440'}  : {})}
                            >Customization
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/settings/support"
                            style={({ isActive }) => (isActive ? { color: "#faf7f7", backgroundColor: '#320440'}  : {})}
                            >Support
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SettingsMenu;
