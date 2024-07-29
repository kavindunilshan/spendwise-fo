import React from 'react';
import Navbar from "./navbar/navbar.jsx";
import "/src/styles/home/header.css";
import useWindowResize from "../../services/useResize.js";

function Header({overviewRef, serviceRef, scrollToSection}) {

    const widthThreshold = useWindowResize(720);

    return (
        <div className="home-header">
            <div className={'home-header-nav'}>
                <Navbar overviewRef={overviewRef} serviceRef={serviceRef} scrollToSection={scrollToSection}/>
            </div>
            <div className={'home-header-main'}>
                <div className="home-header-content">
                    <div className={'home-header-content-left'}>
                        <img src={'./src/assets/logoa.png'} alt={'home-base-image'} className={'home-logo'}/>
                        <div className={`home-slogan ${widthThreshold ? 'hs-small' : ''}`}>Personal Expense Tracker</div>
                        {
                            !widthThreshold &&
                            <div className={'home-header-side-text'}>It's not about how much money you make,
                                but how much money you keep, how hard it works for you,
                                and how many generations you keep it for. <br/>
                                <span className="small-text">-- Robert Kiyosaki --</span>
                            </div>
                        }
                    </div>
                    <div className={'home-header-content-right'}>
                        <img src={'./src/assets/a.webp'} alt={'home-base-image'}
                             className={`home-base ${widthThreshold ? 'hb-small' : ''}`}/>
                    </div>
                </div>
                {
                    widthThreshold &&
                    <div className={'hh-st-small'}>It's not about how much money you make,
                        but how much money you keep, how hard it works for you,
                        and how many generations you keep it for. <br/>
                        <span className="small-text">-- Robert Kiyosaki --</span>
                    </div>
                }
            </div>
        </div>
    );
}

export default Header;
