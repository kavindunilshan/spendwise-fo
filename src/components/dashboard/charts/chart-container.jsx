import React, {useEffect, useState} from 'react';
import "/src/styles/dashboard/chart-container.css";

const ChartContainer = ({ title, position, size, children }) => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        // Define the handleResize function
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Add event listener for 'resize' event
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={"chart-container"}
             style={{position: 'absolute', top: position.top, left:position.left,
                    width: size.width, height: size.height }}>
            <div className={"chart-container-title"}>{title}</div>
            {children}
        </div>
    );
}

export default ChartContainer;
