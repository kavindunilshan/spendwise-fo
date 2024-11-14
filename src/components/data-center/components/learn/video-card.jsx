import React from 'react';
import "/src/styles/data-center/video-card.css";

const VideoCard = ({ videoLink, description }) => {

    function convertToEmbedUrl(url) {
        const urlObj = new URL(url);
        if (urlObj.hostname.includes("youtube.com") && urlObj.searchParams.has("v")) {
            return `https://www.youtube.com/embed/${urlObj.searchParams.get("v")}`;
        }
        return url;
    }

    return (
        <div className="video-card">
            <iframe
                width="500"
                height="300"
                src={convertToEmbedUrl(videoLink)}
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
