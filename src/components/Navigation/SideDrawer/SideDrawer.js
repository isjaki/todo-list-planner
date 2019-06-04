import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = props => {
    const classes = ['SideDrawer'];

    if (props.opened) {
        classes.push('opened');
    }

    return (
        <nav className={classes.join(' ')}>
            <NavigationItems />
        </nav>
    );
}

export default sideDrawer;