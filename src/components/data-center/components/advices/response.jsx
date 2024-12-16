import React, {useContext, useEffect, useState} from 'react';
import {fetchAllAdvices, updateAdvice} from "../../../../services/data-center.js";
import {SettingsContext} from "../../../settings/settings-context.jsx";
import {useAuth0} from "@auth0/auth0-react";
import AdviceResponse from "./advice-response.jsx";
import {fetchUserData} from "../../../../services/settings.js";
import {useNavigate} from "react-router-dom";
import {useTokenManager} from "../../../../services/direct-tocken.js";

function Response(props) {

    const { setComponentData } = useContext(SettingsContext);
    const [advices, setAdvices] = useState([]);
    const [changed, setChanged] = useState(false);
    const { isAuthenticated, user, loginWithPopup} = useAuth0();
    const [isAdmin, setIsAdmin] = React.useState(false);
    const { getAccessToken, isAdminUser } = useTokenManager();

    // use navigate
    const navigate = useNavigate();


    useEffect(() => {
        async function checkAdmin() {
            const isAdmin = await isAdminUser()
            if (!isAdmin) {
                navigate('/');
            } else {
                setIsAdmin(true);
            }
        }

        if (isAuthenticated) {
            checkAdmin();
        }
    }, [user]);

    const handleSetAnswer = (index, answer) => {
        const newAdvices = [...advices];
        newAdvices[index].advice = answer;
        newAdvices[index].status = true;
        setAdvices(newAdvices);

        updateAdvice(newAdvices[index].id, newAdvices[index], getAccessToken).then((data) => {
            setChanged(!changed);
        });
    }

    useEffect(() => {
        if (isAuthenticated && isAdmin) {
            fetchAllAdvices(user.sub.split("|")[1], getAccessToken).then((data) => {
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