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

    const { setComponentData } = useContext(SettingsContext);
    const [date, setDate] = useState(dayjs());

    useEffect(() => {
        setComponentData({"title": "Reports", "slogan": "Generate your spendWise reports"});
    }, []);

    const handleDownload = () => {
        window.print();
    };


    return (
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
                    {/*<img src={'../src/assets/logoa.png'} alt={'home-base-image'} className={'report-logo'}/>*/}

                    <div className={'report-title'}>SpendWise Monthly Transaction Report</div>
                    <p>
                        This report provides a detailed overview of all your financial activities over the past month,
                        including income, expenses, and savings. By presenting your transactions in both chart and table formats,
                        we aim to give you a clear and comprehensive understanding of your financial landscape.
                        Track your spending patterns, analyze your income sources, and monitor your savings with ease. Our goal is to
                        empower you with the insights you need to manage your finances effectively
                        and make informed decisions for a prosperous future.
                    </p>
                </div>
                <div className={'report-content-body'}>

                    <div className={'report-body-item'}>
                        <HeaderWithSlogan
                            isSubTopic={true}
                            title={'Income'}
                            slogan={'Income data analysis'}
                            titleStyle={{fontWeight: '600', fontStyle: 'italic', fontSize: '1.7em',}}
                        />
                    </div>
                    <div className={'report-body-item'}>
                        <HeaderWithSlogan
                            isSubTopic={true}
                            title={'Expenses'}
                            slogan={'Expenses data analysis'}
                            titleStyle={{fontWeight: '600', fontStyle: 'italic', fontSize: '1.7em',}}
                        />
                    </div>
                    <div className={'report-body-item'}>
                        <HeaderWithSlogan
                            isSubTopic={true}
                            title={'Savings'}
                            slogan={'Savings data analysis'}
                            titleStyle={{fontWeight: '600', fontStyle: 'italic', fontSize: '1.7em',}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reports;