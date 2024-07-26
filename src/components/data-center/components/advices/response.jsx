import React, {useContext, useEffect, useState} from 'react';
import {fetchAdvices, updateAdvice} from "../../../../services/data-center.js";
import {SettingsContext} from "../../../settings/settings-context.jsx";
import {useAuth0} from "@auth0/auth0-react";
import AdviceResponse from "./advice-response.jsx";

function Response(props) {

    const { setComponentData } = useContext(SettingsContext);
    const [advices, setAdvices] = useState([]);
    const [changed, setChanged] = useState(false);
    const { isAuthenticated, user, loginWithPopup} = useAuth0();


    useEffect(() => {
        setComponentData({"title": "WiseAdvice-Response", "slogan": "You logged as an admin user."});
    }, []);

    const handleSetAnswer = (index, answer) => {
        const newAdvices = [...advices];
        newAdvices[index].advice = answer;
        setAdvices(newAdvices);

        updateAdvice(newAdvices[index]).then((data) => {
            setChanged(!changed);
        });
    }

    useEffect(() => {
        if (isAuthenticated) {
            fetchAdvices(user.sub.split("|")[1]).then((data) => {
                setAdvices(data);
            });
        }

    }, [user, changed]);
    return (
        <div>
            {advices.map((advice, index) => {
                return <AdviceResponse key={index}
                                       index={index}
                                       title={advice.title}
                                       timestamp={advice.timestamp}
                                       problem={advice.problem}
                                       onSetAnswer={handleSetAnswer}
                />
            })}
        </div>
    );
}

export default Response;