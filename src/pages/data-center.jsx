import React, {useContext} from 'react';
import '/src/styles/settings/settings.css';
import {Outlet} from "react-router-dom";
import HeaderWithSlogan from "../components/settings/header-slogan.jsx";
import {SettingsContext} from "../components/settings/settings-context.jsx";
import {NavigateNext} from "@mui/icons-material";
import DataMenu from "../components/data-center/data-menu.jsx";
import FlatIcons from "../components/dashboard/flat-icons.jsx";

function DataCenter() {

    const { componentData } = useContext(SettingsContext);


    return (
        <div className={'settings'}>
            <div className={'settings-topics'}>
                <HeaderWithSlogan title={'Data Center'} slogan={'SpendWise data center'}/>
                <NavigateNext style={{color: '#6c757d', margin: '0 20px 0 50px'}}/>
                <HeaderWithSlogan
                    isSubTopic={true}
                    title={componentData.title}
                    slogan={componentData.slogan}
                    titleStyle={{fontWeight: '600', fontStyle: 'italic', fontSize: '1.7em',}}
                />

                <div className={'settings-flat-icons'}>
                    <FlatIcons/>
                </div>
            </div>

            <hr className={'settings-header-separator'}/>


            <div className="settings-sub-container">
                <div className="settings-left">
                    <DataMenu/>
                </div>
                <div className="settings-right">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default DataCenter;