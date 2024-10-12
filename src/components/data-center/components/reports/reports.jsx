import React, {useContext, useEffect, useState} from 'react';
import {SettingsContext} from "../../../settings/settings-context.jsx";
import Button from "@mui/material/Button";
import '/src/styles/data-center/report.css';
import {styled} from "@mui/material/styles";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs";
import HeaderWithSlogan from "../../../settings/header-slogan.jsx";
import {useAuth0} from "@auth0/auth0-react";
import {fetchPocketBalance} from "../../../../services/dashboard.js";
import {fetchUserData} from "../../../../services/settings.js";
import WidgetContainer from "../../../dashboard/charts/chart-container.jsx";
import PieChartComponent from "../../../dashboard/charts/pie-chart.jsx";


const CustomDatePicker = styled(DatePicker)({
    '& .MuiOutlinedInput-root': {
        color: 'var(--text-color)',
    },

    '& .MuiInputAdornment-root': {
        color: 'var(--text-color)',
    },
    '& .MuiSvgIcon-root': {
        color: 'var(--text-color)',
    },
    '& .MuiFormLabel-root': {
        color: 'var(--text-color)',
    },
});


function Reports(props) {

    const { isAuthenticated, user, loginWithRedirect, loginWithPopup } = useAuth0();
    const [redirectAttempted, setRedirectAttempted] = useState(false);

    const { setComponentData } = useContext(SettingsContext);
    const [date, setDate] = useState(dayjs());

    const [currency, setCurrency] = useState('₹');
    const [pocket, setPocket] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [saving, setSaving] = useState(0);
    const userId = isAuthenticated ? user.sub.split("|")[1] : null;



    useEffect(() => {
        // Fetch the pocket value from the server
        if (userId) {
            
            fetchPocketBalance(userId, "MONTHLY", date.format('MM YYYY')).then((data) => {
                setPocket(data.pocket);
                setIncome(data.income);
                setExpense(data.expenses);
                setSaving(data.savings);
            });

            fetchUserData(userId).then((data) => {
                setCurrency(data.currency === "" ? "₹" : data.currency);
            });
        }
    }, [userId, date]);

    useEffect(() => {
        setComponentData({"title": "Reports", "slogan": "Generate your spendWise reports"});
    }, []);

    const handleDownload = () => {
        window.print();
    };


    return (
        <>
            {isAuthenticated &&
                <div className={"report-container"}>
                    <div className={"report-header"}>
                        <Button variant="contained" color="primary"
                                onClick={handleDownload}
                                style={{
                                    marginRight: '50px'
                                }}
                        >
                            Download Report
                        </Button>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <CustomDatePicker
                                label={'"month" and "year"'}
                                views={['month', 'year']}
                                style={{size: 'small', backgroundColor: '#111111'}}
                                value={date}
                                onChange={(newDate) => setDate(newDate)}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className={'report-content printable'}>
                        <div className={'report-content-header'}>
                            {/*<img src={'./logoa.png'} alt={'home-base-image'} className={'report-logo'}/>*/}

                            <div className={'report-title'}>SpendWise Monthly Transaction Report</div>
                            <p>
                                This report provides a detailed overview of all your financial activities over the past
                                month,
                                including income, expenses, and savings. By presenting your transactions in both chart
                                and table formats,
                                we aim to give you a clear and comprehensive understanding of your financial landscape.
                                Track your spending patterns, analyze your income sources, and monitor your savings with
                                ease. Our goal is to
                                empower you with the insights you need to manage your finances effectively
                                and make informed decisions for a prosperous future.
                            </p>
                        </div>
                        <div className={'report-content-body'}>

                            <HeaderWithSlogan
                                isSubTopic={true}
                                title={'Visual Data Breakdowns'}
                                slogan={''}
                                titleStyle={{fontWeight: '700', fontStyle: 'italic', fontSize: '2.0em',}}
                            />

                            <div className={'report-content-item'}>
                                <HeaderWithSlogan
                                    isSubTopic={true}
                                    title={'Income'}
                                    slogan={'Income data analysis'}
                                    titleStyle={{fontWeight: '600', fontStyle: 'italic', fontSize: '1.7em',}}
                                />
                                <div className={'report-body-item'}>
                                    {
                                        income > 0 ?
                                        <WidgetContainer title="Income Break down"
                                                         place={'relative'}
                                                         position={{top: '0', left: '0'}}
                                                         size={{width: '500px', height: '350px'}}
                                        >
                                            <PieChartComponent month={date.format('MM YYYY')} changed={date}
                                                               currency={currency} value={income} type={"Income"}/>
                                        </WidgetContainer>
                                        :
                                        <div className={'no-data'}>No Income for this month</div>
                                    }
                                </div>

                                <HeaderWithSlogan
                                    isSubTopic={true}
                                    title={'Expenses'}
                                    slogan={'Expenses data analysis'}
                                    titleStyle={{fontWeight: '600', fontStyle: 'italic', fontSize: '1.7em',}}
                                />

                                <div className={'report-body-item'}>

                                    {
                                        expense > 0 ?
                                        <WidgetContainer title="Expenses Break down"
                                                         place={'relative'}
                                                         position={{top: '0', left: '0'}}
                                                         size={{width: '500px', height: '350px'}}
                                        >
                                            <PieChartComponent month={date.format('MM YYYY')} changed={date}
                                                               currency={currency} value={expense} type={"Expense"}/>
                                        </WidgetContainer>
                                        :
                                        <div className={'no-data'}>No Expenses for this month</div>
                                    }

                                </div>

                                <HeaderWithSlogan
                                    isSubTopic={true}
                                    title={'Savings'}
                                    slogan={'Savings data analysis'}
                                    titleStyle={{fontWeight: '600', fontStyle: 'italic', fontSize: '1.7em',}}
                                />

                                <div className={'report-body-item'}>

                                    {
                                        saving > 0 ?
                                        <WidgetContainer title="Savings Break down"
                                                         place={'relative'}
                                                         position={{top: '0', left: '0'}}
                                                         size={{width: '500px', height: '350px'}}
                                        >
                                            <PieChartComponent month={date.format('MM YYYY')} changed={date}
                                                               currency={currency} value={saving} type={"Savings"}/>
                                        </WidgetContainer>
                                        :
                                        <div className={'no-data'}>No Savings for this month</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }


        </>
    );
}

export default Reports;