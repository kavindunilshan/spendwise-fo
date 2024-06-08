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

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Income',
            data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
            borderColor: '#0900a9',
            backgroundColor: 'rgba(136, 132, 216, 0.2)',
            fill: true,
            tension: 0,
            borderWidth: 1,
        },
        {
            label: 'Expenses',
            data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
            borderColor: '#7d0a0a',
            backgroundColor: 'rgba(130, 202, 157, 0.2)',
            fill: true,
            tension: 0,
            borderWidth: 1,
        },
        {
            label: 'Savings',
            data: [400, 398, 9800, 4008, 800, 3000, 300],
            borderColor: 'rgb(205,205,4)',
            backgroundColor: 'rgba(130, 202, 157, 0.2)',
            fill: true,
            tension: 0,
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            title: {
                display: true,
                text: 'Month',
            },
        },
        y: {
            title: {
                display: true,
                text: 'Value',
            },
            ticks: {
                callback: function (value, index, values) {
                    return '$' + value;
                },

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
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
};

const SimpleLineChart = () => (
    <div style={{ height: '300px', width: '450px' }}>
        <Line data={data} options={options} />
    </div>
);

export default SimpleLineChart;
