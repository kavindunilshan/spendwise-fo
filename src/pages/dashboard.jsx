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
import {fetchUserData, getPreferences} from "../services/settings.js";
import BarChartComponent from "../components/dashboard/charts/bar-chart.jsx";
import dayjs from "dayjs";
import Loading from "../components/utils/loading-image.jsx";
import {useTokenManager} from "../services/direct-tocken.js";
import Notification from "../components/utils/notification.jsx";
import useWindowResize from "../services/useResize.js";

function Dashboard() {

    const { isAuthenticated, user, loginWithRedirect, loginWithPopup } = useAuth0();
    const [redirectAttempted, setRedirectAttempted] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [ isIncomePieChart, setIsIncomePieChart ] = useState(true);
    const [ isExpensePieChart, setIsExpensePieChart ] = useState(true);
    const [ period, setPeriod ] = useState('MONTHLY');
    const [isContentLoaded, setIsContentLoaded] = useState(0);

    const [pocket, setPocket] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    const [changed, setChanged] = useState(false);
    const { getAccessToken } = useTokenManager();

    const [month, setMonth] = useState(dayjs().format('MM YYYY'));

    const [currency, setCurrency] = useState('₹');
    const [monthlyData, setMonthlyData] = useState([]);
    const userId = isAuthenticated ? user.sub.split("|")[1] : null;

    const [secondaryColor, setSecondaryColor] = useState('');
    const [notification, setNotification] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    const windowWidth700 = useWindowResize(700);
    const windowWidth964 = useWindowResize(964);

    const getWidgetPosition = () => {
        if (windowWidth700) {
            return [
                { position: { top: "2%", left: "5%" }, size: { width: "90%", height: "25%" } },
                { position: { top: "36%", left: "5%" }, size: { width: "90%", height: "25%" } },
                { position: { top: "70%", left: "5%" }, size: { width: "90%", height: "20%" } },
                { position: { top: "99%", left: "5%" }, size: { width: "90%", height: "15%" } },
                { position: { top: "110%", left: "5%" }, size: { width: "90%", height: "20%" } },
                { position: { top: "125%", left: "5%" }, size: { width: "90%", height: "30%" } },
                { position: { top: "160%", left: "5%" }, size: { width: "90%", height: "30%" } },
            ];
        }
        if (windowWidth964) {
            return [
                { position: { top: "2%", left: "5%" }, size: { width: "40%", height: "30%" } },
                { position: { top: "35%", left: "5%" }, size: { width: "40%", height: "30%" } },
                { position: { top: "2%", left: "55%" }, size: { width: "40%", height: "25%" } },
                { position: { top: "30%", left: "55%" }, size: { width: "40%", height: "15%" } },
                { position: { top: "48%", left: "55%" }, size: { width: "40%", height: "25%" } },
                { position: { top: "70%", left: "5%" }, size: { width: "90%", height: "25%" } },
                { position: { top: "100%", left: "5%" }, size: { width: "90%", height: "25%" } },
            ];
        }
        return [
            { position: { top: "2%", left: "0.5%" }, size: { width: "25%", height: "40%" } },
            { position: { top: "50%", left: "0.5%" }, size: { width: "25%", height: "42%" } },
            { position: { top: "2%", left: "30%" }, size: { width: "25%", height: "30%" } },
            { position: { top: "39%", left: "30%" }, size: { width: "25%", height: "20%" } },
            { position: { top: "66%", left: "30%" }, size: { width: "25%", height: "26%" } },
            { position: { top: "2%", left: "59%" }, size: { width: "36%", height: "42%" } },
            { position: { top: "52%", left: "59%" }, size: { width: "36%", height: "40%" } },
        ];
    };

    const widgetLayout = getWidgetPosition();

    useEffect(() => {
        if (!isAuthenticated && !redirectAttempted) {
            setRedirectAttempted(true);

            loginWithRedirect().then(() => {
                
            });
        }
    }, [user, isAuthenticated]);

    useEffect(() => {
        if (userId) {
            getPreferences(userId, getAccessToken).then((data) => {
                console.log("Data", data);
                if (!data) {
                    setIsDarkMode(false);
                    setIsIncomePieChart(true);
                    setIsExpensePieChart(true);
                    setPeriod('MONTHLY');
                    return;
                }

                setIsDarkMode(data.isDarkMode);
                setIsIncomePieChart(data.isIncomePieChart);
                setIsExpensePieChart(data.isExpensePieChart);
                setPeriod(data.dataViewPeriod || 'MONTHLY');
            });
        }
    }, [userId]);

    useEffect(() => {

        const value = period === 'ALL' ? 0 : month;

        // Fetch the pocket value from the server
        if (userId) {
            fetchPocketBalance(userId, period, value, getAccessToken).then((data) => {
                setPocket(data.pocket);
                setIncome(data.income);
                setExpense(data.expenses);
                setIsContentLoaded(1);

                handleShowNotification('Data Loaded Successfully', 'success');
            }).catch((error) => {
                setIsContentLoaded(2);
            });

            fetchOverMonthlyData(userId, 6, getAccessToken).then((data) => {
                setMonthlyData(data);
            });

            fetchUserData(userId, getAccessToken).then((data) => {
                setCurrency(data.currency === "" ? "₹" : data.currency);
            });
        }
    }, [userId, period, changed]);

    useEffect(() => {
        setSecondaryColor(getCSSVariableValue('--chart-color'));
        setSecondaryColor(getCSSVariableValue('--red-color'));
        setSecondaryColor(getCSSVariableValue('--yellow-color'));
        setSecondaryColor(getCSSVariableValue('--blue-color'));
    }, [isDarkMode]);

    const handleChanged = (message, severity) => {
        if (message && severity === 'error') {
            handleShowNotification(message, severity);
            return;
        }

        if (message) {
            handleShowNotification(message, severity);
        }

        setChanged(!changed);

    }

    const getCSSVariableValue = (variable) => {
        const dsbElement = document.querySelector('.dsb');

        if (dsbElement) {
            return window.getComputedStyle(dsbElement).getPropertyValue(variable);
        }
    }

    // notification
    const handleShowNotification = (message, severity) => {
        setNotification({ open: true, message, severity });
    };

    const handleCloseNotification = () => {
        setNotification((prev) => ({ ...prev, open: false }));
    };


    if (isContentLoaded === 2) {
        throw new Error("Error fetching data");
    }


    return (
        <>
            {!isContentLoaded ? (
                <Loading />
            ) : (
                <div className={`dsb ${isDarkMode ? "darkmode" : ""}`}>
                    {isAuthenticated && (
                        <>
                            <WidgetContainer
                                title="Expense Break down"
                                position={widgetLayout[0].position}
                                size={widgetLayout[0].size}
                            >
                                {isExpensePieChart ? (
                                    <PieChartComponent
                                        month={month}
                                        currency={currency}
                                        value={expense}
                                        changed={changed}
                                        type={"Expense"}
                                        getCSSVariableValue={getCSSVariableValue}
                                    />
                                ) : (
                                    <BarChartComponent
                                        month={month}
                                        currency={currency}
                                        value={expense}
                                        changed={changed}
                                        type={"Expense"}
                                        getCSSVariableValue={getCSSVariableValue}
                                    />
                                )}
                            </WidgetContainer>
                            <WidgetContainer
                                title="Income Break down"
                                position={widgetLayout[1].position}
                                size={widgetLayout[1].size}
                            >
                                {isIncomePieChart ? (
                                    <PieChartComponent
                                        month={month}
                                        currency={currency}
                                        value={income}
                                        changed={changed}
                                        type={"Income"}
                                        getCSSVariableValue={getCSSVariableValue}
                                    />
                                ) : (
                                    <BarChartComponent
                                        month={month}
                                        currency={currency}
                                        value={income}
                                        changed={changed}
                                        type={"Income"}
                                        getCSSVariableValue={getCSSVariableValue}
                                    />
                                )}
                            </WidgetContainer>
                            <WidgetContainer
                                title="Action Station"
                                position={widgetLayout[2].position}
                                size={widgetLayout[2].size}
                            >
                                <ActionStation onChange={handleChanged} setMonth={setMonth} period={period} />
                            </WidgetContainer>
                            <WidgetContainer
                                title="Available Pocket"
                                position={widgetLayout[3].position}
                                size={widgetLayout[3].size}
                            >
                                <Pocket currency={currency} value={pocket} />
                            </WidgetContainer>
                            <WidgetContainer
                                title="Milestones"
                                position={widgetLayout[4].position}
                                size={widgetLayout[4].size}
                            >
                                <Milestone />
                            </WidgetContainer>
                            <WidgetContainer
                                title="Over Months Analysis"
                                position={widgetLayout[5].position}
                                size={widgetLayout[5].size}
                            >
                                <LineChartComponent
                                    expenseData={Object.values(monthlyData.EXPENSE || {})}
                                    incomeData={Object.values(monthlyData.INCOME || {})}
                                    savingsData={Object.values(monthlyData.SAVING || {})}
                                    getCSSVariableValue={getCSSVariableValue}
                                />
                            </WidgetContainer>
                            <WidgetContainer
                                title="Recent Transactions"
                                position={widgetLayout[6].position}
                                size={widgetLayout[6].size}
                            >
                                <Transactions changed={changed} />
                            </WidgetContainer>

                            <Notification
                                open={notification.open}
                                onClose={handleCloseNotification}
                                message={notification.message}
                                severity={notification.severity}
                            />
                        </>
                    )}
                </div>
            )}
        </>
    );
}

export default Dashboard;
