import React from 'react';

function Loading(props) {
    return (
        <div>
            <div className="loading">
                <img src={"./src/assets/loading.svg"} alt="Loading..."/>
            </div>
        </div>
    );
}

export default Loading;