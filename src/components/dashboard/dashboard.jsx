import React from 'react';
import "/src/styles/dashboard/dashboard.css";
import SlideBar from "./slide-bar.jsx";
import WidgetContainer from "../charts/chart-container.jsx";
import PieChartComponent from "../charts/pie-chart.jsx";
import LineChartComponent from "../charts/line-chart.jsx";
import ActionStation from "./action-station.jsx";

function Dashboard() {
    return (
        <div className="dsb">
            <SlideBar/>

            <WidgetContainer title="Action Station" position={{ top: '50px', left: '500px' }}>
                <ActionStation/>
            </WidgetContainer>
            <WidgetContainer title="Expence Break down" position={{ top: '50px', left: '50px' }}>
                <PieChartComponent/>
            </WidgetContainer>
            <WidgetContainer title="Income Break down" position={{ top: '400px', left: '50px' }}>
                <PieChartComponent/>
            </WidgetContainer>
            <WidgetContainer title="Expence Break down" position={{ top: '300px', left: '500px' }}>
                <LineChartComponent labels={["January", "February", "March", "April"]}/>
            </WidgetContainer>
        </div>
    );
}

export default Dashboard;
