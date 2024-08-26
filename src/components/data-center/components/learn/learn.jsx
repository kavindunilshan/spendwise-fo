import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../../../settings/settings-context.jsx";
import HeaderWithSlogan from "../../../settings/header-slogan.jsx";

function Learn({}) {

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "WiseLearn", "slogan": "SpendWise financial education platform"});
    }, []);

    const titleStyle = {
        fontSize: '1.7em',
        fontWeight: '500',
        fontStyle: 'italic',
        color: '#320440'
    }

    return (
        <div className={'learn'}>
            <HeaderWithSlogan
                title={'Welcome to WiseLearn'}
                titleStyle={titleStyle}
            />
            <div className={'learn-content'}>
                <div className={'learn-item'}>
                    <div className={'learn-intro-text'}>
                        At SpendWise, we believe that knowledge is key to financial well-being.
                        WiseLearn is our dedicated feature designed to empower you with essential
                        financial education. Explore a wealth of resources, tips, and strategies
                        that will help you manage your finances more effectively, make
                        informed decisions, and achieve your financial goals.
                        Dive into our curated content and take control of
                        your financial future today!
                    </div>
                </div>
                <img className={'learn-image'} src={'/src/assets/finance.png'} alt={'learn'}/>
            </div>
        </div>
    );
}

export default Learn;