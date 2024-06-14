import React, {useRef} from 'react';
import Header from "../components/home/header.jsx";
import Body from "../components/home/body.jsx";
import LoginButton from "../components/login/login.jsx";

function Home() {

    const overviewRef = useRef();
    const serviceRef = useRef();

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="home">
            <LoginButton></LoginButton>
            <Header overviewRef={overviewRef} serviceRef={serviceRef} scrollToSection={scrollToSection}/>
            <Body overviewRef={overviewRef} serviceRef={serviceRef}/>
        </div>
    );
}

export default Home;
