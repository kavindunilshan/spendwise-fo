import React from 'react';
import Navbar from "../navbar/navbar.jsx";

function Header() {
    return (
        <header className="home-header">
            <Navbar/>
            <img src={'./src/assets/a.png'} alt={'home-base-image'} className={'home-logo'}/>
            <div className={'home-slogan'}>Every Dollar Tells a Story</div>
            <div className="home-action-btn">
            </div>
        </header>
    );
}

export default Header;
