import React, {useEffect} from 'react';
import '/src/styles/dashboard/pocket.css';
import CountUp from "react-countup";

function Pocket({value}) {
    const [currency, setCurrency] = React.useState('₹');

    const [startValue, setStartValue] = React.useState(0);
    const [endValue, setEndValue] = React.useState(0);

    useEffect(() => {
        setStartValue(endValue);
        setEndValue(value);
    }, [value]);




    return (
        <div className={'pocket'}>
            <img className={'pocket-img'} src={'./src/assets/wp.jpg'} alt={''}/>
            <div className={'pocket-value'}>
                {currency}<CountUp start={startValue} end={endValue} duration={3} separator=","/>
            </div>
        </div>
    );
}

export default Pocket;