import React, {useEffect} from 'react';
import '/src/styles/dashboard/pocket.css';
import CountUp from "react-countup";
import {fetchPocketBalance} from "../../services/dashboard.js";

function Pocket({userId}) {

    const [value, setValue] = React.useState(185030);
    const [currency, setCurrency] = React.useState('₹');



    useEffect(() => {
        // Fetch the pocket value from the server
        fetchPocketBalance(userId).then((data) => {
            setValue(data);
        });
    }, []);

    return (
        <div className={'pocket'}>
            <img className={'pocket-img'} src={'./src/assets/wp.jpg'} alt={''}/>
            <div className={'pocket-value'}>
                {currency}<CountUp end={value} duration={5} separator=","/>
            </div>
        </div>
    );
}

export default Pocket;