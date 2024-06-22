import React from 'react';
import { Pie } from 'react-chartjs-2';
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

// Register the necessary components for Chart.js
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Title,
    CategoryScale,
    LinearScale
);

const PieChartComponent = ({type}) => {

    const [value, setValue] = React.useState(15030);
    const [currency, setCurrency] = React.useState('₹');

    const expenseBreakdown = {
        'Food': 500,
        'Transportation': 200,
        'Rent': 1000,
        'Utilities': 300,
        'Entertainment': 150,
    };

    const data = {
        labels: Object.keys(expenseBreakdown),
        datasets: [
            {
                label: 'Expense Breakdown',
                data: Object.values(expenseBreakdown),
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

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    color: '#000',
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        return `${label}: $${value.toFixed(2)}`;
                    },
                },
            },
        },
    };

    const styles = {
        position: 'absolute',
        bottom: '0',
        left: '45%',
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 500,
        fontStyle: 'italic',
        fontSize: '1.4em',
        color: 'rgba(123, 103, 128, 0.89)',
    }

    return (
        <div style={{position: 'relative', height: '90%', width: '100%'}}>
            <Pie data={data} options={options}/>
            <div style={styles}>
                {type} = {currency}<CountUp end={value} duration={5} separator=","/>
            </div>
        </div>
    );
};

export default PieChartComponent;
