import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../../../settings/settings-context.jsx";
import HeaderWithSlogan from "../../../settings/header-slogan.jsx";
import '/src/styles/data-center/learn.css';
import TextImageContainer from "../../../home/text-image.jsx";

function Learn({}) {

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "WiseLearn", "slogan": "SpendWise financial education platform"});
    }, []);

    const description = 'At SpendWise, we believe that knowledge is key to financial well-being.\n' +
        '                        WiseLearn is our dedicated feature designed to empower you with essential\n' +
        '                        financial education. Explore a wealth of resources, tips, and strategies\n' +
        '                        that will help you manage your finances more effectively, make\n' +
        '                        informed decisions, and achieve your financial goals.\n' +
        '                        Dive into our curated content and take control of\n' +
        '                        your financial future today!'


    const titleStyle = {
        fontSize: '1.7em',
        fontWeight: '500',
        fontStyle: 'italic',
        color: '#320440'
    }

    return (
        <div className={'learn'}>
            <div className={'learn-content'}>
                <div className={'learn-item'}>
                    <TextImageContainer isLeft={true} title={'Welcome to WiseLearn'}
                                        description={description}/>
                </div>
                <img className={'learn-image'} src={'/finance.png'} alt={'learn'}/>
            </div>
        </div>
    );
}

export default Learn;