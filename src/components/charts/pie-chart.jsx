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

// Register the necessary components for Chart.js
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Title,
    CategoryScale,
    LinearScale
);

const PieChartComponent = () => {
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
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
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

    return (
        <div style={{ height: '250px', width: '400px' }}>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChartComponent;
