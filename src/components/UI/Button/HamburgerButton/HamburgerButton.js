import React from 'react';

import './HamburgerButton.css';

const hamburgerButton = props => {
    const classes = ['HamburgerButton'];

    if (props.sideDrawerOpened) {
        classes.push('SideDrawer__Opened');
    }

    return (
        <div 
            className={classes.join(' ')}
            onClick={props.onClick}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default hamburgerButton;