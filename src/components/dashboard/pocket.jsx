import React from 'react';
import '/src/styles/dashboard/pocket.css';
import CountUp from "react-countup";

function Pocket(props) {

    const [pocketValue, setPocketValue] = React.useState(0);
    const [currency, setCurrency] = React.useState('₹');

    return (
        <div className={'pocket'}>
            <img className={'pocket-img'} src={'./src/assets/wp.jpg'} alt={''}/>
            <div className={'pocket-value'}>
                {currency}<CountUp end={pocketValue} duration={5} separator=","/>
            </div>
        </div>
    );
}

export default Pocket;