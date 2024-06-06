import React from 'react';
import '/src/styles/navbar/navbar.css'

function Navbar(props) {
    return (
        <div>
            <nav className={"navbar"}>
                <ul className="navbar-nav">
                    <li className="nav-item">Dashboard</li>
                    <li className="nav-item">Manage</li>
                    <li className="nav-item">Transactions</li>
                    <li className="nav-item">About Us</li>
                </ul>
            </nav>
            <hr className={"nav-separator"}/>
        </div>
    );
}

export default Navbar;