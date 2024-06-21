import React, {useEffect, useState} from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../settings-context.jsx';
import HeaderWithSlogan from "../header-slogan.jsx";
import '/src/styles/settings/components/dashboard.css';



function DashboardSettings(props) {
    const { setComponentData } = useContext(SettingsContext);
    const [ isLightTheme, setIsLightTheme ] = useState(false);

    useEffect(() => {
        setComponentData({title: "Dashboard", slogan: "Manage your dashboard settings"});
    }, []);

    const styles = {
        fontSize: '1.3em',
        fontWeight: '600',
        color: '#320440'
    }

    const handleDarkTheme = () => {
        setIsLightTheme(false);
    }

    const handleLightTheme = () => {
        setIsLightTheme(true);
    }

    return (
        <div className={'settings-dashboard'}>
            <div className={'settings-dashboard-content'}>
                <div className={'settings-dashboard-item'}>
                    <HeaderWithSlogan isSubTopic={true} title={'Theme'} slogan={"select theme for dashboard"}
                                      titleStyle={styles}
                    />

                    <div className={'settings-dashboard-img-container'}>
                        <div className={'settings-dashboard-img-content'}>
                            <img
                                className={`settings-dashboard-img settings-d-img-${isLightTheme ? 'selected' : ''}`}
                                src={'/src/assets/light.png'}
                                alt={""}
                                onClick={() => setIsLightTheme(true)}
                            />
                            <div className={'settings-d-text'}>Light</div>
                        </div>
                        <div className={'settings-dashboard-img-content'}>
                            <img
                                className={`settings-dashboard-img settings-d-img-${!isLightTheme ? 'selected' : ''}`}
                                src={'/src/assets/light.png'}
                                alt={""}
                                onClick={() => setIsLightTheme(false)}
                            />
                            <div className={"settings-d-text"}>Dark</div>
                        </div>
                    </div>
                </div>
                <div className={'settings-dashboard-item'}>
                    <HeaderWithSlogan isSubTopic={true} title={'Expense View'} slogan={"select the way you see expense breakdown"}
                                      titleStyle={styles}
                    />
                </div>
                <div className={'settings-dashboard-item'}>
                    <HeaderWithSlogan isSubTopic={true} title={'Income View'} slogan={"select the way you see income breakdown"}
                                      titleStyle={styles}
                    />
                </div>
            </div>
        </div>
    );
}

export default DashboardSettings;