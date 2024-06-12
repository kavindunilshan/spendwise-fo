import React from 'react';
import TextImageContainer from "./text-image.jsx";

function Body() {
    const description1 = 'At Spendwise, we are a ' +
        'team of financial enthusiasts and tech experts dedicated' +
        ' to simplifying personal finance management and' +
        ' empowering you to achieve your financial goals.';


    return (
        <div >
            <TextImageContainer isLeft={true} title={'Who We Are'} image={'./src/assets/li1.png'}
                        description={description1}/>
            <TextImageContainer isLeft={false} title={'Who We Are 2'} image={'./src/assets/li1.png'}
                        description={description1}/>
            <TextImageContainer isLeft={true} title={'Who We Are'} image={'./src/assets/li1.png'}
                        description={description1}/>
            <TextImageContainer isLeft={false} title={'Who We Are'} image={'./src/assets/li1.png'}
                        description={description1}/>
            <TextImageContainer isLeft={true} title={'Who We Are'} image={'./src/assets/li1.png'}
                        description={description1}/>
            <TextImageContainer isLeft={false} title={'Who We Are'} image={'./src/assets/li1.png'}
                        description={description1}/>
        </div>
    );
}

export default Body;