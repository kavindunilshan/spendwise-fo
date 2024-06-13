import React, {useEffect, useState} from 'react';
import "/src/styles/dashboard/dashboard.css";
import SlideBar from "./slide-bar.jsx";
import WidgetContainer from "../charts/chart-container.jsx";
import PieChartComponent from "../charts/pie-chart.jsx";
import LineChartComponent from "../charts/line-chart.jsx";
import ActionStation from "./action-station.jsx";
import {useAuth0} from "@auth0/auth0-react";

function Dashboard() {

    const { isAuthenticated, loginWithRedirect, loginWithPopup } = useAuth0();
    const [redirectAttempted, setRedirectAttempted] = useState(false);

    useEffect(() => {
        if (!isAuthenticated && !redirectAttempted) {
            setRedirectAttempted(true);
            loginWithRedirect(
                {
                    appState: {
                        returnTo: '/dashboard',
                    },
                }
            );
        }
    }, []);


    return (
        <div className="dsb">
            {isAuthenticated &&
            <>
                <SlideBar/>

                <WidgetContainer title="Action Station" position={{ top: '50px', left: '500px' }}>
                    <ActionStation/>
                </WidgetContainer>
                <WidgetContainer title="Expence Break down" position={{ top: '50px', left: '50px' }}>
                    <PieChartComponent/>
                </WidgetContainer>
                <WidgetContainer title="Income Break down" position={{ top: '400px', left: '50px' }}>
                    <PieChartComponent/>
                </WidgetContainer>
                <WidgetContainer title="Expence Break down" position={{ top: '300px', left: '500px' }}>
                    <LineChartComponent labels={["January", "February", "March", "April"]}/>
                </WidgetContainer>
                <WidgetContainer title="Available Pocket" position={{ top: '50px', left: '1120px' }}>

                </WidgetContainer>
                <WidgetContainer title="Recent Transactions" position={{ top: '350px', left: '1120px' }}>

                </WidgetContainer>
            </>}
        </div>
    );
}

export default Dashboard;
