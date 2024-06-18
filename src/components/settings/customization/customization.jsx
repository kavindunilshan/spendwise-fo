import React from 'react';
import HeaderWithSlogan from "../header-slogan.jsx";
import '/src/styles/settings/components/customization.css';

function Customization({}) {
    return (
        <div className={'customization'}>
            <HeaderWithSlogan
                title={'Customization'}
                slogan={'Customize your account'}
                width={'20%'}
                titleStyle={{fontWeight: '600', fontSize: '1.7em'}}
            />

            <div className={'customization-content'}>

            </div>
        </div>
    );
}

export default Customization;