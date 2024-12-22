import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../settings-context.jsx";

function Notification(props) {
    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "Notification", "slogan": "Manage your dashboard settings"});
    }, []);
    return (
        <div>
            {/*// no notifications to show*/}

            <div className={'settings-notification'}
                    style={{fontSize: '1.2em',
                        fontWeight: '400',
                        color: 'rgba(50,4,64,0.7)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 100px',
            }}
            >
                No notifications to show
            </div>

        </div>
    );
}

export default Notification;