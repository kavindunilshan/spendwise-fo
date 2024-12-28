import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

// Register Chart.js components and plugins
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    annotationPlugin
);

const LineChartComponent = ({incomeData, getCSSVariableValue, expenseData, savingsData}) => {
    console.log(incomeData);

    function generateMonthLabels() {
        const months = [];
        const currentDate = new Date();

        for (let i = 5; i >= 0; i--) {
            const date = new Date(currentDate);
            date.setMonth(currentDate.getMonth() - i);
            const monthLabel = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}`;
            months.push(monthLabel);
        }

        return months;
    }

    const [secondaryColor, setSecondaryColor] = React.useState(getCSSVariableValue('--chart-color'));
    const [red, setRed] = React.useState(getCSSVariableValue('--red-color'));
    const [blue, setBlue] = React.useState(getCSSVariableValue('--blue-color'));
    const [yellow, setYellow] = React.useState(getCSSVariableValue('--yellow-color'));

    React.useEffect(() => {
        setSecondaryColor(getCSSVariableValue('--chart-color'));
        setRed(getCSSVariableValue('--red-color'));
        setBlue(getCSSVariableValue('--blue-color'));
        setYellow(getCSSVariableValue('--yellow-color'));
    }, [getCSSVariableValue] );



    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month',
                    color: secondaryColor,
                },
                grid: {
                    color: secondaryColor,
                },
                ticks: {
                    color: secondaryColor,
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Value',
                    color: secondaryColor,
                },
                grid: {
                    color: secondaryColor,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return 'Rs. ' + value;
                    },

                    color: secondaryColor,
                    stepSize: 1000,

                    // Maximum number of ticks on the y-axis
                    maxTicksLimit: 6,

                }
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: secondaryColor,
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
    };


    const data = {
        labels: generateMonthLabels(),
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                borderColor: blue,
                backgroundColor: blue,
                fill: true,
                tension: 0,
                borderWidth: 1,
            },
            {
                label: 'Expenses',
                data: expenseData,
                borderColor: red,
                backgroundColor: red,
                fill: true,
                tension: 0,
                borderWidth: 1,
            },
            {
                label: 'Savings',
                data: savingsData,
                borderColor: yellow,
                backgroundColor: yellow,
                fill: true,
                tension: 0,
                borderWidth: 1,
            },
        ],
    };
    return (
        <div style={{ height: '90%', width: '100%' }}>
            <Line data={data} options={options} />
        </div>
    );
}

export default LineChartComponent;
