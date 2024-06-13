import React, {useEffect, useRef} from 'react';
import TextImageContainer from "./text-image.jsx";
import "/src/styles/home/body.css";
import {motion, useAnimation, useInView} from "framer-motion";

function Body({overviewRef, serviceRef}) {
    const isInView = useInView(overviewRef, {once: false});
    const isInView2 = useInView(serviceRef, {once: false});

    const sideAnime = useAnimation();
    const sideAnime2 = useAnimation();

    useEffect(() => {
        if (isInView) {
            console.log('in view');
            sideAnime.start('visible');
        }

        if (isInView2) {
            console.log('in view');
            sideAnime2.start('visible');
        }
    }, [isInView, isInView2]);

    const description1 = 'At Spendwise, we are a ' +
        'team of financial enthusiasts and tech experts dedicated' +
        ' to simplifying personal finance management and' +
        ' empowering you to achieve your financial goals.';

    const description2 = 'Tracking expenses helps you understand' +
        ' your spending, identify savings opportunities,' +
        ' and maintain control over your finances.' +
        ' Stay informed and make better financial decisions.';

    // Effortlessly manage your finances with our expense tracker. Visualize your spending habits with pie charts for clear breakdowns and line charts for monthly variations. Stay informed and in control of your finances with easy-to-read insights.

    const description3 = 'Effortlessly manage your finances with our expense tracker.' +
        ' Visualize your spending habits with pie charts' +
        ' for clear breakdowns and line charts for monthly variations. ' +
        'Stay informed and in control of your finances with easy-to-read insights.';

    // Empower your financial journey by setting personalized goals. Whether you're saving for a vacation, a new home, or retirement, our platform helps you define and track your objectives. Stay motivated and focused on achieving your dreams with clear milestones and progress tracking.

    const description4 = 'Empower your financial journey by setting personalized goals.' +
        ' Whether you\'re saving for a vacation, a new home, or retirement,' +
        ' our platform helps you define and track your objectives. Stay motivated' +
        ' and focused on achieving your dreams with clear milestones and progress tracking.';

    // Easy Expense Tracking

    // Manage your finances seamlessly with our intuitive platform. Our user-friendly dashboard provides a central hub for tracking expenses, offering a streamlined view of your financial activity. Stay organized and in control of your spending with ease.

    const description5 = 'Manage your finances seamlessly with our intuitive platform.' +
        ' Our user-friendly dashboard provides a central hub for tracking expenses,' +
        ' offering a streamlined view of your financial' +
        ' activity. Stay organized and in control of your spending with ease.';

    return (
        <div>
            <div ref={overviewRef} className={'body-item-container'}>
                <motion.div
                    variants={{
                        hidden: {opacity: 0, x: -75},
                        visible: {opacity: 1, x: 0}
                    }}
                    initial={'hidden'}
                    animate={sideAnime}
                    transition={{duration: 0.5, delay: 0.25}}
                    className={'body-item-title'}>Overview</motion.div>
                <TextImageContainer isLeft={true} title={'Who We Are?'} image={'./src/assets/li1.png'}
                                    description={description1}/>
                <TextImageContainer isLeft={false} title={'Why to Track Expenses?'} image={'./src/assets/li4.png'}
                                    description={description2}/>
            </div>

            <div ref={serviceRef} className={'body-item-container'}>
                <motion.div
                    variants={{
                        hidden: {opacity: 0, x: -75},
                        visible: {opacity: 1, x: 0}
                    }}
                    initial={'hidden'}
                    animate={sideAnime2}
                    transition={{duration: 0.5, delay: 0.25}}
                    className={'body-item-title'}>Our Services
                </motion.div>
                <TextImageContainer isLeft={true} title={'Track Your Spending'} image={'./src/assets/li3.png'}
                                    description={description3}/>
                <TextImageContainer isLeft={false} title={'Set Financial Goals'} image={'./src/assets/li5.jpg'}
                                    description={description4}/>
                <TextImageContainer isLeft={true} title={'Easy Expense Tracking'} image={'./src/assets/li2.png'}
                                    description={description5}/>
            </div>
        </div>
    );
}

export default Body;