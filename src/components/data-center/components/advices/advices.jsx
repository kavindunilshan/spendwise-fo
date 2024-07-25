import React, {useContext, useEffect} from 'react';
import HeaderWithSlogan from "../../../settings/header-slogan.jsx";
import '/src/styles/data-center/advice.css';
import {SettingsContext} from "../../../settings/settings-context.jsx";

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

    return (
        <div className={'advices'}>
            <div className={'advices-content'}>
                <div className={'advices-request'}>
                    <HeaderWithSlogan title={'Request for Advice'}
                                      titleStyle={titleStyle}
                    />
                </div>
            </div>
        </div>
    );
}

export default Advices;