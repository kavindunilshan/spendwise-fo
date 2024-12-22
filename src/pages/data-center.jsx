import React, { useState, useEffect, useContext } from 'react';
import '/src/styles/settings/settings.css';
import { Outlet } from "react-router-dom";
import HeaderWithSlogan from "../components/settings/header-slogan.jsx";
import { SettingsContext } from "../components/settings/settings-context.jsx";
import { NavigateNext, Menu } from "@mui/icons-material";
import DataMenu from "../components/data-center/data-menu.jsx";
import '/src/styles/data-center/colors.css';
import '/src/styles/data-center/data-center.css';
import FlatIcons from "../components/data-center/flat-icons.jsx";
import Footer from "../components/home/footer.jsx";
import useWindowResize from "../services/useResize.js";
import {useAuth0} from "@auth0/auth0-react";

function DataCenter() {

    const { componentData } = useContext(SettingsContext);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const { isAuthenticated } = useAuth0();

    const windowWidth1000 = useWindowResize(1020);
    const windowWidth768 = useWindowResize(980);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const handleMenuSelect = () => {
        setIsMenuVisible(false);
    };

    return (
        <>
            {isAuthenticated && (
                <div className={'settings colors'}>
                    <div className={'settings-topics'}>
                        <HeaderWithSlogan title={'Data Center'} slogan={'SpendWise data center'}/>
                        <NavigateNext style={{color: '#6c757d', margin: '0 20px 0 50px'}}/>
                        <HeaderWithSlogan
                            isSubTopic={true}
                            title={componentData.title}
                            slogan={componentData.slogan}
                            titleStyle={{fontWeight: '600', fontStyle: 'italic', fontSize: '1.7em'}}
                        />

                        {!windowWidth768 && (
                            <div className={'data-center-flat-icons'}>
                                <FlatIcons/>
                            </div>
                        )}
                    </div>

                    {windowWidth768 && (
                        <div className={'data-center-flat-icons-small'}>
                            <FlatIcons/>
                        </div>
                    )}

                    <hr className={'settings-header-separator'}/>

                    {windowWidth1000 && isMenuVisible && (
                        <div className="settings-menu-only">
                            <DataMenu onSelect={handleMenuSelect}/>
                        </div>
                    )}

                    {(!windowWidth1000 || !isMenuVisible) && (
                        <div className={!windowWidth1000 ? "settings-sub-container" : "settings-sub-container-small"}>
                            {!windowWidth1000 ? (
                                <>
                                    <div className="settings-left">
                                        <DataMenu onSelect={handleMenuSelect}/>
                                    </div>
                                    <div className="settings-right">
                                        <Outlet/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Menu onClick={toggleMenu}
                                          style={{margin: '20px', cursor: 'pointer', fontSize: '2em'}}/>
                                    <div className="settings-right">
                                        <Outlet/>
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    <Footer/>
                </div>
            )}
        </>
    );
}

export default DataCenter;
