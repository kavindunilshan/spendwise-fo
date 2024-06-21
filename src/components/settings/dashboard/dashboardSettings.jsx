import React, {useEffect} from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../settings-context.jsx';



function DashboardSettings(props) {
    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({title: "Dashboard", slogan: "Manage your dashboard settings"});
    }, []);

    return (
        <div></div>
    );
}

export default DashboardSettings;