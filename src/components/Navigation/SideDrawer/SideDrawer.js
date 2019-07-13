import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import './SideDrawer.css';

const sideDrawer = props => {
    const classes = ['SideDrawer'];

    if (props.opened) {
        classes.push('opened');
    }

    return (
        <Aux>
            <Backdrop 
                show={props.opened} 
                clicked={props.closeSideDrawer}
            />
            <nav className={classes.join(' ')}>
                <NavigationItems />
            </nav>
        </Aux>
    );
}

export default sideDrawer;