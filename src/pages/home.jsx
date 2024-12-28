import React, {useRef} from 'react';
import Header from "../components/home/header.jsx";
import Body from "../components/home/body.jsx";
import LoginButton from "../components/login/login.jsx";
import Footer from "../components/home/footer.jsx";
import "/src/styles/home/home.css";
import {useTokenManager} from "../services/direct-tocken.js";

function Home() {

    const overviewRef = useRef();
    const serviceRef = useRef();
    const { getAccessToken } = useTokenManager();

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    }

    const apiUrl = window.configs?.VITE_LOCAL_API_URL || import.meta.env.VITE_LOCAL_API_URL;
    console.log("Here1", apiUrl);
    console.log("Here2", import.meta.env.VITE_LOCAL_API_URL);

    return (
        <>
            <img className={'home-landing-img'}
                 src={'/b2.jpg'}
                 alt={'home-base-image'}
                 style={{
                     position: 'absolute',
                     top: '0',
                     bottom: '0',
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover'
                 }}
            />
            <div className="home">
                <LoginButton></LoginButton>
                <Header overviewRef={overviewRef} serviceRef={serviceRef} scrollToSection={scrollToSection}/>
                <div className={'home-body'}>
                    <Body overviewRef={overviewRef} serviceRef={serviceRef}/>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Home;
