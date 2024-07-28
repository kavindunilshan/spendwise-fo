import React, {useEffect, useState} from 'react';
import "/src/styles/home/footer.css";
import {Facebook, Instagram, LinkedIn, Twitter} from "@mui/icons-material";
import useWindowResize from "../../services/useResize.js";

function Footer() {

    const isWidthThresholdPassed = useWindowResize(768);

    return (
        <div className={'home-footer'}>
            <div className={`home-footer-container ${isWidthThresholdPassed ? 'hf-c-small': ''}`}>
                <div className={'home-footer-content-left'}>
                    <img src={'./src/assets/logoa.png'} alt={'home-base-image'} className={'home-footer-logo'}/>
                    <div className={'home-footer-slogan'}>Personal Expense Tracker</div>
                </div>
                <div className={'home-footer-content-right'}>
                    <div className={'home-footer-socials'}>
                        <a href={'https://www.linkedin.com'} target="_blank" className={'home-footer-social-icon'}>
                            <LinkedIn style={{color: "#fff", fontSize: '40px'}}/>
                        </a>
                        <a href={'https://www.facebook.com'} target="_blank" className={'home-footer-social-icon'}>
                            <Facebook style={{color: "#fff", fontSize: '40px'}}/>
                        </a>
                        <a href={'https://www.instagram.com'} target="_blank" className={'home-footer-social-icon'}>
                            <Instagram style={{color: "#fff", fontSize: '40px'}}/>
                        </a>
                        <a href={'https://www.twitter.com'} target="_blank" className={'home-footer-social-icon'}>
                            <Twitter style={{color: "#fff", fontSize: '40px'}}/>
                        </a>
                    </div>
                    <div className={'home-footer-legal'}>
                        <div className={'home-footer-legal-item'}>Privacy Policy</div>
                        <div className={'home-footer-legal-item'}>Terms of Service</div>
                        <div className={'home-footer-legal-item'}>Contact Us</div>
                    </div>
                </div>
            </div>
            <div className={'home-footer-rights-text'}>
                © 2024 SpendWise. Empowering you to take control of your finances. All Rights Received.
            </div>
        </div>
)
    ;
}

export default Footer;