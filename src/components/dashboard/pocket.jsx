import React from 'react';
import '/src/styles/dashboard/pocket.css';
import CountUp from "react-countup";

function Pocket(props) {

    return (
        <div className={'pocket'}>
            <img className={'pocket-img'} src={'./src/assets/wp.jpg'} alt={''}/>
            <div className={'pocket-value'}>
                $<CountUp end={567450} duration={5} separator=","/>
            </div>
        </div>
    );
}

export default Pocket;