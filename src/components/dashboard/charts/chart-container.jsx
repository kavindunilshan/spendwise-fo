import React from 'react';
import "/src/styles/dashboard/chart-container.css";

const ChartContainer = ({ title, position, children }) => {
    return (
        <div className={"chart-container"} style={{position: 'absolute', top: position.top, left:position.left}}>
            <div className={"chart-container-title"}>{title}</div>
            {children}
        </div>
    );
}

export default ChartContainer;
