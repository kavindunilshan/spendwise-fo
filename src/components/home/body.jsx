import React from 'react';
import TextImageContainer from "./text-image.jsx";
import "/src/styles/home/body.css";

function Body() {
    const description1 = 'At Spendwise, we are a ' +
        'team of financial enthusiasts and tech experts dedicated' +
        ' to simplifying personal finance management and' +
        ' empowering you to achieve your financial goals.';

    const description2 = 'Tracking expenses helps you understand' +
        ' your spending, identify savings opportunities,' +
        ' and maintain control over your finances.' +
        ' Stay informed and make better financial decisions.';


    return (
        <div>
            <div className={'body-item-container'}>
                <div className={'body-item-title'}>Overview</div>
                <TextImageContainer isLeft={true} title={'Who We Are?'} image={'./src/assets/li1.png'}
                                    description={description1}/>
                <TextImageContainer isLeft={false} title={'Why to Track Expenses?'} image={'./src/assets/li2.png'}
                                    description={description2}/>
            </div>

            <div className={'body-item-container'}>
                <div className={'body-item-title'}></div>
                <TextImageContainer isLeft={true} title={'Who We Are?'} image={'./src/assets/li1.png'}
                                    description={description1}/>
                <TextImageContainer isLeft={false} title={'Why to Track Expenses?'} image={'./src/assets/li2.png'}
                                    description={description2}/>
            </div>


            <TextImageContainer isLeft={true} title={'What We Provide'} image={'./src/assets/li1.png'}
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