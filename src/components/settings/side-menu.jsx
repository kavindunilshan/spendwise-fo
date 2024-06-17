import React from 'react';

function SideMenu(props) {
    return (
        <div className={'sidebar-container'}>
            <div className={'sidebar'}>
                <div className={'sidebar-header'}>
                    <h3>Settings</h3>
                    <h4>Account</h4>
                </div>
                <div className={'sidebar-menu'}>
                    <ul>
                        <li>
                            <a href={'#'}>Profile</a>
                        </li>
                        <li>
                            <a href={'#'}>Billing</a>
                        </li>
                        <li>
                            <a href={'#'}>Customization</a>
                        </li>
                        <li>
                            <a href={'#'}>Settings</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;