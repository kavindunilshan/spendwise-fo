import React, {useContext, useEffect, useState} from 'react';
import {fetchAdvices, fetchAllAdvices, updateAdvice} from "../../../../services/data-center.js";
import {SettingsContext} from "../../../settings/settings-context.jsx";
import {useAuth0} from "@auth0/auth0-react";
import AdviceResponse from "./advice-response.jsx";
import {fetchUserData} from "../../../../services/settings.js";
import {useNavigate} from "react-router-dom";

function Response(props) {

    const { setComponentData } = useContext(SettingsContext);
    const [advices, setAdvices] = useState([]);
    const [changed, setChanged] = useState(false);
    const { isAuthenticated, user, loginWithPopup} = useAuth0();
    const [isAdmin, setIsAdmin] = React.useState(false);

    // use navigate
    const navigate = useNavigate();


    useEffect(() => {
        if (isAuthenticated) {
            fetchUserData(user?.sub.split("|")[1]).then((data) => {
                if (data?.is_admin) {
                    setIsAdmin(true);
                    setComponentData({"title": "WiseAdvice-Response", "slogan": "You logged as an admin user."});
                } else {
                    navigate('/');
                }
            }).catch((error) => {
                navigate('/');
            });
        }
    }, [user]);

    const handleSetAnswer = (index, answer) => {
        const newAdvices = [...advices];
        newAdvices[index].advice = answer;
        setAdvices(newAdvices);

        updateAdvice(newAdvices[index]).then((data) => {
            setChanged(!changed);
        });
    }

    useEffect(() => {
        if (isAuthenticated && isAdmin) {
            fetchAllAdvices(user.sub.split("|")[1]).then((data) => {
                setAdvices(data);
            });
        }

    }, [user, isAdmin, changed]);
    return (
        <div>
            {isAdmin && advices.map((advice, index) => {
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