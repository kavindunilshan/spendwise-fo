import React, {useEffect, useRef, useState} from 'react';
import "/src/styles/home/text-image.css";
import {motion, useAnimation, useInView} from "framer-motion";

function TextImageContainer({ isLeft, image, title, description }) {
    const ref = useRef();

    const isInView = useInView(ref, {once: false});

    const anime = useAnimation();

    const [isWidthThresholdPassed, setIsWidthThresholdPassed] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsWidthThresholdPassed(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    useEffect(() => {
        if (isInView) {
            anime.start('visible');
        } else {
            anime.start('hidden');
        }
    }, [isInView]);

    const tags = (
        <>
            {
                isWidthThresholdPassed ?
                    (
                        <>
                            <div className={'home-li-text-container hl-tc-small'}>
                                <h2 className={'home-li-title'}>{title}</h2>
                                <div className={'home-li-description'}>{description}</div>
                            </div>
                            <img src={image} alt={'home-li'} className={'home-li hl-small'} />
                        </>
                    )
                :

                !isLeft ? (
                <>
                    <div className={'home-li-text-container'}>
                        <h2 className={'home-li-title'}>{title}</h2>
                        <div className={'home-li-description'}>{description}</div>
                    </div>
                    <img src={image} alt={'home-li'} className={'home-li'} />
                </>
            ) : (
                <>
                    <img src={image} alt={'home-li'} className={'home-li'} />
                    <div className={'home-li-text-container'}>
                        <h2 className={'home-li-title'}>{title}</h2>
                        <div className={'home-li-description'}>{description}</div>
                    </div>
                </>
            )}
        </>
    );

    return (
        <div ref={ref} className={'home-li-container'}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial={'hidden'}
                animate={anime}
                transition={{duration: 0.5, delay: 0.25}}
                className={`home-li-content ${isWidthThresholdPassed ? 'hl-c-small': ''}`}>
                {tags}
            </motion.div>
        </div>
    );
}

export default TextImageContainer;