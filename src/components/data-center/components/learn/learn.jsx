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
                link: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                description: "This is a helpful video on managing your finances effectively!"
            },
            {
                link: "https://www.youtube.com/embed/otherVideoID",
                description: "Learn how to save and invest wisely."
            }
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
