import React, {useEffect} from 'react';
import { NavLink } from "react-router-dom";
import '/src/styles/settings/settings-menu.css'
import {AutoAwesome, CastForEducation, School} from "@mui/icons-material";
import {useAuth0} from "@auth0/auth0-react";
import {fetchUserData} from "../../services/settings.js";

function DataMenu({}) {

    const {user} = useAuth0();

    const [isAdmin, setIsAdmin] = React.useState(false);


    useEffect(() => {
        fetchUserData(user?.sub.split("|")[1]).then((data) => {
            if (data.is_admin) {
                setIsAdmin(true);
            }
        });
    }, [user]);


    return (
        <div className="settings-sidebar-container">
            <div className="sidebar-menu">
                <ul className="settings-sidebar">
                    <li className="settings-sidebar-item">
                        <NavLink to="/data-center/transactions"
                                 style={({isActive}) => (isActive ? {
                                     color: "#faf7f7",
                                     backgroundColor: '#320440'
                                 } : {})}
                        >Transactions
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/data-center/reports"
                                 style={({isActive}) => (isActive ? {
                                     color: "#faf7f7",
                                     backgroundColor: '#320440'
                                 } : {})}
                        >Reports
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/data-center/goals"
                                 style={({isActive}) => (isActive ? {
                                     color: "#faf7f7",
                                     backgroundColor: '#320440'
                                 } : {})}
                        >Goals
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/data-center/milestones"
                                 style={({isActive}) => (isActive ? {
                                     color: "#faf7f7",
                                     backgroundColor: '#320440'
                                 } : {})}
                        >Milestones
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/data-center/advice"
                                 style={({isActive}) => (isActive ? {
                                     color: "#faf7f7",
                                     backgroundColor: '#320440'
                                 } : {color: '#026021'})}
                        >WiseAdvice<AutoAwesome fontSize={'18'}
                                                style={{marginLeft: '10px', color: '#cdcd04'}}
                        />
                        </NavLink>
                    </li>
                    <li className="settings-sidebar-item">
                        <NavLink to="/data-center/education"
                                 style={({isActive}) => (isActive ? {
                                     color: "#faf7f7",
                                     backgroundColor: '#320440'
                                 } : {color: '#026021'})}
                        >WiseLearn<School fontSize={'24'}
                                                style={{marginLeft: '10px', color: '#987f06'}}
                        />
                        </NavLink>
                    </li>
                    {isAdmin &&

                        <li className="settings-sidebar-item">
                            <NavLink to="/admin/data-center/advice"
                                     style={({isActive}) => (isActive ? {
                                         color: "#faf7f7",
                                         backgroundColor: '#320440'
                                     } : {color: '#7d0a0a'})}
                            >WiseAdvice-Res
                            </NavLink>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
}

export default DataMenu;
