import React from 'react';
import Navbar from "../navbar/navbar.jsx";
import "/src/styles/home/header.css";

function Header() {
    return (
        <header className="home-header">
            <Navbar/>
            <div className="home-header-content">
                <div className={'home-header-content-left'}>
                    <img src={'./src/assets/logoa.png'} alt={'home-base-image'} className={'home-logo'}/>
                    <div className={'home-slogan'}>Personal Expense Tracker</div>
                    <div className={'home-header-side-text'}>It's not about how much money you make,
                        but how much money you keep, how hard it works for you,
                        and how many generations you keep it for. <br/>
                        <span className="small-text">-- Robert Kiyosaki --</span>
                    </div>
                </div>
                <img src={'./src/assets/a.webp'} alt={'home-base-image'} className={'home-base'}/>
                <div className="home-action-btn"></div>
            </div>
        </header>
    );
}

export default Header;
