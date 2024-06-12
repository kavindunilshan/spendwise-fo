import React from 'react';
import LeftImage from "./left-image.jsx";

function Body(props) {
    const description1 = 'At Spendwise, we are a ' +
        'team of financial enthusiasts and tech experts dedicated' +
        ' to simplifying personal finance management and' +
        ' empowering you to achieve your financial goals.';


    return (
        <div style={{marginTop: '100vh'}}>
            <LeftImage title={'Who We Are'} image={'./src/assets/li1.png'}
            description={description1}/>
        </div>
    );
}

export default Body;