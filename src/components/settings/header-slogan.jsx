import React from 'react';
import '/src/styles/settings/header-slogan.css';

function HeaderWithSlogan({title, slogan, isSubTopic, titleStyle}) {
    return (
        <div className={'settings-header'}>
            <div className={'settings-header-title'} style={titleStyle || {}}>{title}</div>
            <div className={'settings-header-slogan'} style={isSubTopic ? {fontSize: '0.8em', fontStyle: 'italic'} : {}}>{slogan}</div>
        </div>
    );
}

export default HeaderWithSlogan;