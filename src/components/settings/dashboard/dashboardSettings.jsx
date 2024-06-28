import React, {useEffect, useState} from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../settings-context.jsx';
import HeaderWithSlogan from "../header-slogan.jsx";
import '/src/styles/settings/components/dashboard.css';
import Button from "@mui/material/Button";
import {Edit} from "@mui/icons-material";
import {useAuth0} from "@auth0/auth0-react";
import {getPreferences, updatePreferences} from "../../../services/settings.js";



function DashboardSettings(props) {
    const { setComponentData } = useContext(SettingsContext);
    const [ isDarkMode, setIsDarkMode ] = useState(false);
    const [ isIncomePieChart, setIsIncomePieChart ] = useState(true);
    const [ isExpensePieChart, setIsExpensePieChart ] = useState(true);
    const [ isEditing, setIsEditing ] = useState(false);

    const {user} = useAuth0();
    const userId = user?.sub.split('|')[1];

    useEffect(() => {
        setComponentData({title: "Dashboard", slogan: "Manage your dashboard settings"});
    }, []);

    useEffect(() => {
        if (user) {
            getPreferences(user?.sub.split('|')[1]).then((data) => {
                if (data) {
                    setIsDarkMode(data.isDarkMode);
                    setIsIncomePieChart(data.isIncomePieChart);
                    setIsExpensePieChart(data.isExpensePieChart);
                }
            });
        }
    }, [user]);

    const styles = {
        fontSize: '1.3em',
        fontWeight: '600',
        color: '#320440'
    }

    const handleDarkTheme = () => {
        setIsDarkMode(false);
    }

    const handleLightTheme = () => {
        setIsDarkMode(true);
    }

    const handleSave = () => {
        const preferences = {
            isDarkMode,
            isIncomePieChart,
            isExpensePieChart
        }

        updatePreferences(userId, preferences);
        setIsEditing(false);
    }

    const btnStyle = {
        margin: '10px',
        backgroundColor: '#320440',
    }

    return (
        <div className={'settings-dashboard'}>
            <div className={'settings-d-btns'}>
                {!isEditing ?
                    <Button style={btnStyle} variant="contained"
                            onClick={() => setIsEditing(true)}
                            startIcon={<Edit/>}
                    >
                        Edit
                    </Button>
                    : <>
                        <Button style={btnStyle} variant="contained" onClick={() => handleSave()}>Save</Button>
                        <Button style={btnStyle} variant="contained" onClick={() => setIsEditing(false)}>Cancel</Button>
                    </>
                }
            </div>
            <div className={'settings-dashboard-content'}>
                <div className={'settings-dashboard-item'}>
                    <HeaderWithSlogan isSubTopic={true} title={'Theme'} slogan={"select theme for dashboard"}
                                      titleStyle={styles}
                    />

                    <div className={'settings-dashboard-img-container'}>
                        <div className={'settings-dashboard-img-content'}>
                            <img
                                className={`settings-dashboard-img settings-d-img-${!isDarkMode ? 'selected' : ''} ${!isEditing ? 's-d-disabled': ''}`}
                                src={'/src/assets/light.png'}
                                alt={""}
                                onClick={() => isEditing ? setIsDarkMode(false) : null}
                            />
                            <div className={'settings-d-text'}>Light</div>
                        </div>
                        <div className={'settings-dashboard-img-content'}>
                            <img
                                className={`settings-dashboard-img settings-d-img-${isDarkMode ? 'selected' : ''} ${!isEditing ? 's-d-disabled': ''}`}
                                src={'/src/assets/dark.png'}
                                alt={""}
                                onClick={() => isEditing ? setIsDarkMode(true) : null}
                            />
                            <div className={"settings-d-text"}>Dark</div>
                        </div>
                    </div>
                </div>
                <div className={'settings-dashboard-item'}>
                    <HeaderWithSlogan isSubTopic={true} title={'Income View'}
                                      slogan={"select the way you see income breakdown"}
                                      titleStyle={styles}
                    />

                    <div className={'settings-dashboard-img-container'}>
                        <div className={'settings-dashboard-img-content'}>
                            <img
                                className={`settings-dashboard-img settings-d-img-${isIncomePieChart ? 'selected' : ''} ${!isEditing ? 's-d-disabled': ''}`}
                                src={'/src/assets/income.png'}
                                alt={""}
                                onClick={() => isEditing ? setIsIncomePieChart(true) : null}
                            />
                            <div className={'settings-d-text'}>Pie Chart</div>
                        </div>
                        <div className={'settings-dashboard-img-content'}>
                            <img
                                className={`settings-dashboard-img settings-d-img-${!isIncomePieChart ? 'selected' : ''} ${!isEditing ? 's-d-disabled': ''}`}
                                src={'/src/assets/income.png'}
                                alt={""}
                                onClick={() => isEditing ? setIsIncomePieChart(false) : null}
                            />
                            <div className={"settings-d-text"}>Bar Chart</div>
                        </div>
                    </div>
                </div>
                <div className={'settings-dashboard-item'}>
                    <HeaderWithSlogan isSubTopic={true} title={'Expense View'}
                                      slogan={"select the way you see expense breakdown"}
                                      titleStyle={styles}
                    />

                    <div className={'settings-dashboard-img-container'}>
                        <div className={'settings-dashboard-img-content'}>
                            <img
                                className={`settings-dashboard-img settings-d-img-${isExpensePieChart ? 'selected' : ''} ${!isEditing ? 's-d-disabled': ''}`}
                                src={'/src/assets/Expense.png'}
                                alt={""}
                                onClick={() => isEditing ? setIsExpensePieChart(true) : null}
                            />
                            <div className={'settings-d-text'}>Pie Chart</div>
                        </div>
                        <div className={'settings-dashboard-img-content'}>
                            <img
                                className={`settings-dashboard-img settings-d-img-${!isExpensePieChart ? 'selected' : ''} ${!isEditing ? 's-d-disabled': ''}`}
                                src={'/src/assets/expense.png'}
                                alt={""}
                                onClick={() => isEditing ? setIsExpensePieChart(false) : null}
                            />
                            <div className={"settings-d-text"}>Bar Chart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardSettings;