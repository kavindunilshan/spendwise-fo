import React, {useContext, useEffect} from 'react';
import HeaderWithSlogan from "../../../settings/header-slogan.jsx";
import '/src/styles/data-center/advice.css';
import {SettingsContext} from "../../../settings/settings-context.jsx";
import RequestForm from "./request-form.jsx";
import AdviceResult from "./result.jsx";

function Advices(props) {


    const { setComponentData } = useContext(SettingsContext);


    useEffect(() => {
        setComponentData({"title": "WiseAdvice", "slogan": "Get solved your financial Problem"});
    }, []);


    const titleStyle = {
        fontSize: '1.7em',
        fontWeight: '500',
        fontStyle: 'italic',
        color: '#04504d'
    }

    const titleStyle2 = {
        fontSize: '1.7em',
        fontWeight: '500',
        fontStyle: 'italic',
        color: '#04504d'
    }

    const advice = {
        title: 'Thread 1',
        status: 'Processing',
        timestamp: '2024-07-26 14:30',
        problem: 'This is the problem description.',
        result: 'This is the result of the advice.',
        answerImage: './src/assets/b1.jpg',
        resultImage: './src/assets/b2.jpg'
    };



    return (
        <div className={'advices'}>
            <div className={'advices-content'}>
                <div className={'advices-request'}>
                    <HeaderWithSlogan title={'Request for Advice'}
                                      titleStyle={titleStyle}
                    />

                    <RequestForm/>
                </div>
                <div className={'advices-info'}>
                    <HeaderWithSlogan title={'WiseAdvices'}
                                      isSubTopic={true}
                                      slogan={'The advice that makes you a financial genius.'}
                                      titleStyle={titleStyle}
                    />

                    <AdviceResult {...advice}/>
                </div>
            </div>
        </div>
    );
}

export default Advices;