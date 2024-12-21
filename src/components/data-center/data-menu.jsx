import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import '/src/styles/settings/settings-menu.css'
import {AutoAwesome, School} from "@mui/icons-material";
import {useAuth0} from "@auth0/auth0-react";
import {useTokenManager} from "../../services/direct-tocken.js";

function DataMenu({onSelect}) {

    const {user, isAuthenticated} = useAuth0();

    const [isAdmin, setIsAdmin] = React.useState(false);
    const { isAdminUser } = useTokenManager();


    useEffect(() => {
        async function checkAdmin() {
            const isAdmin = await isAdminUser()
            setIsAdmin(isAdmin);
        }

        if (isAuthenticated) {
            checkAdmin();
        }
    }, [user]);


    return (
        <div className="settings-sidebar-container" onClick={() => onSelect()}>
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
                                                style={{marginLeft: '10px', color: '#cdcd04'}}
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
                            >Admin Advices
                            </NavLink>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
}

export default DataMenu;
