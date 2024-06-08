import React from 'react';
import "/src/styles/dashboard/chart-container.css";

const ChartContainer = ({ title, position, children }) => {
    // const containerStyle = {
    //     position: 'absolute',
    //     top: position.top,
    //     left: position.left,
    //     border: '1px solid #ccc',
    //     padding: '10px',
    //     borderRadius: '5px',
    //     backgroundColor: '#f9f9f9',
    // };

    return (
        <div className={"chart-container"} style={{position: 'absolute', top: position.top, left:position.left}}>
            <div className={"chart-container-title"}>{title}</div>
            {children}
        </div>
    );
}

export default ChartContainer;
