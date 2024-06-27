import React, {useEffect, useState} from 'react';
import "/src/styles/dashboard/dashboard.css";
import WidgetContainer from "../components/dashboard/charts/chart-container.jsx";
import PieChartComponent from "../components/dashboard/charts/pie-chart.jsx";
import LineChartComponent from "../components/dashboard/charts/line-chart.jsx";
import ActionStation from "../components/dashboard/action-station.jsx";
import {useAuth0} from "@auth0/auth0-react";
import Transactions from "../components/dashboard/transaction-table.jsx";
import Pocket from "../components/dashboard/pocket.jsx";
import Milestone from "../components/dashboard/milestone.jsx";
import {fetchOverMonthlyData, fetchPocketBalance} from "../services/dashboard.js";

function Dashboard() {

    const { isAuthenticated, user, loginWithRedirect, loginWithPopup } = useAuth0();
    const [redirectAttempted, setRedirectAttempted] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const [pocket, setPocket] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    const [monthlyData, setMonthlyData] = useState([]);

    const userId = isAuthenticated ? user.sub.split("|")[1] : null;

    // useEffect(() => {
    //     if (!isAuthenticated && !redirectAttempted) {
    //         setRedirectAttempted(true);
    //         loginWithPopup();
    //     }
    // }, []);

    useEffect(() => {
        // Fetch the pocket value from the server
        if (userId) {
            fetchPocketBalance(userId).then((data) => {
                console.log(data)
                setPocket(data.pocket);
                setIncome(data.income);
                setExpense(data.expenses);
            });

            fetchOverMonthlyData(userId, "EXPENSE", 4).then((data) => {
                setMonthlyData(data);
                console.log("Hi Here", data);
            });

        }
    }, [userId]);

    const getCSSVariableValue = (variable) => {
        const dsbElement = document.querySelector('.dsb');

        if (dsbElement) {
            return window.getComputedStyle(dsbElement).getPropertyValue(variable);
        }
    }

    const [secondaryColor, setSecondaryColor] = useState('');

    useEffect(() => {
        setSecondaryColor(getCSSVariableValue('--chart-color'));
        setSecondaryColor(getCSSVariableValue('--red-color'));
        setSecondaryColor(getCSSVariableValue('--yellow-color'));
        setSecondaryColor(getCSSVariableValue('--blue-color'));

    }, [isDarkMode]);


    return (
        <div className={`dsb ${isDarkMode ? 'darkmode': ''}`}>
            {isAuthenticated &&
            <>
                <WidgetContainer title="Expence Break down"
                                 position={{ top: '3%', left: '2%' }}
                                 size={{ width: '25%', height: '40%' }}
                >
                    <PieChartComponent value={expense} type={"Expense"} getCSSVariableValue={getCSSVariableValue}/>
                </WidgetContainer>
                <WidgetContainer title="Income Break down"
                                 position={{ top: '51%', left: '2%' }}
                                 size={{ width: '25%', height: '42%' }}
                >
                    <PieChartComponent value={income} type={"Income"} getCSSVariableValue={getCSSVariableValue}/>
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
                    <Pocket value={pocket}/>
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
                    <LineChartComponent expenseData={Object.values(monthlyData.EXPENSE || {})}
                                        incomeData={Object.values(monthlyData.INCOME || {})}
                                        savingsData={Object.values(monthlyData.SAVING || {})}

                                        getCSSVariableValue={getCSSVariableValue}

                    />
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
