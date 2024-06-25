import React, {useEffect} from 'react';
import '/src/styles/dashboard/pocket.css';
import CountUp from "react-countup";
import {fetchPocketBalance} from "../../services/dashboard.js";

function Pocket({value}) {
    const [currency, setCurrency] = React.useState('₹');


    return (
        <div className={'pocket'}>
            <img className={'pocket-img'} src={'./src/assets/wp.jpg'} alt={''}/>
            <div className={'pocket-value'}>
                {currency}<CountUp end={value || 0} duration={5} separator=","/>
            </div>
        </div>
    );
}

export default Pocket;