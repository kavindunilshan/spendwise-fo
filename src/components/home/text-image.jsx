import React, {useEffect, useRef} from 'react';
import "/src/styles/home/left-image.css";
import {motion, useAnimation, useInView} from "framer-motion";

function TextImageContainer({ isLeft, image, title, description }) {
    const ref = useRef();

    const isInView = useInView(ref, {once: false});

    const tags = (
        <>
            {!isLeft ? (
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


    const anime = useAnimation();

    useEffect(() => {
        if (isInView) {
            console.log('in view');
            anime.start('visible');
        } else {
            console.log('out of view');
            anime.start('hidden');
        }
    }, [isInView]);

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
                className={'home-li-content'}>
                {tags}
            </motion.div>
        </div>
    );
}

export default TextImageContainer;