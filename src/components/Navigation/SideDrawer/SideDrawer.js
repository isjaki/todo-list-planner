import React, { Fragment } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css';

const sideDrawer = props => {
    const classes = ['SideDrawer'];

    if (props.opened) {
        classes.push('opened');
    }

    return (
        <Fragment>
            <Backdrop 
                show={props.opened} 
                clicked={props.closeSideDrawer}
            />
            <nav className={classes.join(' ')}>
                <NavigationItems />
            </nav>
        </Fragment>
    );
}

export default sideDrawer;