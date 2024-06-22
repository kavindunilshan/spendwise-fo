import React, {useState} from 'react';
import "/src/styles/dashboard/dashboard.css";
import WidgetContainer from "../components/dashboard/charts/chart-container.jsx";
import PieChartComponent from "../components/dashboard/charts/pie-chart.jsx";
import LineChartComponent from "../components/dashboard/charts/line-chart.jsx";
import ActionStation from "../components/dashboard/action-station.jsx";
import {useAuth0} from "@auth0/auth0-react";
import Transactions from "../components/dashboard/transaction-table.jsx";
import Pocket from "../components/dashboard/pocket.jsx";
import Milestone from "../components/dashboard/milestone.jsx";

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
                <WidgetContainer title="Expence Break down"
                                 position={{ top: '3%', left: '2%' }}
                                 size={{ width: '25%', height: '40%' }}
                >
                    <PieChartComponent type={"Expense"}/>
                </WidgetContainer>
                <WidgetContainer title="Income Break down"
                                 position={{ top: '51%', left: '2%' }}
                                 size={{ width: '25%', height: '42%' }}
                >
                    <PieChartComponent type={"Income"}/>
                </WidgetContainer>


                <WidgetContainer title="Action Station"
                                 position={{ top: '3%', left: '31%' }}
                                 size={{ width: '25%', height: '30%' }}
                >
                    <ActionStation/>
                </WidgetContainer>
                <WidgetContainer title="Available Pocket"
                                 position={{ top: '40%', left: '31%' }}
                                 size={{ width: '25%', height: '20%' }}
                >
                    <Pocket/>
                </WidgetContainer>
                <WidgetContainer title="Milestones"
                                 position={{ top: '67%', left: '31%' }}
                                 size={{ width: '25%', height: '26%' }}
                >
                    <Milestone/>
                </WidgetContainer>


                <WidgetContainer title="Over Months Analysis"
                                 position={{ top: '3%', left: '60%' }}
                                    size={{ width: '36%', height: '42%' }}
                >
                    <LineChartComponent labels={["January", "February", "March", "April"]}
                                        expenseData={[1000, 2000, 1500, 3000]}
                                        incomeData={[2000, 3500, 2500, 4000]}
                                        savingsData={[1000, 1500, 1000, 1000]} />
                </WidgetContainer>

                <WidgetContainer title="Recent Transactions"
                                 position={{ top: '54%', left: '60%' }}
                                    size={{ width: '36%', height: '39%' }}
                >
                    <Transactions/>
                </WidgetContainer>
            </>}
        </div>
    );
}

export default Dashboard;
