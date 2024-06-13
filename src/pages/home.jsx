import React from 'react';
import Header from "../components/home/header.jsx";
import Body from "../components/home/body.jsx";
import LoginButton from "../components/home/login.jsx";

function Home() {
    return (
        <div className="home">
            <LoginButton></LoginButton>
            <Header />
            <Body/>
        </div>
    );
}

export default Home;
