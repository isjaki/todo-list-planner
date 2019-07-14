import React from 'react';

import './HamburgerButton.css';

const hamburgerButton = ({ sideDrawerOpened, onClick }) => {
    const classes = ['HamburgerButton'];

    if (sideDrawerOpened) {
        classes.push('SideDrawer__Opened');
    }

    return (
        <div 
            className={classes.join(' ')}
            onClick={onClick}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default hamburgerButton;