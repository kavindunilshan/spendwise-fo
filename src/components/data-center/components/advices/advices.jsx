import React, {useContext, useEffect, useState} from 'react';
import HeaderWithSlogan from "../../../settings/header-slogan.jsx";
import '/src/styles/data-center/advice.css';
import {SettingsContext} from "../../../settings/settings-context.jsx";
import RequestForm from "./request-form.jsx";
import AdviceResult from "./result.jsx";
import {useAuth0} from "@auth0/auth0-react";
import {fetchAdvices} from "../../../../services/data-center.js";

function Advices({}) {


    const { setComponentData } = useContext(SettingsContext);
    const [advices, setAdvices] = useState([]);
    const [changed, setChanged] = useState(false);

    const { isAuthenticated, user} = useAuth0();


    useEffect(() => {
        setComponentData({"title": "WiseAdvice", "slogan": "Get solved your financial Problem"});
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            fetchAdvices(user.sub.split("|")[1]).then((data) => {
                setAdvices(data);
            });
        }
    }, [user, changed]);

    const toggleChanged = () => {
        setChanged(!changed);
    }


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

                    <RequestForm onChange={toggleChanged}/>
                </div>
                <div className={'advices-info'}>
                    <HeaderWithSlogan title={'WiseAdvices'}
                                      isSubTopic={true}
                                      slogan={'The advice that makes you a financial genius.'}
                                      titleStyle={titleStyle}
                    />

                    {advices.map((advice, index) => {
                        return (
                            <AdviceResult key={index}
                                          index={index + 1}
                                          title={advice.title}
                                          status={advice.status}
                                          timestamp={advice.timestamp.replace("T", " at ")}
                                          problem={advice.problem}
                                          advice={advice.advice}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Advices;