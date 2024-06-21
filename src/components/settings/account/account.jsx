import React, {useEffect} from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../settings-context.jsx';



function Account(props) {
    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({title: "Account", slogan: "Manage your account settings"});
    }, []);

    return (
        <div></div>
    );
}

export default Account;