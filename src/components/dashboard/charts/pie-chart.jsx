import React, {useEffect} from 'react';
import {Bar, Pie} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    CategoryScale,
    LinearScale
} from 'chart.js';
import CountUp from "react-countup";
import {fetchExpenseBreakdown} from "../../../services/dashboard.js";
import {useAuth0} from "@auth0/auth0-react";
// Register the necessary components for Chart.js
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Title,
    CategoryScale,
    LinearScale
);



const PieChartComponent = ({month, currency, value, changed, type, getCSSVariableValue}) => {
    const [chartData, setChartData] = React.useState({});

    const {user} = useAuth0();

    const [startValue, setStartValue] = React.useState(0);
    const [endValue, setEndValue] = React.useState(0);

    useEffect(() => {
        setStartValue(endValue);
        setEndValue(value);
    }, [value]);

    useEffect(() => {
        console.log("here 23")
        fetchExpenseBreakdown(user.sub.split("|")[1], type.toUpperCase(), month).then((data) => {
            setChartData(data || {});
            console.log("data", data);
        });
    }, [changed]);

    const data = {
        labels: Object.keys(chartData),
        datasets: [
            {
                label: 'Expense Breakdown',
                data: Object.values(chartData),
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const secondaryColor = getCSSVariableValue('--chart-color');

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    color: secondaryColor,
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        return `${label}: ${value.toFixed(2)}`;
                    },
                },
            },
        },
    };

    const styles = {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 500,
        fontStyle: 'italic',
        fontSize: '1.1em',
        color: 'var(--secondary-color)',
    }

    return (
        <>
            <div style={{position: 'relative', height: '85%', width: '95%'}}>
                <Pie data={data} options={options}/>
            </div>
            <div style={styles}>
                Total {type}s = {currency}<CountUp start={startValue} end={endValue} duration={5} separator=","/>
            </div>
        </>
    );
};

export default PieChartComponent;
