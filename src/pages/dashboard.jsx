import React, {useState} from 'react';
import "/src/styles/dashboard/dashboard.css";
import SlideBar from "../components/dashboard/slide-bar.jsx";
import WidgetContainer from "../components/dashboard/charts/chart-container.jsx";
import PieChartComponent from "../components/dashboard/charts/pie-chart.jsx";
import LineChartComponent from "../components/dashboard/charts/line-chart.jsx";
import ActionStation from "../components/dashboard/action-station.jsx";
import {useAuth0} from "@auth0/auth0-react";

function Dashboard() {

    const { isAuthenticated, loginWithRedirect, loginWithPopup } = useAuth0();
    const [redirectAttempted, setRedirectAttempted] = useState(false);

    // useEffect(() => {
    //     if (!isAuthenticated && !redirectAttempted) {
    //         setRedirectAttempted(true);
    //         loginWithPopup();
    //     }
    // }, []);


    return (
        <div className="dsb">
            {isAuthenticated &&
            <>
                <WidgetContainer title="Action Station" position={{ top: '3%', left: '33%' }}>
                    <ActionStation/>
                </WidgetContainer>
                <WidgetContainer title="Expence Break down" position={{ top: '3%', left: '2%' }}>
                    <PieChartComponent/>
                </WidgetContainer>
                <WidgetContainer title="Available Pocket" position={{ top: '3%', left: '74%' }}>
                </WidgetContainer>


                <WidgetContainer title="Income Break down" position={{ top: '50%', left: '2%' }}>
                    <PieChartComponent/>
                </WidgetContainer>

                <WidgetContainer title="Expence Break down" position={{ top: '40%', left: '33%' }}>
                    <LineChartComponent labels={["January", "February", "March", "April"]}
                                        expenseData={[1000, 2000, 1500, 3000]}
                                        incomeData={[2000, 3500, 2500, 4000]}
                                        savingsData={[1000, 1500, 1000, 1000]} />
                </WidgetContainer>
                <WidgetContainer title="Recent Transactions" position={{ top: '350px', left: '74%' }}>
                </WidgetContainer>
            </>}
        </div>
    );
}

export default Dashboard;
