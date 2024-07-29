import React from 'react';
import '/src/styles/navbar/navbar.css'
import {NavLink} from "react-router-dom";
import useWindowResize from "../../../services/useResize.js";
import {ContactMail, Contacts, Dashboard, Pix, SettingsSuggest} from "@mui/icons-material";

function Navbar({overviewRef, serviceRef, scrollToSection}) {

    const widthThreshold = useWindowResize(720);

    const iconStyle = {
        color: '#320440',
        fontSize: 25,
    }

    return (
        <div className={'nav'}>
            <nav className={"navbar"}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={"/dashboard"}>
                            <div className={`${widthThreshold ? 'ni-small' : ''}`}>
                                { widthThreshold && <Dashboard style={iconStyle}/>}
                                <span>Dashboard</span>
                            </div>
                        </NavLink></li>
                    <li onClick={() => scrollToSection(overviewRef)} className="nav-item">
                        <div className={`${widthThreshold ? 'ni-small' : ''}`}>
                            {widthThreshold && <Pix style={iconStyle}/>}
                            <span>Overview</span>
                        </div>
                    </li>
                    <li onClick={() => scrollToSection(serviceRef)} className="nav-item">
                        <div className={`${widthThreshold ? 'ni-small' : ''}`}>
                            {widthThreshold && <SettingsSuggest style={iconStyle}/>}
                            <span>Services</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/contact"}>
                            <div className={`${widthThreshold ? 'ni-small' : ''}`}>
                                {widthThreshold && <Contacts style={iconStyle}/>}
                                <span>Contact</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;