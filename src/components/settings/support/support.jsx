import React, {useContext, useEffect} from 'react';
import Faq from "react-faq-component";
import {SettingsContext} from "../settings-context.jsx";
import HeaderWithSlogan from "../header-slogan.jsx";
import '/src/styles/settings/components/support.css';

function Support(props) {

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({title: "Support", slogan: "Get help and support"});
    } , []);

    const data = {
        rows: [
            {
                title: "What is the current SpendWise version?",
                content: <p>The current version is 1.0.0</p>,
            },
            {
                title: "How can I customize the dashboard?",
                content: `To customize the dashboard, navigate to Settings > Dashboard. Make sure to press the "Edit" button before making any changes, and remember to save your changes after you finish editing.`,
            },
            {
                title: "Is the dark theme available for all parts of the app?",
                content: `Currently, the dark theme is only available for the dashboard. We plan to extend dark theme support to the entire app in future updates.`,
            },
            {
                title: "How does login and signup work?",
                content: `Login and signup are handled through Auth0. Rest assured, your SpendWise App data is not sent to Auth0; it is securely stored in our local database.`,
            },
            {
                title: "Can I edit a transaction and view its edit history?",
                content: `You can edit each transaction by navigating to /data-center/transactions. However, please note that there is currently no way to view the edit history of a transaction.`,
            },
        ],
    };

    const styles = {
        fontSize: '2.5em',
        fontWeight: '600',
        color: 'rgba(50,4,64,0.7)'
    }

    return (
        <div className={'settings-support'}>
            <HeaderWithSlogan isSubTopic={true} title={'FAQ'} slogan={"Frequently Asked Questions"} titleStyle={styles}/>

            <div className={'settings-support-faq'}>
                <div className={'faq-container'}>
                    <Faq
                        data={data}
                        styles={{
                            bgColor: "white",
                            rowTitleColor: "#320440",
                            rowTitleTextSize: 'large',
                            rowContentColor: "#48484a",
                            rowContentTextSize: '16px',
                            rowContentPaddingTop: '10px',
                            rowContentPaddingBottom: '10px',
                            rowContentPaddingLeft: '50px',
                            rowContentPaddingRight: '50px',
                            arrowColor: "#320440",
                        }}
                    />
                </div>
                <div className={'settings-faq-img'}>
                    <img src={'/faq.png'} alt={'FAQ-img'} className={'faq-img'}/>
                </div>
            </div>
        </div>
    );
}

export default Support;