import React from 'react';
import "src/styles/data-center/video-card.css";

const VideoCard = ({ videoLink, description }) => {
    return (
        <div className="video-card">
            <iframe
                width="560"
                height="315"
                src={videoLink}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <p className="video-description">{description}</p>
        </div>
    );
};

export default VideoCard;
