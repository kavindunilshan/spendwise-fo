import React from 'react';
import { NavLink } from "react-router-dom";
import '/src/styles/settings/settings-menu.css'

function DataMenu({}) {
    return (
        <div className="settings-sidebar-container">
            <div className="sidebar-menu">
                <ul className="settings-sidebar">
                    <li className="settings-sidebar-item">
                        <NavLink to="/data-center/transactions"
                                 style={({ isActive }) => (isActive ? { color: "#faf7f7", backgroundColor: '#320440'} : {})}
                                >Transactions
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/data-center/reports"
                                 style={({ isActive }) => (isActive ? { color: "#faf7f7", backgroundColor: '#320440'}  : {})}
                                >Reports
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/data-center/milestones"
                            style={({ isActive }) => (isActive ? { color: "#faf7f7", backgroundColor: '#320440'}  : {})}
                            >Milestones
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/data-center/goals"
                            style={({ isActive }) => (isActive ? { color: "#faf7f7", backgroundColor: '#320440'}  : {})}
                            >Goals
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DataMenu;
