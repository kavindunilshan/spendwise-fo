import React from 'react';

function RightImage({ image, title, description }) {
    return (
        <div className={'home-right-image'}>
            <div className={'home-right-image-text'}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default RightImage;