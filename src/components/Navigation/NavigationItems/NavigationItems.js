import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = props => (
    <ul className="NavigationItems">
        <NavigationItem link="/">Create List</NavigationItem>
        <NavigationItem link="my-lists">My Lists</NavigationItem>
    </ul>
);

export default navigationItems;