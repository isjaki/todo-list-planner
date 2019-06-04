import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = props => {
    return (
        <nav className="SideDrawer">
            <NavigationItems />
        </nav>
    );
}

export default sideDrawer;