import React, { useContext, useEffect, useState } from 'react';
import { SettingsContext } from "../../../settings/settings-context.jsx";
import '/src/styles/data-center/learn.css';
import TextImageContainer from "../../../home/text-image.jsx";
import VideoCard from "./video-card.jsx";

function Learn() {
    const { setComponentData } = useContext(SettingsContext);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        setComponentData({
            "title": "WiseLearn",
            "slogan": "SpendWise financial education platform"
        });

        const dummyVideos = [
            {
                link: "https://www.youtube.com/watch?v=VaiqGsot5ws",
                description: "How to Manage Your Money So You Never Go Broke"
            },
            {
                link: "https://www.youtube.com/watch?v=IfpAjsytwy0",
                description: "How To Manage Your Money Like The 1%"
            },
            {
                link: "https://www.youtube.com/watch?v=4j2emMn7UaI",
                description: "How to Save Money: Financial Literacy"
            },
            {
                link: "https://www.youtube.com/watch?v=MoFj7meoHkY",
                description: "Financial Literacy & The Social Media Generation"
            },
            {
                link: "https://www.youtube.com/watch?v=FXjHwQ6J_yI",
                description: "How to start investing—responsibly"
            },
            {
                link: "https://www.youtube.com/watch?v=jvBaRf9LHDs",
                description: "How to Become a Millionaire in 3 Years"
            },
            {
                link: "https://www.youtube.com/watch?v=UIIYoW4RwYc",
                description: "The REAL Solution to Your Financial Problems"
            },
            {
                link: "https://www.youtube.com/watch?v=UcAY6qRHlw0",
                description: "How to Budget Your Money"
            },

        ];

        setVideos(dummyVideos);
    }, []);

    const description = 'At SpendWise, we believe that knowledge is key to financial well-being. ' +
        'WiseLearn is our dedicated feature designed to empower you with essential ' +
        'financial education. Explore a wealth of resources, tips, and strategies ' +
        'that will help you manage your finances more effectively, make ' +
        'informed decisions, and achieve your financial goals. ' +
        'Dive into our curated content and take control of ' +
        'your financial future today!';

    const titleStyle = {
        fontSize: '1.7em',
        fontWeight: '500',
        fontStyle: 'italic',
        color: '#320440'
    };

    return (
        <div className="learn">
            <div className="learn-content">
                <div className="learn-item">
                    <TextImageContainer
                        isLeft={true}
                        title="Welcome to WiseLearn"
                        description={description}
                        titleStyle={titleStyle}
                    />
                </div>
                <img className="learn-image" src="/finance.png" alt="learn" />
            </div>

            <div className="video-section">
                {videos.map((video, index) => (
                    <VideoCard
                        key={index}
                        videoLink={video.link}
                        description={video.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Learn;
