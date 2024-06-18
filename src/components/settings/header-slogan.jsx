import React from 'react';
import '/src/styles/settings/header-slogan.css';

function HeaderWithSlogan({title, slogan, width}) {
    return (
        <div className={'settings-header'}>
            <div className={'settings-header-title'}>{title}</div>
            <div className={'settings-header-slogan'}>{slogan}</div>
            <hr className={'settings-header-separator'} width={width || '100%'}/>
        </div>
    );
}

export default HeaderWithSlogan;