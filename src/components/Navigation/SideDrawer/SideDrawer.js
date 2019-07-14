import React, { Fragment } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css';

const sideDrawer = ({ opened, closeSideDrawer }) => {
    const classes = ['SideDrawer'];

    if (opened) {
        classes.push('opened');
    }

    return (
        <Fragment>
            <Backdrop 
                show={opened} 
                clicked={closeSideDrawer}
            />
            <nav className={classes.join(' ')}>
                <NavigationItems />
            </nav>
        </Fragment>
    );
}

export default sideDrawer;