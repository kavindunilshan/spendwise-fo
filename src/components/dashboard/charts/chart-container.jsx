import React from 'react';
import "/src/styles/dashboard/chart-container.css";

const WidgetContainer = ({ title, place, position, size, children }) => {
    return (
        <div className={"chart-container"}
             style={{position: place || 'absolute', top: position.top, left:position.left,
                    width: size.width, height: size.height }}>
            <div className={"chart-container-title"}>{title}</div>
            {children}
        </div>
    );
}

export default WidgetContainer;
