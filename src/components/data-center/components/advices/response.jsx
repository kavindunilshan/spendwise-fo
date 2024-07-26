import React, {useContext, useEffect, useState} from 'react';
import {fetchAdvices} from "../../../../services/data-center.js";
import {SettingsContext} from "../../../settings/settings-context.jsx";
import {useAuth0} from "@auth0/auth0-react";
import AdviceResponse from "./advice-response.jsx";

function Response(props) {

    const { setComponentData } = useContext(SettingsContext);
    const [advices, setAdvices] = useState([]);
    const { isAuthenticated, user, loginWithPopup} = useAuth0();


    useEffect(() => {
        setComponentData({"title": "WiseAdvice-Response", "slogan": "You logged as an admin user."});
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            fetchAdvices(user.sub.split("|")[1]).then((data) => {
                setAdvices(data);
            });
        }

    }, [user]);
    return (
        <div>
            <AdviceResponse
                index={1}
                title={'Title of the Problem'}
                timestamp={'2022-01-01 12:00:00'}
                problem={'This is the problem description.'}
            />
        </div>
    );
}

export default Response;