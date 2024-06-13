import React from 'react';
import '/src/styles/navbar/navbar.css'

function Navbar(props) {
    return (
        <div className={'nav'}>
            <nav className={"navbar"}>
                <ul className="navbar-nav">
                    <li className="nav-item">Dashboard</li>
                    <li className="nav-item">Overview</li>
                    <li className="nav-item">Services</li>
                    <li className="nav-item">Contact Us</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;