import React from 'react';
import '/src/styles/navbar/navbar.css'
import {NavLink} from "react-router-dom";

function Navbar({overviewRef, serviceRef, scrollToSection}) {

    return (
        <div className={'nav'}>
            <nav className={"navbar"}>
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
                    <li onClick={() => scrollToSection(overviewRef)} className="nav-item">Overview</li>
                    <li onClick={() => scrollToSection(serviceRef)} className="nav-item">Services</li>
                    <li className="nav-item">Contact Us</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;