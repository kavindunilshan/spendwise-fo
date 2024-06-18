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

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            title: {
                display: true,
                text: 'Month',
                color: '#000',
            },
            grid: {
                color: 'rgba(0,0,0,0.47)',
            },
            ticks: {
                color: '#000',
            },
        },
        y: {
            title: {
                display: true,
                text: 'Value',
                color: '#000',
            },
            grid: {
                color: 'rgba(0,0,0,0.41)',
            },
            ticks: {
                callback: function (value, index, values) {
                    return 'Rs. ' + value;
                },

                color: '#000',
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
                color: '#000',
            }
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
};

const LineChartComponent = ({labels, incomeData, expenseData, savingsData}) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                borderColor: '#120c57',
                backgroundColor: 'rgb(18,12,87)',
                fill: true,
                tension: 0,
                borderWidth: 1,
            },
            {
                label: 'Expenses',
                data: expenseData,
                borderColor: '#7d0a0a',
                backgroundColor: 'rgb(125,10,10)',
                fill: true,
                tension: 0,
                borderWidth: 1,
            },
            {
                label: 'Savings',
                data: savingsData,
                borderColor: 'rgb(136,122,0)',
                backgroundColor: 'rgb(136,122,0)',
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
