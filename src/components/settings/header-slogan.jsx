import React from 'react';
import '/src/styles/settings/header-slogan.css';

function HeaderWithSlogan({title, slogan, width, titleStyle}) {
    return (
        <div className={'settings-header'}>
            <div className={'settings-header-title'} style={titleStyle || {}}>{title}</div>
            <div className={'settings-header-slogan'} style={{fontSize: width ? '0.8em': '1em'}}>{slogan}</div>
            <hr className={'settings-header-separator'} width={width || '100%'}/>
        </div>
    );
}

export default HeaderWithSlogan;