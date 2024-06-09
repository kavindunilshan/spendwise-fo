import React from 'react';

function LeftImage({ image, title, description }) {
    return (
        <div className={'home-left-image'}>
            <div className={'home-left-image-text'}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default LeftImage;