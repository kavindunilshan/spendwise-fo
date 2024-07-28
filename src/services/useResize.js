import { useState, useEffect } from 'react';

const useWindowResize = (threshold = 768) => {
    const [isWidthThresholdPassed, setIsWidthThresholdPassed] = useState(window.innerWidth < threshold);

    useEffect(() => {
        const handleResize = () => {
            setIsWidthThresholdPassed(window.innerWidth < threshold);
        };

        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [threshold]);

    return isWidthThresholdPassed;
};

export default useWindowResize;
